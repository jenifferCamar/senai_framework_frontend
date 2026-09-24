# Aula 07 — Frameworks CSS

[← Voltar ao índice](../../README.md) · [Abrir material da aula](material-aula-07.pdf)

## Objetivos

- Aplicar CSS externo para organizar e reutilizar estilos.
- Compreender propriedades básicas, Box Model e Flexbox.
- Criar layouts responsivos para diferentes tamanhos de tela.
- Entender a proposta de frameworks CSS e da abordagem Utility-First.
- Utilizar classes do Tailwind CSS para construir interfaces.

## CSS e formas de aplicação

CSS controla cores, fontes, margens, alinhamentos, dimensões, bordas e posicionamento. A sintaxe básica segue `seletor { propriedade: valor }`.

Há três formas principais de aplicar CSS:

- **Inline:** usa o atributo `style` no elemento e é indicado apenas para testes ou ajustes pontuais.
- **Interno:** usa uma tag `<style>` no documento e atende casos restritos a uma página.
- **Externo:** mantém as regras em um arquivo `.css` ligado ao HTML por `<link>`. É a forma recomendada para projetos maiores.

## Propriedades fundamentais

As propriedades apresentadas incluem `color`, `background-color`, `font-family`, `font-size`, `margin`, `padding`, `border`, `width`, `height`, `display`, `position`, `top`, `right`, `bottom`, `left` e `text-align`.

Classes podem ser reutilizadas em vários elementos. IDs identificam elementos únicos e também podem ser usados em âncoras e manipulações específicas com JavaScript.

## Box Model

O Box Model descreve cada elemento como uma caixa formada por:

- **Content:** área do texto e das imagens;
- **Padding:** espaço entre o conteúdo e a borda;
- **Border:** linha que envolve o padding e o conteúdo;
- **Margin:** espaço externo entre a caixa e outros elementos.

Compreender essas áreas ajuda a controlar dimensões, espaçamentos, sobreposição e adaptação a diferentes telas.

## Flexbox e responsividade

Flexbox é um modelo unidimensional para organizar itens em linhas ou colunas. Entre suas propriedades estão:

- `flex-direction`;
- `justify-content`;
- `align-items`;
- `flex-wrap`;
- `gap`.

Layouts responsivos adaptam o conteúdo a celulares, tablets e desktops, melhorando a usabilidade sem exigir uma versão separada para cada dispositivo.

## Frameworks CSS e Tailwind

Um framework CSS reúne padrões, classes e componentes para facilitar a criação de interfaces. Ele pode oferecer recursos de layout, grid, Flexbox, responsividade, cores, espaçamentos, tipografia, botões, cards e navegação.

Tailwind CSS utiliza a abordagem **Utility-First**: cada classe representa uma responsabilidade de estilo e várias classes podem ser combinadas diretamente no HTML. Exemplos:

```html
<button class="bg-blue-600 text-white px-6 py-3 rounded-lg">
  Enviar
</button>
```

O Tailwind pode ser testado pelo Play CDN ou instalado com a CLI e integrado a frameworks como Next.js e Angular. A extensão Tailwind IntelliSense oferece autocompletar e informações sobre as classes.

## Atividades

### Atividade 01 — Box Model e Flexbox

1. Criar um projeto com `index.html` e `style.css`.
2. Incluir o CSS externamente usando a tag `<link>`.
3. Adicionar 20 elementos.
4. Atribuir valores às propriedades de `content`, `padding`, `border` e `margin`.
5. Utilizar 20 propriedades ou configurações de Flexbox para organizar os elementos de forma responsiva.

### Atividade 02 — Projeto com Tailwind CSS

1. Criar um projeto usando pelo menos 30 classes diferentes do Tailwind CSS.
2. Utilizar classes para cores, tipografia, espaçamentos, dimensões, bordas, posicionamento, Flexbox, grid e responsividade.
3. Organizar a entrega em um repositório.
4. Documentar em Markdown com prints do código, da aplicação funcionando, a lista das classes usadas e suas respectivas funções.
5. Incluir o link do projeto desenvolvido.

## Checklist

- [ ] O projeto usa um arquivo CSS externo.
- [ ] Os 20 elementos demonstram o Box Model.
- [ ] O layout usa 20 propriedades ou configurações de Flexbox.
- [ ] A interface se adapta a diferentes tamanhos de tela.
- [ ] O projeto Tailwind usa pelo menos 30 classes diferentes.
- [ ] A documentação contém prints, funções das classes e link do projeto.
