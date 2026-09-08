# 📋 Contrato da API — Diário de Viagens

## 1. Objetivo

A API do **Diário de Viagens** é responsável por receber, validar, consultar e excluir os registros de viagens realizados pelo usuário.

A comunicação entre o **front-end React** e o **back-end Java com Spring Boot** ocorre por meio de requisições HTTP utilizando uma API REST.

---

## 2. Tecnologias utilizadas

- **Java 21**
- **Spring Boot**
- **JdbcTemplate**
- **H2 Database**
- **Maven**

---

## 3. URL base

Durante a execução local, a API estará disponível em:

```text
http://localhost:8080
````

O recurso principal da aplicação é:

```text
/viagens
```

---

# 4. Endpoints

## 4.1 GET `/viagens`

### Descrição

Retorna todas as viagens cadastradas no banco de dados.

### Método HTTP

```text
GET
```

### URL

```text
http://localhost:8080/viagens
```

### Parâmetros

Não possui parâmetros.

### Resposta de sucesso

**Status: `200 OK`**

```json
[
    {
        "id": 1,
        "fotoUrl": "https://exemplo.com/paris.jpg",
        "nomeLugar": "Torre Eiffel",
        "continente": "Europa",
        "localidade": "Paris, França",
        "dataChegada": "2026-07-10",
        "dataPartida": "2026-07-15",
        "descricaoExperiencia": "Uma experiência incrível em Paris."
    }
]
```

---

## 4.2 POST `/viagens`

### Descrição

Realiza o cadastro de uma nova viagem.

### Método HTTP

```text
POST
```

### URL

```text
http://localhost:8080/viagens
```

### Cabeçalho

```text
Content-Type: application/json
```

### Corpo da requisição

```json
{
    "fotoUrl": "https://exemplo.com/paris.jpg",
    "nomeLugar": "Torre Eiffel",
    "continente": "Europa",
    "localidade": "Paris, França",
    "dataChegada": "2026-07-10",
    "dataPartida": "2026-07-15",
    "descricaoExperiencia": "Uma experiência incrível em Paris."
}
```

### Campos da requisição

| **Campo**              | **Tipo** | **Obrigatório** | **Descrição**                           |
| ---------------------- | -------- | --------------- | --------------------------------------- |
| `fotoUrl`              | String   | **Sim**         | URL da fotografia do local              |
| `nomeLugar`            | String   | **Sim**         | Nome do lugar visitado                  |
| `continente`           | String   | **Sim**         | Continente onde o local está localizado |
| `localidade`           | String   | **Sim**         | Cidade e país do local                  |
| `dataChegada`          | Date     | **Sim**         | Data de chegada                         |
| `dataPartida`          | Date     | Não             | Data de partida                         |
| `descricaoExperiencia` | String   | **Sim**         | Descrição da experiência                |

### Resposta de sucesso

**Status: `201 Created`**

```json
{
    "id": 1,
    "fotoUrl": "https://exemplo.com/paris.jpg",
    "nomeLugar": "Torre Eiffel",
    "continente": "Europa",
    "localidade": "Paris, França",
    "dataChegada": "2026-07-10",
    "dataPartida": "2026-07-15",
    "descricaoExperiencia": "Uma experiência incrível em Paris."
}
```

### Resposta para dados inválidos

**Status: `400 Bad Request`**

O status `400` é retornado quando os dados enviados não atendem às regras de validação da aplicação.

---

## 4.3 DELETE `/viagens/{id}`

### Descrição

Exclui uma viagem cadastrada utilizando seu identificador.

### Método HTTP

```text
DELETE
```

### URL

```text
http://localhost:8080/viagens/{id}
```

### Parâmetros

| **Parâmetro** | **Tipo** | **Obrigatório** | **Descrição**           |
| ------------- | -------- | --------------- | ----------------------- |
| `id`          | Integer  | **Sim**         | Identificador da viagem |

### Exemplo

```text
DELETE http://localhost:8080/viagens/1
```

### Resposta de sucesso

**Status: `204 No Content`**

A viagem foi excluída com sucesso.

### Resposta quando a viagem não existe

**Status: `404 Not Found`**

Ocorre quando não existe uma viagem com o identificador informado.

---

# 5. Regras de validação

Antes de realizar o cadastro, a API verifica os dados recebidos.

Os seguintes campos são obrigatórios:

* `fotoUrl`
* `nomeLugar`
* `continente`
* `localidade`
* `dataChegada`
* `descricaoExperiencia`

O campo `dataPartida` é **opcional**.

Quando informado, a **data de partida não pode ser anterior à data de chegada**.

Caso alguma regra não seja atendida, o cadastro não é realizado e a API retorna:

```text
400 Bad Request
```

---

# 6. Códigos HTTP

| **Código**        | **Descrição**                  |
| ----------------- | ------------------------------ |
| `200 OK`          | Consulta realizada com sucesso |
| `201 Created`     | Viagem cadastrada com sucesso  |
| `400 Bad Request` | Dados enviados são inválidos   |
| `404 Not Found`   | Viagem não encontrada          |
| `204 No Content`  | Viagem excluída com sucesso    |

---

# 7. CORS

A API permite requisições provenientes do front-end React executado localmente em:

```text
http://localhost:5173
```

Essa configuração permite a comunicação entre o **front-end e o back-end** durante a execução local da aplicação.

---

# 8. Banco de dados

A API utiliza o banco de dados relacional **H2**.

O script responsável pela criação da tabela está localizado em:

```text
API/integrador/src/main/resources/schema.sql
```

A tabela utilizada pela API é:

```text
viagem
```

### Estrutura da tabela

| **Campo**               | **Tipo**      |
| ----------------------- | ------------- |
| `id`                    | INT           |
| `foto_url`              | VARCHAR(500)  |
| `nome_lugar`            | VARCHAR(100)  |
| `continente`            | VARCHAR(50)   |
| `localidade`            | VARCHAR(150)  |
| `data_chegada`          | DATE          |
| `data_partida`          | DATE          |
| `descricao_experiencia` | VARCHAR(1000) |

---

# 9. Integração com o Front-end

O front-end React utiliza o **Axios** para consumir os endpoints disponibilizados pela API.

As principais operações realizadas pelo cliente são:

```text
POST /viagens
    ↓
Cadastro da viagem

GET /viagens
    ↓
Consulta das viagens

DELETE /viagens/{id}
    ↓
Exclusão da viagem
```

O **front-end e a API devem estar em execução simultaneamente** para que a integração funcione corretamente.

```
```
