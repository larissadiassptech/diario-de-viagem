# 🌎 Diário de Viagens

Aplicação web desenvolvida para **registrar, visualizar e excluir experiências de viagens**.

O projeto integra um **front-end desenvolvido em React** com uma **API REST desenvolvida em Java e Spring Boot**, utilizando **JdbcTemplate** e banco de dados **H2**.

## 📖 Sobre o projeto

O **Diário de Viagens** permite que o usuário registre informações sobre os lugares visitados, incluindo:

- **Fotografia do local**
- **Nome do lugar**
- **Continente**
- **Localidade**
- **Data de chegada**
- **Data de partida**
- **Descrição da experiência**

As informações cadastradas são **enviadas para a API e armazenadas no banco de dados**. A tela de visualização consulta a API para apresentar os registros cadastrados.

## ⚙️ Funcionalidades

- **Cadastro de viagens**
- **Visualização das viagens cadastradas**
- **Exclusão de viagens**
- **Pré-visualização da fotografia informada**
- **Validação dos dados enviados**
- **Navegação entre as telas da aplicação**
- **Integração entre Front-end e API REST**

## 💻 Tecnologias utilizadas

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

## 📁 Estrutura do projeto

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

---

## 🗄️ Banco de dados

A aplicação utiliza o banco de dados relacional **H2**.

O script responsável pela criação da tabela está localizado em:

```text
API/integrador/src/main/resources/schema.sql
```

A tabela principal da aplicação é **`viagem`**, responsável por armazenar os dados das viagens cadastradas.

---

## 🔗 Integração entre Front-end e API

O front-end utiliza o **Axios** para realizar as requisições HTTP para a API REST.

A API é executada localmente em:

```text
http://localhost:8080
```

O recurso utilizado para as operações relacionadas às viagens é:

```text
http://localhost:8080/viagens
```

O front-end utiliza a API para:

* **Enviar novas viagens** através do método `POST`;
* **Buscar as viagens cadastradas** através do método `GET`;
* **Excluir viagens** através do método `DELETE`.

A documentação detalhada dos endpoints está disponível no arquivo **[CONTRATO.md](./CONTRATO.md)**.

---

## ▶️ Como executar

Para utilizar a aplicação, o **back-end e o front-end devem ser executados simultaneamente**.

### 🔹 Back-end

Abra um terminal na pasta da API:

```bash
cd API/integrador
```

Execute o projeto:

```bash
mvnw.cmd spring-boot:run
```

A API será disponibilizada em:

```text
http://localhost:8080
```

### 🔹 Front-end

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

### ⚠️ Importante

A **API e o front-end devem estar em execução simultaneamente** para que o cadastro, a visualização e a exclusão das viagens funcionem corretamente.

---

## 🔄 Fluxo da aplicação

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

## 🌐 API

A API disponibiliza os seguintes endpoints:

| **Método** | **Endpoint**    | **Descrição**                    |
| ---------- | --------------- | -------------------------------- |
| `GET`      | `/viagens`      | **Lista as viagens cadastradas** |
| `POST`     | `/viagens`      | **Cadastra uma nova viagem**     |
| `DELETE`   | `/viagens/{id}` | **Exclui uma viagem**            |

Para consultar os **parâmetros, formatos das requisições e respostas, regras de validação e códigos HTTP**, acesse o **[Contrato da API](./CONTRATO.md)**.

```
```
