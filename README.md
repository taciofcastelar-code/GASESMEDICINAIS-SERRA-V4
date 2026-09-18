# Gestão de Gases Medicinais — Serra/ES — V4.0

PWA de uso exclusivo da gestão municipal para acompanhamento de solicitações de oxigênio e ar comprimido, manutenção, chamados à distribuidora, documentos, inventário, indicadores e fiscalização contratual.

## Escopo V4

- Login da gestão validado pelo Google Apps Script.
- Leitura de e-mails a partir de 18/09/2026.
- Classificação: reposição, troca, manutenção, vazamento, pedido de documento, resposta da contratada e revisão.
- Oxigênio e ar comprimido medicinal.
- Extração estruturada de quantidade quando possível.
- Devolução automática de reposição fora do padrão, com instruções, Anexo II, Processo de Trabalho e OBS. de inventário.
- Envio de documentos oficiais quando solicitado.
- Abertura manual de chamados para a distribuidora.
- Indicadores e planilha de indicadores gerada pelo backend.
- Módulo de fiscalização contratual: deveres da contratada x deveres da contratante.
- Contrato nº 053/2021 disponível para consulta.

## Segurança

Este repositório **não contém** APP_KEY, senha de login ou Code.gs. Configure os segredos apenas em **Google Apps Script > Configurações do projeto > Propriedades do script**.

O frontend solicita URL `/exec` e APP_KEY no navegador da gestão. A APP_KEY é salva apenas no `localStorage` daquele navegador. O login gera token temporário de sessão.

## Arquivos privados entregues separadamente

- `Code_V4.gs`
- `CONFIGURACAO_PRIVADA_V4.txt`

Não publique esses arquivos no GitHub.

## Publicação

1. Envie o conteúdo do ZIP para a raiz do repositório `GASESMEDICINAIS-SERRA-V4`.
2. Ative GitHub Pages em `Settings > Pages > Deploy from a branch > main / root`.
3. Crie um **novo projeto** no Google Apps Script e cole `Code_V4.gs`.
4. Configure as Propriedades do Script conforme o arquivo privado.
5. Execute `configurarSistemaV4()` e autorize.
6. Implante como Aplicativo da Web e copie a URL `/exec`.
7. No app, abra `Configurar API` e informe URL `/exec` + APP_KEY.
8. Faça login com o usuário/senha configurados nas Propriedades do Script.
9. Durante testes, mantenha `AUTO_ACTIONS_ENABLED=false` para que a V3 e a V4 não respondam ao mesmo e-mail.

## Observação sobre fiscalização contratual

A V4 localiza temas contratuais e pode gerar base/minuta para revisão, mas não envia automaticamente contrarrespostas contratuais. A gestão deve revisar a aplicabilidade ao lote/equipamento antes do envio.
