GAEX SITE REDESIGN — PACOTE DO SITE

ESTRUTURA
- index.html: página inicial da GAEX.
- zumbeefps/index.html: página individual do ZumbeeFPS, com ficha técnica e dados Schema.org/VideoGame.
- assets/site.css: identidade visual e estilos responsivos.
- assets/site.js: menu móvel e janela do GAEX ID.
- robots.txt: permite rastreamento público e aponta para o sitemap.
- sitemap.xml: URLs públicas incluídas no pacote.
- site.webmanifest: nome e cores do site para navegadores compatíveis.
- zumbeefps-igdb-presskit.json: ficha de referência editorial para o jogo.

ARQUIVOS DE IMAGEM
O pacote espera que os arquivos de imagem atuais da GAEX continuem na raiz do repositório:
- gaexgames.png
- zumbeefps.png
Não os apague. Eles são usados no cabeçalho, ícone, compartilhamento social e imagens do jogo.

PUBLICAÇÃO NO GITHUB PAGES
1. Faça backup do site atual.
2. Extraia o ZIP. Os arquivos já aparecem diretamente na raiz do pacote (index.html, assets/, zumbeefps/ etc.).
3. Copie TODO o conteúdo extraído para a raiz do repositório gaexgames.github.io — não publique uma pasta extra chamada "gaex-site-redesign".
4. Preserve gaexgames.png, zumbeefps.png e suas páginas legais existentes.
5. Publique as alterações pelo GitHub Pages.
6. Teste / e /zumbeefps/. O CSS e o JavaScript usam caminhos relativos, então também funcionam em pré-visualização local.

SEO / GOOGLE
- O pacote inclui canonical, títulos e descrições específicos, Open Graph, Twitter Cards, JSON-LD, robots.txt e sitemap.xml.
- Depois da publicação, adicione/valide a propriedade https://gaexgames.github.io/ no Google Search Console, envie /sitemap.xml e use a Inspeção de URL para solicitar rastreamento.
- Nenhum HTML garante indexação ou posição específica no Google. A indexação e a classificação dependem do rastreamento, qualidade, utilidade, concorrência e outros sinais.

IGDB
- Os dados JSON-LD Schema.org ajudam mecanismos de busca e sistemas que leem metadados estruturados.
- O arquivo zumbeefps-igdb-presskit.json é uma ficha humana de referência. Ele NÃO publica nem atualiza automaticamente o registro na IGDB. A contribuição precisa ser feita no próprio serviço da IGDB e seguir os campos/regras atuais de lá.
- Confirme disponibilidade por plataforma e datas regionais antes de cadastrar datas específicas.

IMPORTANTE
O botão da Google Play está deliberadamente inativo como “Em breve”, porque nenhum URL público de pré-registro foi fornecido. Assim que o endereço oficial existir, o botão poderá virar um link ativo.
