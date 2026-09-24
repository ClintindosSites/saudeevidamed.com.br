# Saúde e Vida — Next.js

Versão estática em **Next.js + TypeScript**, sem banco de dados, tRPC, autenticação ou backend. A landing page e as páginas de serviço são geradas estaticamente pelo App Router.

## Rodar no VS Code

```bash
cd saude-vida-next
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

Se a porta 3000 estiver ocupada:

```bash
pnpm dev -- -p 3001
```

## Build de produção

```bash
NODE_ENV=production pnpm build
pnpm start
```

Caso o terminal tenha uma variável herdada, você também pode limpar antes do build:

```bash
unset NODE_ENV
pnpm build
```

## O que está incluído

- Landing page responsiva com menu desktop e mobile.
- CTAs de conversão direcionando ao WhatsApp.
- Seis páginas individuais de serviço.
- Imagem do hero em `public/hero.jpg`.
- Rotas estáticas para SEO e compartilhamento.
- Nenhum banco de dados, login ou servidor externo necessário.

## File Storage

Esta versão não inclui upload de arquivos, pois o File Storage exige uma camada de servidor. Para manter o projeto simples e totalmente local, novas imagens podem ser colocadas em `public/` e referenciadas diretamente no código, como `/hero.jpg`.
