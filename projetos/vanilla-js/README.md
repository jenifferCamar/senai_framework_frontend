# Vanilla JS — Controle por Teclado

Projeto da **Atividade 01** da disciplina Frameworks Front-end (SENAI).

Implementação em HTML, CSS e JavaScript puro (sem frameworks) com:
- Controle de um bloco na tela pelas teclas clássicas do notebook (setas direcionais e WASD)
- Pausa e despausa pressionando a tecla **Espaço**

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla JS, DOM e Canvas API)

## Como executar localmente

Abra o arquivo `index.html` diretamente no navegador ou use um servidor estático:

```bash
# Com Python
python -m http.server 8000

# Com Node.js (npx serve)
npx serve .
```

Depois acesse `http://localhost:8000`.

## Controles

| Tecla | Ação |
|-------|------|
| ⬆ / W | Mover para cima |
| ⬇ / S | Mover para baixo |
| ⬅ / A | Mover para esquerda |
| ➡ / D | Mover para direita |
| Espaço | Pausar / Despausar |

## Estrutura

```
projetos/vanilla-js/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Deploy

Publicado na Vercel: https://pong-blocks.vercel.app/

Repositório: https://github.com/jenifferCamar/project-vanilla-js
