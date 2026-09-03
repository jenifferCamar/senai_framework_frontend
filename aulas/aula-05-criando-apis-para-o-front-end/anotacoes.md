# Aula 05 — Criando APIs para o front-end

[← Voltar ao índice](../../README.md)

> Material de apoio: criação, publicação e consumo de APIs REST no front-end.
>
> [Abrir material da aula](material-aula-05.pdf)

## Objetivos

- Entender a função de uma API na comunicação entre sistemas.
- Diferenciar API, protocolo HTTP, endpoint e web service.
- Criar uma API REST simples com Node.js e Express.
- Configurar CORS e receber requisições do navegador.
- Publicar a API no Render e consumi-la em uma aplicação front-end.

## API e web service

Uma **API** (Application Programming Interface) define regras, rotinas e formatos para que diferentes componentes de software se comuniquem. Ela separa a interface visual da lógica que processa e fornece os dados.

Um **web service** é um serviço acessível pela web, normalmente por HTTP ou HTTPS, que permite a comunicação padronizada entre sistemas desenvolvidos com tecnologias diferentes.

## REST e HTTP

REST (Representational State Transfer) é um estilo arquitetural usado em sistemas distribuídos. Seus princípios principais são:

- separação entre cliente e servidor;
- comunicação sem estado entre requisições;
- recursos identificados por URIs;
- uso dos métodos HTTP;
- troca de representações, como JSON.

### Métodos HTTP

| Método | Finalidade |
| --- | --- |
| `GET` | Consultar informações. |
| `POST` | Criar um novo recurso. |
| `PUT` | Substituir completamente um recurso. |
| `PATCH` | Atualizar parte de um recurso. |
| `DELETE` | Remover um recurso. |

Uma requisição combina método, URL, cabeçalhos e, quando necessário, um corpo com dados. O servidor devolve uma resposta com status, cabeçalhos e conteúdo.

## Endpoint e JSON

Um **endpoint** é uma URL específica que oferece acesso a um recurso ou funcionalidade da API. Exemplos:

```text
GET /usuarios
POST /usuarios
GET /usuarios/42
DELETE /usuarios/42
```

**JSON** (JavaScript Object Notation) é um formato leve para troca de dados. Ele representa objetos com pares nome/valor e listas com arrays:

```json
{
  "nome": "Ana",
  "ativo": true,
  "interesses": ["web", "javascript"]
}
```

## Fluxo de uma requisição

1. A pessoa interage com a interface.
2. O front-end envia uma requisição HTTP.
3. O servidor identifica a rota e o método.
4. A aplicação executa a regra de negócio e acessa dados ou serviços.
5. O servidor retorna uma resposta, normalmente em JSON.
6. O front-end trata o resultado e atualiza a tela.

```text
Pessoa → Front-end → HTTP → API → dados
Pessoa ← interface atualizada ← JSON ← resposta
```

## Express e CORS

**Express** é um framework minimalista para Node.js que facilita a criação de servidores, rotas e middlewares. Ele reduz o código necessário em comparação com o módulo `http` nativo do Node.js.

**CORS** (Cross-Origin Resource Sharing) é um mecanismo de segurança do navegador que controla chamadas entre origens diferentes. Ele precisa ser configurado quando o front-end e a API estão em domínios ou portas distintos.

### Preparação do projeto

```bash
mkdir minha-api
cd minha-api
npm init -y
npm install express cors
```

### API de data e hora

Crie o arquivo `api.js`:

```js
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
```

Execute localmente:

```bash
node api.js
```

Teste o endpoint em `http://localhost:3000/data-hora`.

## Consumo no front-end

O front-end pode usar `fetch` para consultar a API:

```js
async function carregarDataHora() {
  const resposta = await fetch("URL_DA_API/data-hora");

  if (!resposta.ok) {
    throw new Error("Não foi possível consultar a API");
  }

  const dados = await resposta.json();
  document.querySelector("#data-hora").textContent = dados.dataHora;
}

carregarDataHora();
```

A interface deve prever os estados de carregamento, sucesso e erro. Também é importante substituir a URL local pela URL pública da API quando o projeto for publicado.

## Publicação no Render

Fluxo básico:

1. Enviar a API para um repositório no GitHub.
2. Criar um **Web Service** no Render.
3. Conectar o repositório do GitHub.
4. Configurar a instalação das dependências.
5. Usar `node api.js` como comando de início.
6. Fazer o deploy e testar a URL `onrender.com`.
7. Configurar a URL pública no front-end.

O Render oferece integração com Git, deploy automático, SSL e recursos adequados para APIs e microsserviços pequenos.

## Atividades

### Atividade 01 — Pesquisa de APIs

Pesquisar dez projetos no GitHub que consumam APIs. Clonar e analisar cada projeto, identificando o framework, a API utilizada e a finalidade da integração. Registrar os resultados em uma tabela Markdown.

| Projeto | Repositório | Framework | API consumida | Finalidade |
| --- | --- | --- | --- | --- |
| Exemplo | URL | React | Nome da API | Dados exibidos |

### Atividade 02 — API de data e hora

1. Criar uma API Express com uma rota de data e hora.
2. Publicar a API no Render.
3. Criar um front-end consumidor.
4. Publicar o front-end.
5. Manter API e front-end em repositórios separados.
6. Entregar prints do código, da aplicação e dos painéis de deploy, além dos links dos projetos.

## Checklist

- [ ] Sei explicar o que é uma API e um endpoint.
- [ ] Consigo associar métodos HTTP às operações básicas.
- [ ] Entendo a estrutura de objetos e arrays JSON.
- [ ] Consigo criar uma rota Express.
- [ ] Sei por que CORS é necessário no navegador.
- [ ] O front-end trata carregamento, sucesso e erro.
- [ ] A API e o front-end têm repositórios e deploys documentados.

## Perguntas para estudar

1. Qual é a responsabilidade da API no fluxo entre front-end e servidor?
2. Qual é a diferença entre `PUT` e `PATCH`?
3. Por que uma chamada entre portas diferentes pode ser bloqueada pelo navegador?
4. Como o Render participa da publicação de uma API?
5. Por que é recomendável separar o repositório do front-end do repositório da API?
