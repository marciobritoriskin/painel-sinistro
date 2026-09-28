# Painel de Sinistros — Riskin (deploy Vercel)

Espelho estático do painel (`index.html`) para compartilhar um link fora do
claude.ai. É uma **foto do momento do deploy** — não atualiza sozinho.

## Como atualizar

1. Copiar o arquivo mais recente da Área de Trabalho:
   ```
   cp "/c/Users/marci/OneDrive/Desktop/Painel de Sinistros - Riskin.html" index.html
   ```
2. Commitar e enviar:
   ```
   git add index.html
   git commit -m "Atualiza painel"
   git push
   ```
   O Vercel reimplanta sozinho a cada push (integração com o GitHub).

## Senha do link

Protegido por Basic Auth (`middleware.js`), usuário e senha nas variáveis de
ambiente do projeto no Vercel: `PAINEL_USUARIO` e `PAINEL_SENHA`. Sem essas
duas variáveis configuradas, o painel recusa qualquer acesso.

## Repositório

Privado — dados reais de associados e terceiros (nomes, valores, protocolos).
Nunca tornar público.
