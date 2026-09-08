# 🌎 Diário de Viagens

Aplicação web desenvolvida para **registrar, visualizar e excluir experiências de viagens**.

O projeto integra um **front-end desenvolvido em React** com uma **API REST desenvolvida em Java e Spring Boot**, utilizando **JdbcTemplate** e banco de dados **H2**.

## Sobre o projeto

O **Diário de Viagens** permite registrar informações sobre os lugares visitados, como:

- **Fotografia do local**
- **Nome do lugar**
- **Continente**
- **Localidade**
- **Data de chegada**
- **Data de partida**
- **Descrição da experiência**

Os dados preenchidos no front-end são enviados para a API e armazenados no banco de dados. A tela de visualização realiza uma consulta à API para apresentar as viagens cadastradas.

## Funcionalidades

- **Cadastro de viagens**
- **Visualização das viagens cadastradas**
- **Exclusão de viagens**
- **Pré-visualização da fotografia informada**
- **Validação dos dados enviados**
- **Navegação entre as telas**
- **Integração entre Front-end e API REST**

## Tecnologias utilizadas

### Front-end

- **React**
- **JavaScript**
- **Axios**
- **React Router DOM**
- **CSS Modules**
- **Vite**

### Back-end

- **Java 21**
- **Spring Boot**
- **JdbcTemplate**
- **H2 Database**
- **Maven**

---

## Estrutura do projeto

```text
diario-de-viagem/
├── API/
│   └── integrador/
│       ├── src/
│       ├── pom.xml
│       └── ...
│
├── frontend/
│   └── diario-de-viagens/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── ...
│
├── CONTRATO.md
├── README.md
└── .gitignore
````

## Banco de dados

A aplicação utiliza o banco de dados relacional **H2**.

As configurações de conexão estão no arquivo:

```text
API/integrador/src/main/resources/application.properties
```

O script utilizado para criação da tabela está em:

```text
API/integrador/src/main/resources/schema.sql
```

A tabela principal é a **`viagem`**, responsável por armazenar os dados cadastrados.

A estrutura possui os seguintes campos:

* **id**
* **foto_url**
* **nome_lugar**
* **continente**
* **localidade**
* **data_chegada**
* **data_partida**
* **descricao_experiencia**

O banco H2 utilizado no projeto é executado em memória durante a execução da API.

---

## Integração entre Front-end e API

O front-end utiliza o **Axios** para realizar as requisições HTTP à API REST.

A API é executada localmente em:

```text
http://localhost:8080
```

O recurso utilizado para as operações de viagem é:

```text
http://localhost:8080/viagens
```

A integração utiliza os seguintes métodos:

* **GET** — consulta as viagens cadastradas;
* **POST** — cadastra uma nova viagem;
* **DELETE** — exclui uma viagem pelo identificador.

A API permite requisições do front-end executado em:

```text
http://localhost:5173
```

A documentação completa dos endpoints, incluindo parâmetros, exemplos de requisição e resposta, regras de validação e códigos HTTP, está disponível em [**CONTRATO.md**](./CONTRATO.md).

---

## Como executar

Para utilizar a aplicação, é necessário executar o **back-end e o front-end simultaneamente**.

### 1. Back-end — Spring Boot

Entre na pasta `API/integrador` e abra o projeto na IDE.

Depois de carregar o projeto e suas dependências, execute a classe `IntegradorApplication`.

Com a aplicação iniciada, a API poderá ser acessada em:

`http://localhost:8080`

### 2. Front-end — React

Abra outro terminal na pasta do front-end:

```bash
cd frontend/diario-de-viagens
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

O Vite informará no terminal o endereço para acessar o front-end, normalmente:

```text
http://localhost:5173
```

### Importante

A **API e o front-end devem permanecer em execução simultaneamente** para que o cadastro, a visualização e a exclusão das viagens funcionem corretamente.

---

## Fluxo da aplicação

```text
Usuário
   ↓
Front-end React
   ↓
Axios
   ↓
API REST
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Banco de dados H2
```

---

## API

A API disponibiliza os seguintes endpoints:

| Método   | Endpoint        | Descrição                        |
| -------- | --------------- | -------------------------------- |
| `GET`    | `/viagens`      | **Lista as viagens cadastradas** |
| `POST`   | `/viagens`      | **Cadastra uma nova viagem**     |
| `DELETE` | `/viagens/{id}` | **Exclui uma viagem**            |

Para consultar os **parâmetros, formatos das requisições e respostas, regras de validação e códigos HTTP**, acesse o [**Contrato da API**](./CONTRATO.md).
