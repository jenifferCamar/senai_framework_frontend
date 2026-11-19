# Empilha! (jogo React)

Jogo de habilidade desenvolvido com **React, Vite e CSS**. O objetivo é soltar blocos no momento certo para construir a torre mais alta possível.

## Deploy

Acesse a versão publicada na Vercel:

**[Jogar Empilha!](https://meu-projeto-react-jet.vercel.app/)**

Repositório: [github.com/jenifferCamar/meu-projeto-react](https://github.com/jenifferCamar/meu-projeto-react)

## Requisitos atendidos

- Aplicação desenvolvida em React com componentes reutilizáveis.
- Interface responsiva para computador e celular.
- Projeto versionado com Git e preparado para publicação no GitHub.
- Deploy configurado para a Vercel por meio do arquivo `vercel.json`.
- Jogo executado localmente no navegador, sem IA, backend, API ou banco de dados.

## Funcionalidades

- Bloco que se move automaticamente pela área do jogo.
- Controle pelo botão, clique no tabuleiro, tecla Espaço ou seta para baixo.
- **3 níveis de dificuldade** (Fácil, Médio, Difícil) com velocidade e aceleração diferentes.
- Pontuação, recorde salvo no navegador e níveis com aumento gradual de velocidade.
- **Sistema de combo**: encaixes perfeitos encadeados multiplicam a pontuação.
- Bônus por encaixe preciso e sistema de combo.
- Feedback visual para bons encaixes, encaixes perfeitos e fim de rodada.
- **Efeitos sonoros** via Web Audio API (drop, perfeito, combo, miss, game over).
- **Partículas** animadas em drops perfeitos.
- **Efeito shake** na tela quando erra um encaixe.
- Torre com rolagem vertical automática conforme o jogador sobe.
- Telas de início, pausa (tecla P/Esc) e game over com estatísticas finais.
- Design neon/glassmorphism com cores vibrantes (roxo, rosa, ciano).
- Layout profissional, acessível e adaptado para telas menores.

## Tecnologias

- React 19
- Vite
- JavaScript
- CSS3 (glassmorphism, gradientes, animações)
- Git e GitHub
- Vercel

## Como executar localmente

```bash
cd projetos/empilha-react
npm install
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

Para gerar e testar o build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```text
projetos/empilha-react/
├── index.html
├── vercel.json
├── package.json
├── package-lock.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   ├── components/
│   │   ├── GameBoard.jsx
│   │   ├── GameOverScreen.jsx
│   │   ├── HUD.jsx
│   │   ├── Particle.jsx
│   │   ├── PauseScreen.jsx
│   │   └── StartScreen.jsx
│   ├── hooks/
│   │   └── useGameEngine.js
│   └── utils/
│       ├── audio.js
│       └── constants.js
```

## Versionamento e publicação

Depois de criar um repositório vazio no GitHub, configure o endereço remoto e envie a branch principal:

```bash
git init
git add .
git commit -m "feat: cria jogo de empilhar blocos"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Na Vercel, importe o repositório do GitHub usando estas configurações:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

Após o primeiro deploy, cada novo `git push` na branch `main` poderá gerar uma nova publicação automaticamente.

## Autoria

Jeniffer
