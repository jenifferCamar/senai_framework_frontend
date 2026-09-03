# Aula 03 — Projetos com frameworks front-end

[← Voltar ao índice](../../README.md) · [Abrir material da aula](material-aula-03.pdf)

## Objetivos da aula

- Diferenciar framework de biblioteca.
- Comparar React, Angular, Vue e Next.js.
- Entender componentes, estado, reatividade, rotas e ferramentas de build.
- Reconhecer a estrutura gerada por cada tecnologia.
- Criar, versionar e comparar projetos equivalentes.

## Resumo

Frameworks front-end oferecem ferramentas, convenções e uma estrutura para desenvolver interfaces web. Eles reduzem repetição, estimulam componentização e simplificam tarefas como atualização da interface, roteamento, integração com APIs, build e testes.

A escolha da tecnologia deve considerar o tamanho e a complexidade do projeto, os conhecimentos da equipe, a curva de aprendizado, o ecossistema, a manutenção e os requisitos de renderização.

## Framework × biblioteca

| Framework | Biblioteca |
| --- | --- |
| Define a estrutura e conduz o fluxo da aplicação | É chamada pelo código quando necessário |
| Adota convenções mais abrangentes | Resolve um conjunto mais específico de problemas |
| Oferece uma arquitetura mais completa | Dá mais liberdade para combinar ferramentas |
| Exemplo: Angular | Exemplo: React |

Essa diferença é frequentemente explicada pela **inversão de controle**: com uma biblioteca, a aplicação chama a ferramenta; com um framework, a estrutura do framework chama partes da aplicação nos momentos previstos.

## Por que utilizar frameworks?

- Aumentam a produtividade com soluções prontas para roteamento, estado e renderização.
- Incentivam padrões e boas práticas de organização.
- Facilitam a manutenção com mecanismos como Virtual DOM e Change Detection.
- Oferecem documentação, plugins, comunidade e ferramentas de teste.

## Características comuns

- **Componentização:** divide a interface em unidades independentes e reutilizáveis.
- **Reatividade:** atualiza a interface quando o estado muda.
- **Build e bundling:** transforma, combina e otimiza os arquivos para execução.
- **Roteamento:** associa URLs a telas sem recarregar toda a aplicação.
- **Integração com APIs:** conecta a interface a dados e serviços.
- **Testabilidade:** permite validar componentes e fluxos.
- **Comunidade:** disponibiliza documentação, plugins, exemplos e suporte.
- **Boas práticas:** estimula organização, acessibilidade e padrões de projeto.

## Comparação das tecnologias

| Tecnologia | Classificação | Destaques | Conhecimentos úteis |
| --- | --- | --- | --- |
| **React** | biblioteca de interfaces | JSX, componentes, hooks, Virtual DOM e ecossistema flexível | HTML e JavaScript |
| **Angular** | framework completo | TypeScript, CLI, roteamento, HTTP client, serviços e injeção de dependência | TypeScript e orientação a objetos |
| **Vue** | framework progressivo | reatividade, Single-File Components e adoção gradual | JavaScript ou TypeScript |
| **Next.js** | framework baseado em React | rotas por arquivos, renderização no servidor, Server Components, otimizações e recursos full-stack | React |

Não existe uma escolha universalmente melhor. A decisão depende do problema, da equipe e das restrições do projeto.

## React

React organiza interfaces em componentes reutilizáveis.

- **JSX:** combina marcação e expressões JavaScript; usa `className`, expressões entre chaves e tags fechadas.
- **Virtual DOM:** representação usada para calcular e aplicar somente as mudanças necessárias ao DOM real.
- **useState:** mantém estado local em componentes funcionais.
- **useEffect:** executa efeitos colaterais, como chamadas de API.
- **Context API:** compartilha estados menos complexos.
- **Redux:** alternativa para estados globais mais complexos.

Estrutura básica vista na aula anterior: `src/index.js` inicia a aplicação e `src/App.js` representa o componente raiz.

## Angular

Angular fornece uma solução integrada e usa TypeScript como linguagem principal.

### Criação e execução

~~~sh
npm install -g @angular/cli
ng new meu-app-angular
cd meu-app-angular
code .
ng serve
~~~

### Elementos centrais

- **Componentes:** unem classe TypeScript, template e estilos.
- **Serviços:** encapsulam lógica reutilizável.
- **Injeção de dependência:** fornece serviços aos consumidores.
- **Data binding:** sincroniza dados e interface.
- **Roteamento:** organiza a navegação entre telas.
- **Angular CLI:** cria, executa, testa e compila o projeto.

Arquivos como `angular.json` configuram o workspace; `tsconfig*.json` configuram TypeScript; `src/app/` reúne os componentes e serviços; e `main.ts` inicializa a aplicação.

## Vue

Vue pode ser adotado de forma progressiva e usa um sistema de reatividade automático.

### Criação e execução

~~~sh
npm create vue@latest
cd meu-projeto-vue
npm install
code .
npm run dev
~~~

### Estrutura

- `src/components/`: componentes reutilizáveis;
- `src/assets/`: imagens, fontes e estilos processados pelo build;
- `App.vue`: componente raiz;
- `main.js`: cria e monta a aplicação;
- `index.html`: contém o ponto onde a SPA é montada;
- `vite.config.js`: configura o Vite e seus plugins.

Os arquivos `.vue` são **Single-File Components** e podem agrupar template, lógica e estilos de um componente.

## Next.js

Next.js amplia React com recursos de framework, incluindo roteamento, renderização no servidor, componentes de servidor, otimização de imagens e fontes, layouts, APIs e recursos de back-end.

### Criação e execução

~~~sh
npx create-next-app@latest meu-projeto
cd meu-projeto
code .
npm run dev
~~~

Com o App Router, a pasta `app/` concentra páginas e layouts. Um arquivo `page.js` ou `page.tsx` define uma página, enquanto a organização das pastas determina as rotas.

## Estruturas compartilhadas

Apesar das diferenças, os projetos normalmente contêm:

| Item | Responsabilidade |
| --- | --- |
| `src/` ou `app/` | código-fonte principal |
| `public/` | arquivos servidos publicamente |
| `node_modules/` | dependências instaladas localmente |
| `package.json` | scripts e dependências |
| arquivo de lock | versões resolvidas das dependências |
| `.gitignore` | conteúdo que não deve ser versionado |
| arquivo de configuração | regras de build e da ferramenta |

## Uso de projetos existentes

Projetos open source e templates podem acelerar o início de um trabalho e revelar boas práticas. A aula cita GitHub, Vercel Templates e CodeSandbox como fontes.

Antes de reutilizar um projeto:

1. verifique a licença;
2. leia a documentação;
3. identifique framework e versão;
4. instale as dependências;
5. execute e compreenda o código;
6. adapte o projeto e registre a origem.

Para obter um repositório Git:

~~~sh
git clone URL_DO_REPOSITORIO
~~~

## Atividade

Em grupo, desenvolver páginas funcionais, responsivas e organizadas sobre o mesmo tema usando:

1. React;
2. Vue;
3. Angular;
4. Next.js;
5. uma cópia adaptada de um projeto encontrado em outro repositório.

Cada projeto deve usar componentes, ser versionado com Git e ter seu próprio repositório no GitHub. O histórico de commits deve demonstrar a evolução do trabalho. Ao final, produzir uma comparação entre as quatro tecnologias.

### Critérios para a comparação

- processo de criação;
- organização das pastas;
- sintaxe dos componentes;
- gerenciamento de estado;
- roteamento;
- experiência de desenvolvimento;
- curva de aprendizado;
- build e execução;
- vantagens e dificuldades encontradas.

## Checklist de revisão

- [ ] Consigo diferenciar framework de biblioteca.
- [ ] Entendo componentes, estado, reatividade e rotas.
- [ ] Sei criar e executar projetos Angular, Vue e Next.js.
- [ ] Reconheço os arquivos principais de cada estrutura.
- [ ] Consigo justificar a escolha de uma tecnologia para um projeto.
- [ ] Os cinco projetos e a comparação final estão organizados.

## Perguntas para estudar

1. Como a inversão de controle diferencia frameworks e bibliotecas?
2. Por que componentes facilitam manutenção e reutilização?
3. Quais necessidades favorecem Angular, Vue ou Next.js?
4. Qual é a relação entre estado e atualização da interface?
5. O que deve ser verificado antes de adaptar um projeto open source?
