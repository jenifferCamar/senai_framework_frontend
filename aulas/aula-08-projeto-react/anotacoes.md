# Aula 08 — Projeto React

[← Voltar ao índice](../../README.md) · [Abrir material da aula](material-aula-08.pdf)

> Material de apoio: revisão de JavaScript e introdução ao React, com foco em JSX, componentes, props, Virtual DOM, listas, keys e renderização condicional.
>
> - Conceitos: https://github.com/deivisontakatu/aula-react
> - Exemplo base: https://github.com/deivisontakatu/projeto-react
> - Aplicação de exemplo: https://projeto-react-five-swart.vercel.app/

## Objetivos

- Revisar os fundamentos de JavaScript usados no dia a dia do front-end.
- Entender o papel do DOM e do Virtual DOM.
- Criar componentes React reutilizáveis.
- Passar dados entre componentes com props.
- Renderizar listas com `map` e utilizar `key`.
- Controlar a exibição da interface com renderização condicional.
- Produzir um projeto React público no GitHub com README documentado.

## Resumo

A aula começa com uma revisão de JavaScript: inserção via tag `<script>` ou arquivos externos (recomendado em projetos maiores), variáveis (`var` com escopo de função, `let`/`const` com escopo de bloco), tipos primitivos (`String`, `Number`, `Boolean`, `Undefined`, `Null`, `Object`, `Array`, `Symbol`, `BigInt`), operadores (aritméticos, de comparação, lógicos e de atribuição), estruturas condicionais (`if`/`else if`/`else`, ternário), estruturas de repetição (`for`, `while`, `do...while`, `break`, `continue`) e funções (declaração e arrow functions). Também são abordados arrays e métodos como `forEach` e `filter`, além de objetos e a palavra-chave `this`.

Em seguida, o conteúdo avança para o DOM e para o **React**, um framework JavaScript para interfaces. O DOM (Document Object Model) é a representação em árvore da página que permite ao JavaScript consultar e modificar elementos. O Virtual DOM é uma cópia em memória usada pelo React: ao mudar, o React re-renderiza, compara (reconciliação) e aplica apenas as diferenças no DOM real, deixando a atualização mais rápida e previsível.

## JavaScript essencial

### Inserção e escopo

- `<script>` embutido no HTML funciona, mas arquivos externos são mais organizados.
- `var` tem escopo de função; `let` e `const` têm escopo de bloco.
- Nomes de variáveis são *case sensitive*: `nome`, `Nome` e `NOME` são distintos.

### Tipos de dados

| Tipo | Exemplo |
| --- | --- |
| `String` | `"Olá"` |
| `Number` | `10`, `3.14` |
| `Boolean` | `true`, `false` |
| `Undefined` | variável sem valor |
| `Null` | ausência intencional de valor |
| `Object` | `{ nome: "Ana", idade: 20 }` |
| `Array` | `[10, 20, 30]` |
| `Symbol` | identificador único |
| `BigInt` | números inteiros grandes |
| `typeof` | verifica o tipo de um valor |

### Operadores

- Aritméticos: `+`, `-`, `*`, `/`, `%`, `**` (exponenciação), `++`, `--`.
- Comparação: `==` (converte tipo), `===` (valor e tipo), `!=`, `!==`, `>`, `<`, `>=`, `<=`.
- Lógicos: `&&` (E), `||` (OU), `!` (NÃO).
- Atribuição: `=`, `+=`, `-=`, `*=`, `/=`, `%=`.

### Condicionais e repetição

- `if`/`else if`/`else` e o operador ternário `condição ? verdadeiro : falso`.
- `for` (controle de repetições), `while` (enquanto a condição for verdadeira), `do...while` (executa antes de testar).
- `break` interrompe o laço; `continue` pula a iteração atual.

### Arrays e funções

- Arrays armazenam sequências e são percorridos com `forEach`; `filter` seleciona itens por condição.
- Funções organizam código e evitam repetição; podem ser declaradas (`function soma() {}`) ou arrow functions (`const soma = () => {}`).

### DOM

- `getElementById`, `querySelector` (primeiro), `querySelectorAll` (todos).
- Modificação: `textContent`, `value`, `classList`, `createElement`, `appendChild` e eventos com `addEventListener`.

## React

### JSX

- Extensão de sintaxe que permite escrever estruturas parecidas com HTML dentro de JavaScript.
- Expressões JavaScript entram entre chaves `{ }`.
- Convenções em relação ao HTML: usa `className` (não `class`), `htmlFor` (não `for`) e tags sem conteúdo fechadas (`<img />`).
- Um componente deve retornar um elemento raiz ou utilizar `Fragment`.

```jsx
const titulo = <h1>Olá, React!</h1>;
const nome = "João";
const saudacao = <h1>Olá, {nome}!</h1>;
```

### Componentes

- São unidades independentes e reutilizáveis da interface.
- Em React, são normalmente funções que retornam elementos (geralmente escritos com JSX).
- Nomes de componentes começam com letra maiúscula e são usados como `<NomeDoComponente />`.

```jsx
function Cabecalho() {
  return (
    <header>
      <h1>React Lab</h1>
    </header>
  );
}

function App() {
  return (
    <main>
      <Cabecalho />
      <p>Explore os principais conceitos.</p>
    </main>
  );
}
```

#### Árvore de componentes

```text
App
├── Cabecalho
├── BarraDePesquisa
├── ListaDeConceitos
│   ├── CardConceito
│   └── CardConceito
└── Rodape
```

### Props

- Abreviação de *properties*: dados recebidos por um componente.
- Permitem o fluxo explícito de dados do componente pai para o filho.
- Tipos comuns: strings, números, booleanos, arrays, objetos, funções e elementos React.

```jsx
function CardConceito({ titulo, descricao }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </article>
  );
}

<CardConceito titulo="JSX" descricao="Sintaxe para descrever interfaces." />
```

### Virtual DOM

- Representação da interface em memória.
- O React descreve o resultado esperado; o desenvolvedor não manipula o DOM manualmente.
- Fluxo de atualização: **mudança → renderização → reconciliação → atualização**.
- Chaves (`key`) ajudam o React a identificar itens entre renderizações.

```js
document.querySelector("h1").textContent = "Olá!";
```

### Listas e keys

- Coleções (alunos, produtos, tarefas) ficam em arrays e são renderizas com `map`.
- `key` identifica cada item na lista, facilitando a reconciliação.
- Em listas com estado, prefira criar novos arrays (imutabilidade) em vez de mutar o array existente.

```jsx
const alunos = [
  { id: 101, nome: "Ana" },
  { id: 102, nome: "Bruno" },
  { id: 103, nome: "Caio" },
];

{alunos.map((aluno) => (
  <li key={aluno.id}>{aluno.nome}</li>
))}
```

### Renderização condicional

- Mostra, oculta ou altera partes da interface conforme uma condição.
- Pode depender de props, estado ou dados recebidos.
- `if` + `return` para interfaces substancialmente diferentes; operador ternário para alternâncias simples (ex.: carregamento vs. resultado).

```jsx
function MensagemAcesso({ autenticado }) {
  if (autenticado) {
    return <p>Bem-vindo de volta!</p>;
  }
  return <p>Entre para continuar.</p>;
}

function ResultadoBusca({ carregando }) {
  return (
    <div>
      {carregando ? <p>Buscando...</p> : <p>Busca finalizada.</p>}
    </div>
  );
}
```

## Atividade de Revisão

- Link de exercício: https://wayground.com/
- Material de apoio: https://github.com/deivisontakatu/aula-javascript

## Atividade

Desenvolver uma aplicação React que utilise todos os conceitos estudados nesta aula: JSX, componentes, props, Virtual DOM, listas e renderização condicional.

### Entregáveis

- [ ] Aplicação React pública com os conceitos da aula.
- [ ] Repositório público no GitHub.
- [ ] README com descrição do projeto, funcionalidades e conceitos utilizados.
- [ ] Deploy publicamente acessível (ex.: Vercel).
- [ ] Código organizado em componentes reutilizáveis.

## Pontos de atenção

- Não mutar arrays diretamente; produzir novos arrays para atualizações de lista.
- Utilizar `key` estável em listas renderizadas pelo `map`.
- Manter o fluxo de dados top-down (pai → filho) por meio de props.
- Separar responsabilidades: componentes de layout, apresentação e dados.
- Registrar a origem de projetos ou templates reutilizados.

## Checklist de revisão

- [ ] Consigo diferenciar `var`, `let` e `const` e seus escopos.
- [ ] Entendo a diferença entre DOM e Virtual DOM.
- [ ] Crio componentes React reutilizáveis com JSX.
- [ ] Passo dados entre componentes usando props.
- [ ] Renderizo listas com `map` e utilizo `key` corretamente.
- [ ] Aplico renderização condicional com `if`/ternário.
- [ ] O projeto está em repositório público no GitHub com README e deploy.

## Perguntas para estudar

1. Como o Virtual DOM reduz o custo de atualização da interface real?
2. Qual a diferença entre `var`, `let` e `const`, e quando usar cada uma?
3. Por que é importante passar a `key` ao renderizar listas no React?
4. Como o fluxo de dados top-down se dá entre componentes por meio de props?
5. Quando é mais indicado usar `if`/`return` versus o operador ternário na renderização?

## Referências

- Material apresentado em aula.
- https://github.com/deivisontakatu/aula-react
- https://github.com/deivisontakatu/projeto-react
- https://projeto-react-five-swart.vercel.app/
- https://developer.mozilla.org/
- MACHADO, Kheronn Khennedy. *Angular 11 e Firebase: construindo uma aplicação integrada com a plataforma do Google.* São Paulo: Casa do Código, 2021.
- SOUZA, Natan. *Bootstrap 4: conheça a biblioteca front-end mais utilizada no mundo.* São Paulo: Casa do Código, 2018.
