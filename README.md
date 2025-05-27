API NodeJS com JWT para cadastro e login
Esta aplicação é uma API em NodeJS que utiliza o JWT para o sistema de autenticação. Ela permite o cadastro e login de usuários e fornece endpoints para cadastro, listagem e remoção de categorias, pedidos e itens de consumo. A sintaxe utilizada é Typescript.

Como executar
Para executar a aplicação, siga os seguintes passos:

Clone este repositório em sua máquina local.
Abra um terminal na pasta raiz da aplicação.
Execute o comando yarn add para instalar as dependências do projeto.
Execute o comando yarn dev start para iniciar a aplicação.
Acesse http://localhost:5000 para utilizar a API.
Endpoints
Cadastro e Login
POST /users - Cria um novo usuário. Deve receber o seguinte corpo:
{
	"name": "Pedro",
	"email": "pedro@gmail.com",
	"password": "123123"
}
POST /session - Faz o login do usuário. Deve receber o seguinte corpo:
{
	"email": "pedro@gmail.com",
	"password": "123123"
}
A resposta terá um token JWT que deve ser utilizado para acessar os outros endpoints.

GET /me - Consulte seu usuário. Retorna seu email, nome e ID:
Categorias
POST /category - Cria uma nova categoria. Deve receber o seguinte corpo:
{
  "name": "Categoria 1"
}
GET /category - Retorna todas as categorias cadastradas.
CARDÁPIO
POST /product - Cria um novo item de consumo para o cardápio. Deve receber o seguinte corpo:
Multipart
name, price, description, categry_id, file (arquivo de imagem);

GET /category/product - Retorna todos os itens de consumo cadastrados por categoria.

POST /order - Cria um novo pedido. Deve receber o seguinte corpo:
{
	"table": 25
}
POST /api/order/add - Adiciona ítem ao pedido. Deve receber o seguinte corpo:
{
	"order_id": "id do pedido criado.",
	"product_id": "id do produto que irá ser adicionado ao pedido",
	"amount": 5
}
GET /order - Retorna todos os pedidos cadastrados.
GET /order/detail?order_id=id - Retorna os itens de um pedido cadastrado.
DELETE /order?order_id=id - Remove o pedido com o ID informado.
PATCH /order/send - Envia o pedido à cozinha. Deve receber o seguinte corpo:
{
	"order_id": "id do pedido"
}
PATCH /api/order/finish - A cozinha finaliza o pedido. Deve receber o seguinte corpo:
{
	"order_id": "id do pedido"
}
