Projeto React convertido a partir do site estático original.

Instruções rápidas:

1. Executar `npm install` na pasta `duarteReact`.
2. Executar `npm start` para rodar em modo de desenvolvimento.

Observações:
- O CSS foi copiado para `src/App.css`.
- A lógica de tema foi convertida para um hook `src/useTheme.js`.
- Imagens locais foram referenciadas em `/Assents/...` (copie a pasta `Assents` para `duarteReact/public/Assents` se quiser servi-las localmente).

Script de cópia de assets:

 - Rode `./copy-assets.ps1` no PowerShell para copiar a pasta `Assents` do site original para `duarteReact/public/Assents`.

Como rodar:

```powershell
cd duarteReact
npm install
npm start
```

Segurança e headers recomendados:

- Recomenda-se configurar os headers do servidor para proteção adicional (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Content-Security-Policy). Um exemplo para Netlify já foi adicionado em `public/_headers`.
- Não confie em entradas do usuário; sanitize qualquer conteúdo dinâmico e evite `dangerouslySetInnerHTML`.
- Sirva o site via HTTPS e mantenha dependências atualizadas (`npm audit` regularmente).
- Quando usar CDNs, habilite Subresource Integrity (SRI) ao publicar para produção.

Exemplo rápido (nginx) para adicionar headers no servidor:

```nginx
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer" always;
add_header Content-Security-Policy "default-src 'self' https://images.unsplash.com; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' https://cdn.jsdelivr.net 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com; connect-src 'self';";
```

Se quiser, eu posso testar o layout responsivo localmente ou ajustar pontos específicos (menu, grid, imagens). 

Proteção de CSS/JS e DevTools
 - Não é possível impedir que o navegador e o DevTools (`F12`) acessem os arquivos estáticos (CSS/JS). Tudo enviado ao cliente pode ser visto pelo usuário.
 - Boas práticas para minimizar exposição e evitar vazamento de informações sensíveis:
	 - Nunca colocar segredos (API keys, senhas, tokens) no frontend; mova-os para o servidor.
	 - Desabilite source maps em produção para evitar ver o código-fonte original: criei `.env.production` com `GENERATE_SOURCEMAP=false`.
	 - Remova comentários e confie no minificador (o build do Create React App já minifica CSS/JS).
	 - Não publique a pasta de origem; publique apenas o `build/` gerado pelo `npm run build`.
	 - Evite `dangerouslySetInnerHTML` e sanitize toda entrada do usuário.
	 - Configure headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options) no servidor — exemplo em `public/_headers`.
	 - Não sirva arquivos `.map` em produção. Se necessário, remova-os após o `build`.

Comandos úteis:

```powershell
# Criar build sem source maps (o arquivo .env.production já faz isso automaticamente)
cd duarteReact
npm run build

# Se quiser garantir remoção de *.map após build:
Remove-Item -Path .\build\**\*.map -Force -Recurse
```

Se quiser, eu executo o `npm run build` aqui e removo quaisquer `.map` gerados para você verificar o resultado.
# duarteArq2
