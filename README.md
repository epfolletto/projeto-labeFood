# `Projeto`
Projeto LabeFoods

# `Link`
[Clique aqui!](https://labefoods-alves5.surge.sh)

# `Descrição`
O Projeto LabeFoods foi desenvolvido como projeto final de Front End dentro do curso Full-Stack Web Developer da Labenu, o qual consiste em requisições (via axios) para a API labeFoods, que contém informações relacionadas ao desenvolvimento de uma aplicação que simula um aplicativo semelhante ao conhecido app iFood. Este projeto foi baseado no layout layout FutureEats. </br>
A documentação da API pode ser encontrada [aqui](https://documenter.getpostman.com/view/7549981/SWTEdGtT).

# `Modo de usar`
Ao iniciar a aplicação o usuário é direcionado para a tela de Login. Nesta tela, o usuário pode efetuar seu login ou então se inscrever na plataforma, criando um usuário com nome, email, senha e dados de endereço.
</br>
Após efetuar login, o usuário é redirecionado para a página de feed, onde poderá escolher entre diferentes tipos de restaurantes, podendo filtrar por palavras chave (utilizando para o tal o campo de buscas) ou por tipos de comidas, na barra superior. Dentre as opções estão por exemplo comida Asiática, Hamburgueres, Italiana, Sorvetes entre outras.
</br>
Clicando sobre a imagem de um restaurante no feed, o usuário é redicionado para a página de detalhes. É mostrada a imagem do restaurante e algumas informações, como por exemplo o endereço. Abaixo são listados todos os produtos oferecidos pelo estabelecimento, com informações de nome, descrição e preço. Ao clicar em "adicionar" é aberta uma janela para a escolha da quantidade. Após adicionar ao carrinho, o ícone passa a exibir o texto "remover" e na parte superior do card aparece a quantidade deste ítem que está inserida no carrinho.
</br>
Na parte inferior da página existe um menu, onde o usuário pode acessar a página de carrinho e verificar todos os itens que adicionou ao mesmo, valor do frente e total da compra, além de selecionar um método de pagamento. Também é possível remover itens da lista. Ao clicar em confirmar, será exibida uma mensagem de pedido realizado com sucesso.
</br>
No menu inferior, o usuário pode clicar no ícone de perfil e então será redirecionado para a página de perfil do usuário. Nesta página são carregados os dados do usuário logado. Existe a opção de alterar os dados de cadastro e de endereço, bastando para tal clicar no ícone de edição. Ao clicar em editar, o usuário é redirecionado para as páginas de edição, onde são mostrados os formulário já contendo seus dados de cadastro originais e editáveis, onde o usuário pode fazer as modificações que desejar. Também é mostrado o histórico de pedidos, onde é exibida uma lista contendo as informações do nome do restaurante, a data da compra e o total gasto. No canto superior direito da página, é mostrada uma mensagem "Olá, nome-do-usuário" e um ícone onde é possível fazer o logout da conta, sendo então redirecionado para a página de login.

# `Instalando e rodando o projeto`
Fazer o clone do projeto:
- git clone link-do-repositório

Instalar as dependências:
- npm install

Rodar o projeto:
- npm run start

# `Tecnologias utilizadas`
<div>
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
</div>

# `Autores`
Evandro Paulo Folletto </br>
José Robinaldo Ramos da Silva </br>
Leonardo José Silva Lopes de Souza </br>
Márleo Piber da Rosa </br>
Olavo Marques do Nascimento

# `Imagens`
### Página Login
<img src="./future-eats-b/src/assets/img_readme/login.png"/>

### Página SignUp (Cadastro)
<img src="./future-eats-b/src/assets/img_readme/signup.png"/>

### Página Feed
<img src="./future-eats-b/src/assets/img_readme/feed.png"/>

### Página detalhes
<img src="./future-eats-b/src/assets/img_readme/restaurant.png"/>

### Página Carrinho
<img src="./future-eats-b/src/assets/img_readme/cart.png"/>

### Página Perfil
<img src="./future-eats-b/src/assets/img_readme/profile.png"/>

### Página Editar perfil
<img src="./future-eats-b/src/assets/img_readme/profile_edit.png"/>

### Página Editar Endereço
<img src="./future-eats-b/src/assets/img_readme/profile_address.png"/>
