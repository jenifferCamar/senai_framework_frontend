# Frameworks Front-end

Repositório contínuo de **materiais, resumos e anotações** da disciplina de Frameworks Front-end do SENAI.

Este espaço será atualizado durante o semestre. Cada nova aula terá uma pasta própria com o material apresentado, as anotações produzidas e, quando necessário, referências para atividades e projetos.

> **Status:** em atualização contínua — aulas 01 a 05 registradas até o momento.

## Índice de aulas

| Aula | Tema | Conteúdo principal | Material | Anotações |
| :---: | --- | --- | :---: | :---: |
| 01 | Apresentação e contextualização | Disciplina, front-end, metodologia e avaliação | [PDF](aulas/aula-01-apresentacao-e-contextualizacao/material-aula-01.pdf) | [Ler](aulas/aula-01-apresentacao-e-contextualizacao/anotacoes.md) |
| 02 | Configuração do ambiente | Versionamento, Git, VS Code, Node.js, npm, React e deploy | [PDF](aulas/aula-02-configuracao-do-ambiente/material-aula-02.pdf) | [Ler](aulas/aula-02-configuracao-do-ambiente/anotacoes.md) |
| 03 | Projetos com frameworks | React, Angular, Vue, Next.js, componentes e estrutura de projetos | [PDF](aulas/aula-03-projetos-com-frameworks/material-aula-03.pdf) | [Ler](aulas/aula-03-projetos-com-frameworks/anotacoes.md) |
| 04 | Consumo de APIs | REST, HTTP, JSON, Express, Render e integração front-end/back-end | [PDF](aulas/aula-04-consumo-de-apis/material-aula-04.pdf) | [Ler](aulas/aula-04-consumo-de-apis/anotacoes.md) |
| 05 | Criação de APIs para o front-end | API REST, Express, CORS, JSON, Render e consumo pelo front-end | [PDF](aulas/aula-05-criando-apis-para-o-front-end/material-aula-05.pdf) | [Ler](aulas/aula-05-criando-apis-para-o-front-end/anotacoes.md) |

Novas aulas serão acrescentadas a esta tabela conforme o conteúdo for disponibilizado.

## Projetos da disciplina

| Aula | Projeto | Repositório | Deploy | Tecnologia ou foco |
| :---: | --- | --- | --- | --- |
| 01 | Pong Blocks | [project-vanilla-js](https://github.com/jenifferCamar/project-vanilla-js) | [Abrir aplicação](https://pong-blocks.vercel.app) | HTML, CSS e JavaScript Vanilla |
| 02 | Modo Web | [meu-app-angular](https://github.com/jenifferCamar/meu-app-angular) | **A adicionar** | React, Vite e Vercel |
| 03.1 | Projeto 01 | [Repositório do grupo](https://github.com/pi-1semestre/framework-frontend-colab) | **A adicionar** | React |
| 03.2 | Projeto 02 | [Repositório do grupo](https://github.com/pi-1semestre/framework-frontend-colab) | **A adicionar** | Vue.js |
| 03.3 | Projeto 03 | [Repositório do grupo](https://github.com/pi-1semestre/framework-frontend-colab) | **A adicionar** | Angular |
| 03.4 | Projeto 04 — Steven Universo | [Pasta no repositório do grupo](https://github.com/pi-1semestre/framework-frontend-colab/tree/main/react-landing-page-template-2021) | **A adicionar** | Next.js |
| 03.5 | Projeto 05 — cópia/adaptação | [Repositório do grupo](https://github.com/pi-1semestre/framework-frontend-colab) | **A adicionar** | Projeto baseado em outro repositório |
| 04 | 10 APIs | [10-apis](https://github.com/jenifferCamar/10-apis) | **A adicionar** | Consumo de APIs |

As cinco entregas da Aula 03 estão descritas nos slides. O repositório colaborativo é o endereço geral da atividade; o Projeto 04 corresponde à sua implementação em Next.js sobre Steven Universo. O deploy dos projetos ainda precisa ser adicionado quando houver uma URL pública.

### Campos pendentes dos projetos

- [ ] Adicionar o link individual do Projeto 01 — React.
- [ ] Adicionar o link individual do Projeto 02 — Vue.js.
- [ ] Adicionar o link individual do Projeto 03 — Angular.
- [x] Identificar o Projeto 04 — Next.js sobre Steven Universo.
- [ ] Adicionar o link do Projeto 05 — cópia/adaptação.
- [ ] Registrar o deploy de cada projeto da Aula 03.

## Finalidade do repositório

- Centralizar os materiais fornecidos em aula.
- Registrar os principais conceitos de cada encontro.
- Manter comandos e exemplos fáceis de consultar.
- Acompanhar atividades, entregas e pontos de revisão.
- Construir um histórico de aprendizagem durante a disciplina.
- Servir como referência para avaliações e projetos futuros.

## Como estudar

1. Localize a aula no índice.
2. Consulte o PDF para acompanhar o material original.
3. Leia as anotações para revisar conceitos, exemplos e comandos.
4. Responda às perguntas de estudo e confira o checklist.
5. Desenvolva as atividades em um repositório próprio quando solicitado.
6. Volte às anotações para complementar aprendizados obtidos na prática.

## Organização

~~~text
.
├── README.md
├── modelos/
│   └── anotacoes.md
└── aulas/
    ├── aula-01-tema/
    │   ├── anotacoes.md
    │   └── material-aula-01.pdf
    ├── aula-02-tema/
    │   ├── anotacoes.md
    │   └── material-aula-02.pdf
    ├── aula-05-criando-apis-para-o-front-end/
    │   └── anotacoes.md
    └── aula-XX-tema/
        ├── anotacoes.md
        ├── material-aula-XX.pdf
        └── exemplos/              # quando houver código ou recursos extras
~~~

Os nomes das pastas usam letras minúsculas, números com dois dígitos e palavras separadas por hífen. Isso mantém os caminhos previsíveis e compatíveis com diferentes sistemas.

## Adicionando uma nova aula

1. Copie o [modelo de anotações](modelos/anotacoes.md).
2. Crie a pasta `aulas/aula-XX-tema/`.
3. Renomeie o material para `material-aula-XX.pdf`.
4. Salve a cópia do modelo como `anotacoes.md`.
5. Preencha apenas as seções que forem relevantes para a aula.
6. Adicione exemplos em `exemplos/`, se houver.
7. Inclua a nova aula na tabela deste README.
8. Confira todos os links antes de enviar as alterações.

### Conteúdo esperado nas anotações

Cada arquivo de anotações deve registrar, sempre que aplicável:

- objetivos da aula;
- resumo do conteúdo;
- conceitos e definições;
- comandos ou exemplos;
- estrutura de arquivos estudada;
- atividade e critérios de entrega;
- checklist de revisão;
- perguntas para estudo;
- referências complementares.

## Objetivos da disciplina

- Desenvolver interfaces web modernas e responsivas.
- Construir aplicações com frameworks front-end.
- Organizar o código em componentes reutilizáveis.
- Utilizar Git e GitHub no fluxo de desenvolvimento.
- Integrar aplicações a APIs.
- Publicar e manter aplicações na web.

## Avaliação

| Critério | Peso |
| --- | :---: |
| Avaliação docente | 55% |
| Projeto integrador | 35% |
| Autoavaliação | 10% |

A avaliação docente é composta por desenvolvimento do projeto (20%), apresentação do projeto (20%) e realização das atividades (15%).

## Convenções

- Não alterar o conteúdo original dos materiais fornecidos.
- Escrever anotações com linguagem clara e objetiva.
- Identificar comandos e nomes de arquivos com formatação de código.
- Manter links relativos para que funcionem no GitHub e localmente.
- Não versionar dependências, credenciais ou arquivos temporários.
- Atualizar este README sempre que uma aula for adicionada.

---

Material de apoio acadêmico da disciplina ministrada pelo Prof. Me. Deivison S. Takatu.
