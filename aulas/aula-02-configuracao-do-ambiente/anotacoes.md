# Aula 02 — Configuração do ambiente de desenvolvimento

[← Voltar ao índice](../../README.md) · [Abrir material da aula](material-aula-02.pdf)

## Objetivos da aula

- Entender versionamento e diferenciá-lo de backup.
- Aplicar versionamento semântico.
- Preparar Git, VS Code, Node.js e npm.
- Reconhecer a estrutura inicial de um projeto React.
- Versionar no GitHub e publicar uma aplicação na Vercel.

## Resumo

Um ambiente front-end moderno combina editor de código, controle de versão, runtime JavaScript e gerenciador de pacotes. O Git registra as mudanças localmente; o GitHub compartilha o repositório; Node.js executa JavaScript fora do navegador; e o npm instala e controla as dependências do projeto.

A aula também apresenta o fluxo completo de criação, execução, versionamento e deploy de uma aplicação React.

## Versionamento

Versionar é manter um histórico identificável de cada mudança. Isso permite descobrir quem alterou um arquivo, quando a alteração ocorreu e por que ela foi feita.

| Versionamento | Backup |
| --- | --- |
| Mantém o histórico das alterações | Guarda uma cópia de determinado momento |
| Registra autoria e contexto | Normalmente não explica quem mudou |
| Permite comparação e merge | Costuma restaurar a cópia inteira |
| Favorece trabalho simultâneo | Pode gerar arquivos duplicados |
| Possibilita reversão granular | Oferece restauração pontual |

### Versionamento semântico

O padrão **SemVer** usa `MAJOR.MINOR.PATCH`.

| Parte | Quando alterar | Exemplo |
| --- | --- | --- |
| `MAJOR` | mudança incompatível com a versão anterior | `1.4.2` → `2.0.0` |
| `MINOR` | nova funcionalidade compatível | `1.4.2` → `1.5.0` |
| `PATCH` | correção compatível | `1.4.2` → `1.4.3` |

A versão `1.0.0` costuma indicar a primeira versão pública estável; versões `0.x.x` representam desenvolvimento inicial.

Mudanças comuns incluem correção de bugs, novas funcionalidades, melhorias, refatoração, desempenho, segurança, atualização de dependências e testes.

## Git e GitHub

### Configuração inicial

Após instalar o Git, confirme e configure a identidade:

~~~sh
git --version
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
~~~

### Fluxo básico

~~~sh
git init
git status
git add .
git commit -m "Adiciona estrutura inicial do projeto"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
~~~

### Tags

Tags marcam pontos importantes do histórico, como lançamentos:

~~~sh
git tag
git tag v1.0.0
git push origin v1.0.0
~~~

Uma tag leve identifica um commit. Uma tag anotada também pode guardar autor, data e mensagem.

### Boas práticas

- Faça commits pequenos e frequentes.
- Escreva mensagens que indiquem claramente o que mudou.
- Mantenha a branch principal estável.
- Use branches para desenvolver funcionalidades e correções.
- Teste antes de integrar ou publicar.
- Não envie credenciais, `node_modules/` nem arquivos locais de ambiente.

## Ferramentas do ambiente

### Visual Studio Code

O VS Code é um editor que oferece recursos típicos de uma IDE por meio de extensões e ferramentas integradas, como terminal, depuração e controle de código-fonte.

### Node.js

Node.js é um ambiente de execução JavaScript fora do navegador. Verifique a instalação com:

~~~sh
node --version
~~~

### npm e npx

- **npm:** instala, atualiza e remove pacotes e executa scripts do projeto.
- **npx:** executa um pacote sem exigir uma instalação global prévia.
- **package.json:** descreve o projeto, suas dependências e seus scripts.
- **package-lock.json:** registra versões exatas da árvore de dependências.
- **node_modules/:** armazena os pacotes instalados e não deve ser versionada.

Comandos frequentes:

~~~sh
npm install
npm start
npm run build
~~~

## Projeto React apresentado na aula

O material usa Create React App no fluxo inicial:

~~~sh
npx create-react-app meu-projeto-react
cd meu-projeto-react
code .
npm start
~~~

### Estrutura básica

| Caminho | Função |
| --- | --- |
| `public/` | HTML e arquivos públicos |
| `src/` | código-fonte da aplicação |
| `src/index.js` | ponto de entrada que renderiza a aplicação |
| `src/App.js` | componente raiz |
| `src/App.css` | estilos do componente principal |
| `src/index.css` | estilos globais |
| `.gitignore` | arquivos e pastas que o Git deve ignorar |
| `package.json` | dependências, metadados e scripts |

## Deploy com Vercel

Deploy é o processo de preparar e publicar uma aplicação em um ambiente acessível às pessoas usuárias. O fluxo apresentado é:

1. desenvolver e testar localmente;
2. enviar o projeto para o GitHub;
3. conectar o repositório à Vercel;
4. configurar o build quando necessário;
5. publicar e validar a URL;
6. usar novos pushes para gerar atualizações automáticas.

A Vercel oferece integração com Git, CDN, deploys automáticos e possibilidade de rollback.

## Atividade

Desenvolver uma aplicação React no VS Code, versioná-la com Git, enviá-la ao GitHub e publicá-la na Vercel. A entrega deve disponibilizar o código no repositório e a aplicação em uma URL pública.

Também permanece a produção, em grupo, do relatório técnico sobre um framework front-end, com no mínimo cinco páginas.

## Checklist de revisão

- [ ] Git, Node.js e npm respondem aos comandos de versão.
- [ ] Minha identidade está configurada no Git.
- [ ] Sei explicar `MAJOR.MINOR.PATCH`.
- [ ] Entendo a função de `package.json`, `package-lock.json` e `node_modules/`.
- [ ] Consigo criar, executar e versionar um projeto React.
- [ ] Sei conectar o GitHub à Vercel e validar o deploy.

## Perguntas para estudar

1. Por que um repositório Git não é apenas um backup?
2. Quando uma versão deve passar de `1.5.3` para `2.0.0`?
3. Qual é a diferença entre npm e npx?
4. Por que `node_modules/` não deve ser enviada ao Git?
5. Como um push no GitHub pode atualizar uma aplicação publicada?
