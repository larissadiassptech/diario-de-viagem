# Documentação da API — Diário de Viagens

## Informações gerais

**Base URL:** `http://localhost:8080`

A API utiliza o recurso `/viagens` para realizar as operações de cadastro, consulta e exclusão das viagens.

**Front-end:** `http://localhost:5173`

A API possui CORS configurado para permitir a comunicação com o front-end durante a execução local.

---

## GET /viagens

Retorna as viagens cadastradas.

**Parâmetros:** nenhum.

**Resposta de sucesso — 200 OK**

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
````

---

## POST /viagens

Cadastra uma nova viagem.

**Content-Type:** `application/json`

**Exemplo de requisição:**

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

### Campos

| Campo                  | Tipo   | Obrigatório | Observação           |
| ---------------------- | ------ | ----------- | -------------------- |
| `fotoUrl`              | string | Sim         | Não pode estar vazio |
| `nomeLugar`            | string | Sim         | Não pode estar vazio |
| `continente`           | string | Sim         | Não pode estar vazio |
| `localidade`           | string | Sim         | Não pode estar vazio |
| `dataChegada`          | date   | Sim         | Data de chegada      |
| `dataPartida`          | date   | Não         | Data de partida      |
| `descricaoExperiencia` | string | Sim         | Não pode estar vazio |

O campo `id` é gerado automaticamente pela API e não deve ser enviado no cadastro.

A `dataPartida`, quando informada, não pode ser anterior à `dataChegada`.

**Resposta de sucesso — 201 Created**

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

**Resposta de erro — 400 Bad Request**

Retornada quando algum campo obrigatório não é preenchido ou quando a data de partida é anterior à data de chegada.

Exemplo:

```json
{
  "fotoUrl": "",
  "nomeLugar": "Torre Eiffel",
  "continente": "Europa",
  "localidade": "Paris, França",
  "dataChegada": "2026-07-10",
  "dataPartida": "2026-07-15",
  "descricaoExperiencia": "Uma experiência incrível em Paris."
}
```

Resultado: `400 Bad Request`.

A resposta de erro não possui corpo.

---

## DELETE /viagens/{id}

Exclui uma viagem utilizando seu identificador.

**Parâmetro:**

| Parâmetro | Tipo   | Obrigatório | Observação   |
| --------- | ------ | ----------- | ------------ |
| `id`      | number | Sim         | ID da viagem |

**Exemplo:**

```text
DELETE http://localhost:8080/viagens/1
```

**Resposta de sucesso — 204 No Content**

A viagem é excluída e a resposta não possui corpo.

**Resposta de erro — 404 Not Found**

Retornada quando não existe uma viagem com o `id` informado.

---

## Códigos de resposta

| Método | Endpoint        | Sucesso        | Erro            |
| ------ | --------------- | -------------- | --------------- |
| GET    | `/viagens`      | 200 OK         | —               |
| POST   | `/viagens`      | 201 Created    | 400 Bad Request |
| DELETE | `/viagens/{id}` | 204 No Content | 404 Not Found   |

---

## Banco de dados

A API utiliza o **H2 Database**.

O script responsável pela criação da tabela está localizado em:

```text
API/integrador/src/main/resources/schema.sql
```

A tabela utilizada é `viagem`.

A estrutura da tabela é:

| Campo                   | Tipo          |
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

## Integração com o Front-end

O front-end utiliza **Axios** para realizar as requisições para a API.

As operações utilizadas são:

```text
GET /viagens
POST /viagens
DELETE /viagens/{id}
```

Para utilizar a aplicação, é necessário executar os dois projetos:

**API**

```bash
cd API/integrador
mvnw.cmd spring-boot:run
```

**Front-end**

```bash
cd frontend/diario-de-viagens
npm install
npm run dev
```

A API ficará disponível em `http://localhost:8080` e o front-end em `http://localhost:5173`.
