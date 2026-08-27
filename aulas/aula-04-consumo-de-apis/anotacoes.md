# Aula 04 — Consumo de APIs no front-end

[← Voltar ao índice](../../README.md) · [Abrir material da aula](material-aula-04.pdf)

## Objetivos da aula

- Entender APIs, REST, HTTP, endpoints e JSON.
- Acompanhar o ciclo de uma requisição entre front-end e servidor.
- Identificar as responsabilidades de um back-end e de um web service.
- Criar uma API REST simples com Node.js e Express.
- Publicar a API e consumi-la em uma aplicação front-end.

## Resumo

Uma API define como sistemas diferentes se comunicam. Em aplicações web, o front-end envia uma requisição HTTP a um endpoint; o servidor executa a lógica necessária, acessa dados quando preciso e devolve uma resposta, frequentemente em JSON.

A aula percorre esse fluxo e apresenta Express como uma forma simples de criar uma API em Node.js, Render para hospedar o serviço e Vercel para publicar o front-end consumidor.

## Conceitos principais

### API

**API (Application Programming Interface)** é um conjunto de regras, rotinas e contratos que permite a interação entre componentes de software. Ela separa a interface visual da implementação que processa ou fornece os dados.

### REST

REST é um estilo arquitetural usado em sistemas distribuídos. Entre os princípios apresentados estão:

- separação entre cliente e servidor;
- comunicação sem estado entre requisições;
- recursos identificados por URIs;
- uso dos métodos HTTP;
- troca de representações, como JSON.

### HTTP

HTTP define como clientes e servidores trocam mensagens na web. Cada requisição é independente e contém as informações necessárias para ser processada.

| Método | Uso principal | Exemplo |
| --- | --- | --- |
| `GET` | consultar recursos | listar usuários |
| `POST` | criar um recurso | cadastrar usuário |
| `PUT` | substituir um recurso | trocar todos os dados de um usuário |
| `PATCH` | atualizar parte de um recurso | alterar somente o e-mail |
| `DELETE` | remover um recurso | excluir usuário |

`GET` não deve alterar dados. `PUT` e `DELETE` são tratados como idempotentes: repetir a mesma operação deve manter o mesmo efeito final. `POST`, em geral, pode criar novos recursos a cada chamada.

### Endpoint

Um endpoint combina uma URL e uma operação disponibilizada pela API. Por exemplo:

~~~text
GET /usuarios
POST /usuarios
GET /usuarios/42
PATCH /usuarios/42
DELETE /usuarios/42
~~~

O caminho identifica o recurso e o método indica a ação.

### JSON

JSON é um formato textual leve para troca de dados. Ele representa objetos por pares de nome e valor e coleções por arrays.

~~~json
{
  "data": "2026-08-27",
  "hora": "19:30:00"
}
~~~

No JavaScript, uma resposta pode ser convertida com o método `response.json()`.

## Ciclo de uma requisição

1. A pessoa interage com a interface.
2. O front-end envia uma requisição HTTP.
3. O servidor identifica rota e método.
4. A aplicação executa a regra de negócio e acessa dados ou serviços.
5. O servidor devolve uma resposta em JSON.
6. O front-end trata a resposta e atualiza a tela.

~~~text
Pessoa → Front-end → HTTP → API/Express → dados
Pessoa ← interface atualizada ← JSON ← resposta
~~~

## Back-end e web service

- **Servidor back-end:** processa requisições, aplica regras de negócio, gerencia dados e fornece respostas.
- **Web service:** serviço acessível por HTTP/HTTPS que permite comunicação padronizada entre sistemas diferentes.

## API REST com Express

### Preparação

Em uma nova pasta de projeto:

~~~sh
npm init -y
npm install express cors
~~~

- **Express:** simplifica servidor, rotas e middlewares no Node.js.
- **CORS:** controla quais origens podem acessar o serviço pelo navegador.
- **Middleware:** função executada durante o processamento de uma requisição.

### Exemplo mínimo

Um `api.js` para a atividade de data e hora pode seguir esta estrutura:

~~~js
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/data-hora", (request, response) => {
  response.json({
    dataHora: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`API executando na porta ${port}`);
});
~~~

Execute localmente:

~~~sh
node api.js
~~~

Teste no navegador ou em um cliente HTTP usando `http://localhost:3000/data-hora`.

### Consumo no front-end

~~~js
async function carregarDataHora() {
  const response = await fetch("URL_DA_API/data-hora");

  if (!response.ok) {
    throw new Error("Não foi possível consultar a API");
  }

  const data = await response.json();
  document.querySelector("#data-hora").textContent = data.dataHora;
}

carregarDataHora();
~~~

O front-end deve prever pelo menos três estados: carregando, sucesso e erro.

## Publicação

O fluxo apresentado para a API é:

1. enviar o back-end para um repositório no GitHub;
2. criar um Web Service no Render;
3. conectar o repositório;
4. configurar `node api.js` como comando de início;
5. publicar e testar a URL gerada;
6. configurar o front-end com a URL pública;
7. publicar o front-end, por exemplo, na Vercel.

Back-end e front-end devem ficar em repositórios separados, conforme a atividade.

## Atividades

### Atividade 01 — Pesquisa de projetos

Pesquisar dez projetos no GitHub que consumam APIs. Clonar e analisar cada um, identificando o framework e as APIs usadas. Criar um arquivo Markdown com uma tabela detalhada.

Modelo:

| Projeto | Repositório | Framework | API consumida | Finalidade |
| --- | --- | --- | --- | --- |
| Exemplo | URL | React | Nome da API | Dados exibidos |

### Atividade 02 — API de data e hora

1. Criar uma API Express com uma rota que retorne data e hora.
2. Publicar a API no Render.
3. Criar um front-end que consulte a API e exiba o resultado.
4. Publicar o front-end.
5. Separar front-end e API em repositórios diferentes.
6. Produzir um documento com capturas do código, aplicações funcionando, painéis do Render e da Vercel e links dos repositórios.

## Checklist de revisão

- [ ] Sei diferenciar API, endpoint e web service.
- [ ] Consigo associar operações CRUD aos métodos HTTP.
- [ ] Entendo a estrutura de objetos e arrays em JSON.
- [ ] Consigo explicar o ciclo completo de uma requisição.
- [ ] A API Express funciona localmente.
- [ ] O front-end trata carregamento, sucesso e erro.
- [ ] API e front-end estão publicados e documentados em repositórios separados.

## Perguntas para estudar

1. O que significa uma API REST ser stateless?
2. Qual é a diferença entre `PUT` e `PATCH`?
3. Como método e URL formam um endpoint?
4. Por que CORS interfere em chamadas feitas pelo navegador?
5. Que responsabilidades devem permanecer no front-end e no back-end?
