# API NodeJS com JWT para sistema de pedidos de pizzaria 🍕

Esta aplicação é uma API em Node.js com suporte a autenticação JWT. Ela permite o cadastro e login de usuários, criação e listagem de categorias, gerenciamento de produtos (cardápio) e pedidos. Toda a API é escrita em **TypeScript**.

---

## 🚀 Como executar

Para executar a aplicação localmente, siga os passos abaixo:

1. Clone este repositório em sua máquina:
   ```
   git clone https://github.com/PedroDutrajs/Pizza-web.git
   ```

2. Acesse a pasta do projeto backend:
   ```
   cd backend
   ```

3. Instale as dependências:
   ```
   yarn install
   ```

4. Configure as variáveis de ambiente no `.env` (se necessário).

5. Inicie a aplicação:
   ```
   yarn dev
   ```

6. Acesse em: [http://localhost:5000](http://localhost:5000)

---

## 📌 Endpoints

---

### 🔐 Autenticação

#### **POST** `/users` – Cria um novo usuário  
**Body:**
```json
{
  "name": "Pedro",
  "email": "pedro@gmail.com",
  "password": "123456"
}
```

#### **POST** `/session` – Realiza login do usuário  
**Body:**
```json
{
  "email": "pedro@gmail.com",
  "password": "123456"
}
```

#### **GET** `/me` – Consulta os dados do usuário autenticado (JWT obrigatório)

---

### 📂 Categorias

#### **POST** `/category` – Cria nova categoria  
**Body:**
```json
{
  "name": "Bebidas"
}
```

#### **GET** `/category` – Lista todas as categorias cadastradas

---

### 🍕 Cardápio

#### **POST** `/product` – Cria item de consumo no cardápio  
**Body (multipart/form-data):**
- name
- price
- description
- category_id
- file (imagem)

#### **GET** `/category/product` – Lista produtos por categoria

---

### 🧾 Pedidos

#### **POST** `/order` – Cria um novo pedido  
**Body:**
```json
{
  "table": 25
}
```

#### **POST** `/order/add` – Adiciona item ao pedido  
**Body:**
```json
{
  "order_id": "id_do_pedido",
  "product_id": "id_do_produto",
  "amount": 2
}
```

#### **GET** `/order` – Lista todos os pedidos  
#### **GET** `/order/detail?order_id=...` – Detalha os itens do pedido  
#### **DELETE** `/order?order_id=...` – Remove o pedido  

#### **PATCH** `/order/send` – Envia pedido à cozinha  
**Body:**
```json
{
  "order_id": "id_do_pedido"
}
```

#### **PATCH** `/order/finish` – Finaliza o pedido  
**Body:**
```json
{
  "order_id": "id_do_pedido"
}
```

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.
