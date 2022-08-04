import React, {useState, useContext} from "react";
import axios from "axios";
import * as s from './styled-CartPage';
import { BASE_URL } from "../../constants/BASE_URL";
import {goToFeedPage, goToProfilePage} from '../../routes/coordinator'
import img_home from "./../../assets/img/home.png";
import img_cart from "./../../assets/img/cart.png";
import img_perfil from "./../../assets/img/perfil.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./../../components/global/GlobalContext";
import CardCart from "./../../components/cardCart/CardCart";

export default function CartPage() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const { currentUser } = useContext(GlobalContext)
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const [ cart2, setCart2 ] = useState(true);
  const [ metPag, setMetPag ] = useState('money');

  const placeOrder = (body) => {
    axios.post(`${BASE_URL}/restaurants/${cart[0].idRestaurant}/order`, body,
    {
      headers: 
      {
        auth: token
      }
    })
    .then( res => console.log('deu certo fazer pedido', res))
    .catch( err => console.log("deu errado fazer pedido", err.response.data))
  }

  const changeCart = (name) => {
    setCart2(!cart2);
    let novoCarrinho = cart.filter( item => {
      return item.name !== name
    })
    cart = novoCarrinho;
    localStorage.setItem("cart", JSON.stringify(novoCarrinho));
  }

  let soma = 0;
  let arrayBody = [];
  cart.forEach( (item,index) => {
    const newObj = {
      id: item.idProduct,
      quantity: item.qtd
    }
    arrayBody.push(newObj); 
    soma = soma + item.qtd * item.price;
  })

  const onClickPay = () => {
    const body = {
      products: arrayBody,
      paymentMethod: metPag
    }
    placeOrder(body);
  }

  const onChangeMetPag = (event) => {
    setMetPag(event.target.value);
  }

  return (
    <s.General>
      <s.Grid>
        <s.Line1>
          <h3>Meu carrinho</h3>
        </s.Line1>
        <s.Line2>
          <div>
            Endereço de entrega
          </div>
          <div>
            {currentUser.address}
          </div>
        </s.Line2>

        <s.Line3>
          {cart.length === 0 ? "Carrinho Vazio" : cart[0].description}
        </s.Line3>

        <s.Line4>
          {
            cart.map( item => {
              return (
                <CardCart key={item.name}
                  name={item.name}
                  photo={item.photo}
                  qtd={item.qtd}
                  description={item.description}
                  price={item.price}
                  changeCart={changeCart}
                />
              )
            })
          }
        </s.Line4>

        <s.Line5>
          <s.Ship>Frete R$: {cart.length === 0 ? "" : cart[0].shippingRestaurant}</s.Ship>
          <s.Total>
            <div>Subtotal</div>
            <div>R$ {soma}</div>
          </s.Total>
          <div>Forma de pagamento</div>
          <hr></hr>
          <s.Payment onChange={onChangeMetPag}>
            <s.Money>
              <input checked="checked" name="metPag" value="money" type="radio" /> Dinheiro
              {/* <label>Dinheiro</label> */}
            </s.Money>
            <s.Credit>
              <input  name="metPag" value="creditcard" type="radio" /> Cartão de Crédito
              {/* <label>Cartão de Crédito</label> */}
            </s.Credit>
          </s.Payment>
        </s.Line5>

        <s.Line6>
          <button onClick={onClickPay}>Confirmar</button>
        </s.Line6>

        <s.Line7>
          <s.ImgFooter src={img_home} onClick={()=>goToFeedPage(navigate)} alt="Home" />
          <s.ImgFooter src={img_cart} alt="Home" />
          <s.ImgFooter src={img_perfil} onClick={()=>goToProfilePage(navigate)} alt="Home" />
        </s.Line7>
      </s.Grid>
    </s.General>
  )
}