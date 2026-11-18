# Aula 09 — Projeto React 02

[← Voltar ao índice](../../README.md) · [Abrir material da aula](material-aula-09.pdf)

> Material de apoio: continuidade do estudo de React com foco em estado, eventos, hooks (`useState` e `useEffect`), formulários/controlados e integração com dados (listas dinâmicas e/ou consumo de API).
>
> - Conceitos: https://github.com/deivisontakatu/aula-react
> - Exemplo base: https://github.com/deivisontakatu/projeto-react
> - Aplicação de exemplo: https://projeto-react-five-swart.vercel.app/

## Objetivos
- Revisar componentes, props e composição de interface.
- Gerenciar estado local com `useState`.
- Tratar eventos do usuário (cliques, inputs, submit).
- Trabalhar com formulários controlados.
- Aplicar efeitos colaterais com `useEffect` (carregamento inicial, sincronização, timers ou requisições).
- Consumir e exibir dados dinâmicos mantendo boas práticas de renderização (listas com `key`, estados de carregamento/erro quando aplicável).

## Conceitos principais

### Estado com `useState`
- Guarda dados que mudam ao longo do tempo e disparam nova renderização.
- Atualizações devem ser feitas pela função `setEstado` (evitar mutação direta).
- Para atualizações baseadas no valor anterior, preferir `setEstado(prev => ...)`.

```jsx
import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);
  return <button onClick={() => setValor((v) => v + 1)}>{valor}</button>;
}
```

### Eventos e formulários controlados
- Handlers como `onClick`, `onChange` e `onSubmit`.
- Inputs controlados: `value` ligado ao estado e `onChange` atualizando o estado.
- `event.preventDefault()` em formulários para evitar recarregamento da página.

```jsx
function FormNome({ onSalvar }) {
  const [nome, setNome] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSalvar(nome);
    setNome("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={nome} onChange={(e) => setNome(e.target.value)} />
      <button type="submit">Salvar</button>
    </form>
  );
}
```

### Efeitos com `useEffect`
- Executa código após a renderização para sincronizar com sistemas externos (API, storage, timers).
- Array de dependências controla quando o efeito roda: `[]` (montagem), `[dep]` (quando `dep` muda), sem array (a cada render — evitar).
- Retornar função de limpeza para cancelar timers/listeners quando necessário.

```jsx
import { useEffect, useState } from "react";

function ListaDados() {
  const [itens, setItens] = useState([]);
  useEffect(() => {
    fetch("/api/itens").then((r) => r.json()).then(setItens);
  }, []);
  return <ul>{itens.map((i) => <li key={i.id}>{i.nome}</li>)}</ul>;
}
```

### Boas práticas
- Manter estado no componente mais adequado e elevar estado quando irmãos precisam compartilhar dados.
- Componentes pequenos e reutilizáveis; props claras.
- Chaves estáveis em listas (`id`).
- Tratar estados de carregamento, vazio e erro na UI quando houver requisições.

## Atividade — Projeto React 02

**Repositório sugerido:** `atividade-projeto-react-02` (público no GitHub)  
**Deploy sugerido:** Vercel

### O que deve ser feito
Desenvolver uma aplicação React que dê continuidade ao Projeto React 01, aplicando os conceitos da Aula 09:

- [ ] Criar/estruturar projeto com Vite + React.
- [ ] Usar componentes funcionais e JSX.
- [ ] Gerenciar dados dinâmicos com `useState`.
- [ ] Implementar interações com eventos (`onClick`, `onChange`, `onSubmit` ou equivalentes).
- [ ] Utilizar `useEffect` para efeito colateral relevante (ex.: carregar dados de API/mock, persistir no `localStorage`, ou sincronização inicial).
- [ ] Renderizar coleções com `map()` e `key` estável.
- [ ] Aplicar renderização condicional (loading/vazio/erro, filtros, estados de UI, etc.).
- [ ] Manter estilização e responsividade básica.
- [ ] README com descrição, funcionalidades, conceitos aplicados, como executar e links (deploy + repositório).

### Sugestões de tema
- Evolução da estante de livros (cadastro/edição com formulário controlado + persistência em `localStorage` via `useEffect`).
- Lista de tarefas com filtros e contador.
- Catálogo consumindo API pública com busca e estados de carregamento/erro.

### Entregáveis
- [ ] Repositório público no GitHub com código versionado.
- [ ] README completo.
- [ ] Deploy publicado (Vercel).
- [ ] Link do repositório e do deploy registrados no README da disciplina.

## Checklist de revisão
- [ ] Estado atualizado corretamente (sem mutação direta).
- [ ] `useEffect` com dependências corretas e sem loops.
- [ ] Formulários controlados funcionando.
- [ ] Listas com `key` única.
- [ ] Interface responde às ações do usuário.

## Referências
- [React — useState](https://react.dev/reference/react/useState)
- [React — useEffect](https://react.dev/reference/react/useEffect)
- [React — Responding to Events](https://react.dev/learn/responding-to-events)
- [Vite](https://vitejs.dev/)
