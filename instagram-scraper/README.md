# Instagram Post Text Scraper

Script Python simples para **extrair o texto (legenda) de posts e reels do Instagram**
a partir do link. Você manda o link e ele traz o que está escrito.

Usa a biblioteca open-source [Instaloader](https://instaloader.github.io/).

## Instalação

Requer Python 3.10+.

```bash
cd instagram-scraper
pip install -r requirements.txt
```

## Uso

### Um único post

```bash
python scraper.py https://www.instagram.com/p/Cabc123/
```

### Vários posts de uma vez

```bash
python scraper.py https://www.instagram.com/p/Cabc123/ https://www.instagram.com/reel/Cxyz789/
```

### Links a partir de um arquivo

Crie um arquivo `links.txt` (veja `links.txt.exemplo`) com um link por linha:

```bash
python scraper.py -f links.txt
```

### Salvar o resultado em um arquivo

```bash
python scraper.py -f links.txt -o textos.txt
```

### Posts de contas privadas (precisa logar)

```bash
python scraper.py -u seu_usuario https://www.instagram.com/p/Cabc123/
```

A senha é pedida de forma segura no terminal (não fica salva no histórico).
Depois do primeiro login a sessão é guardada e reaproveitada nas próximas execuções.

## Formatos de link aceitos

- `https://www.instagram.com/p/SHORTCODE/`
- `https://www.instagram.com/reel/SHORTCODE/`
- `https://www.instagram.com/tv/SHORTCODE/`

Parâmetros extras na URL (como `?igsh=...`) são ignorados automaticamente.

## Observações

- Funciona apenas com **posts públicos** sem login; contas privadas exigem `-u`.
- Se você fizer muitas requisições seguidas, o Instagram pode aplicar limites
  temporários (rate limiting). Vá com calma em listas grandes.
- Atenção aos **Termos de Uso do Instagram** e a **direitos autorais**: extrair
  legendas para uso pessoal costuma ser tranquilo, mas republicar conteúdo de
  terceiros é outra história.
