# Gratia Plena Sistemas

Site institucional da Gratia Plena Sistemas, empresa de desenvolvimento de software sob demanda.

## Stack

- React 18
- TypeScript
- Vite
- Lucide React
- Deploy estático no Render

## Rodando localmente

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

## Build

```bash
npm run build
```

O build de produção fica em `build/`.

## Deploy no Render

Este repositório já inclui `render.yaml` com um serviço estático:

- Build command: `npm ci && npm run build`
- Publish path: `./build`
- SPA rewrite para `index.html`

Depois de subir o código para GitHub, GitLab ou Bitbucket, crie um Blueprint no Render apontando para este repositório.

## Ajustes rápidos

- E-mail de contato: procure por `contato@gratiaplenasistemas.com.br` em `src/App.tsx`.
- Imagem principal: substitua `public/assets/software-system-map.png`.
- Identidade visual: consulte `BRAND.md`.
