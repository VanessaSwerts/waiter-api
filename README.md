
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/VanessaSwerts/waiter-api?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/VanessaSwerts/waiter-api">

  <a href="https://github.com/VanessaSwerts/waiter-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VanessaSwerts/waiter-api">
  </a>

</p>

<h4 align="center">
	✅ Waiter Api - Concluído ✅
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-layout">Layout</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-estrutura-de-arquivos">Estrutura de arquivos</a> • 
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autores">Autores</a> •
</p>


## 💻 Sobre o projeto

Projeto desenvolvido durante o evento 'O Poder do Javascript' ministrado pelo [Mateus Silva](https://github.com/maateusilva), onde construimos o backend e front-end (web e mobile) de um aplicativo para controlar os pedidos de um restaurante. 

---

## 🎨 Diagrama Entidade Relacionamento

![DER](https://user-images.githubusercontent.com/57146734/201981353-4eefc595-9324-46e2-990a-8062b65e2223.png)

---

## 🚀 Como executar o projeto

Este projeto é dividido em três partes:
1. [Frontend - App](https://github.com/VanessaSwerts/waiter-App)
2. [Frontend - Web](https://github.com/VanessaSwerts/waiter-Web)
3. Backend (Neste repositório)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/).

Para o desenvolvimento desse projeto, foi utilizado Docker para criar o banco de dado MongoDB. 

#### Executando o projeto

##### 🧭 Rodando a aplicação Backend

   ```bash
    # Clone este repositório
    $ git clone https://github.com/VanessaSwerts/waiter-api.git

    # Acesse a pasta do projeto no seu terminal/cmd
    $ cd waiter-api

    # Instale as dependências
    $ yarn install
    
    # Gere a build
    $ yarn build 

    # Execute a aplicação
    $ yarn dev 
    
    # O servidor irá rodar em http://localhost:3000
    
   ```
---

## 📁 Estrutura de arquivos

Atualizado 15/11/2022

```
api
├─ .gitignore
├─ package.json
├─ src
│  ├─ app
│  │  ├─ models
│  │  │  ├─ Category.ts
│  │  │  ├─ Order.ts
│  │  │  └─ Product.ts
│  │  └─ useCases
│  │     ├─ categories
│  │     │  ├─ createCategory.ts
│  │     │  ├─ deleteCategory.ts
│  │     │  ├─ listCategories.ts
│  │     │  └─ listProductsByCategory.ts
│  │     ├─ orders
│  │     │  ├─ createOrder.ts
│  │     │  ├─ deleteOrder.ts
│  │     │  ├─ listOrders.ts
│  │     │  └─ updateOrderStatus.ts
│  │     └─ products
│  │        ├─ createProduct.ts
│  │        └─ listProducts.ts
│  ├─ index.ts
│  └─ router.ts
├─ tsconfig.json
├─ uploads
│  ├─ 1668527760118-quatro-queijos.png
│  ├─ 1668528957762-frango-catupiry.png
│  └─ 1668529163867-coca-cola.png
└─ yarn.lock

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **API**  ([Node JS](https://nodejs.org/docs/latest/api/))
- **Dependências**:
  -   **[Express](https://expressjs.com/pt-br/)**
  -   **[Mongoose](https://mongoosejs.com)**
  -   **[Multer](https://github.com/expressjs/multer)**
  
- **Dependências de Desenvolvimento**:
  -   **[ESLINT](https://eslint.org)**
  -   **[Nodemon](https://github.com/remy/nodemon)**
  -   **[TS Node](https://github.com/TypeStrong/ts-node)**
  -   **[Typescript](https://www.typescriptlang.org)** 


Veja o arquivo  [package.json](https://github.com/VanessaSwerts/waiter-api/blob/master/package.json)

---

## 🦸 Autores

<table>
  <tr>
    <td align="center"><a href="https://github.com/vanessaSwerts/"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/57146734?v=4" width="100px;" alt=""/><br /><sub><b>Vanessa Swerts</b></sub></a></td>
  </tr>
</table>

