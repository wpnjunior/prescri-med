#!/usr/bin/env python3
"""
Extrator de texto (legenda) de posts do Instagram.

Você passa um ou mais links de posts/reels e o script imprime — e opcionalmente
salva — o texto escrito em cada um.

Exemplos de uso:

    # Um único post
    python scraper.py https://www.instagram.com/p/Cabc123/

    # Vários posts de uma vez
    python scraper.py https://www.instagram.com/p/Cabc123/ https://www.instagram.com/reel/Cxyz789/

    # Links a partir de um arquivo (um por linha)
    python scraper.py -f links.txt

    # Salvar o resultado num arquivo
    python scraper.py -f links.txt -o textos.txt

    # Posts de contas privadas exigem login
    python scraper.py -u seu_usuario https://www.instagram.com/p/Cabc123/
"""

import argparse
import getpass
import re
import sys

try:
    import instaloader
except ImportError:
    sys.exit(
        "O pacote 'instaloader' não está instalado.\n"
        "Instale com:  pip install -r requirements.txt   (ou)   pip install instaloader"
    )


# Captura o shortcode de URLs como:
#   https://www.instagram.com/p/SHORTCODE/
#   https://www.instagram.com/reel/SHORTCODE/?igsh=...
#   https://instagram.com/tv/SHORTCODE
SHORTCODE_RE = re.compile(r"instagram\.com/(?:p|reel|reels|tv)/([A-Za-z0-9_-]+)")


def extract_shortcode(url: str) -> str | None:
    """Extrai o shortcode de um link de post; retorna None se não reconhecer."""
    match = SHORTCODE_RE.search(url.strip())
    return match.group(1) if match else None


def read_links_from_file(path: str) -> list[str]:
    """Lê links de um arquivo, um por linha, ignorando vazios e comentários (#)."""
    with open(path, encoding="utf-8") as fh:
        return [
            line.strip()
            for line in fh
            if line.strip() and not line.strip().startswith("#")
        ]


def build_loader(username: str | None) -> "instaloader.Instaloader":
    """Cria o Instaloader, fazendo login se um usuário for informado."""
    loader = instaloader.Instaloader(
        download_pictures=False,
        download_videos=False,
        download_video_thumbnails=False,
        download_geotags=False,
        download_comments=False,
        save_metadata=False,
        compress_json=False,
        quiet=True,
    )

    if username:
        try:
            # Reaproveita uma sessão salva, se existir, para evitar relogar sempre.
            loader.load_session_from_file(username)
            print(f"Sessão reaproveitada para @{username}.", file=sys.stderr)
        except FileNotFoundError:
            password = getpass.getpass(f"Senha do Instagram para @{username}: ")
            loader.login(username, password)
            loader.save_session_to_file()
            print(f"Login efetuado e sessão salva para @{username}.", file=sys.stderr)

    return loader


def fetch_caption(loader: "instaloader.Instaloader", url: str) -> str:
    """Retorna a legenda de um post a partir do link, ou uma mensagem de erro."""
    shortcode = extract_shortcode(url)
    if not shortcode:
        return f"[ERRO] Link não reconhecido como post do Instagram: {url}"

    try:
        post = instaloader.Post.from_shortcode(loader.context, shortcode)
    except Exception as exc:  # rede, post privado, post removido, etc.
        return f"[ERRO] Não foi possível obter o post {shortcode}: {exc}"

    caption = post.caption or "(este post não tem legenda)"
    return caption


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Extrai o texto (legenda) de posts/reels do Instagram a partir do link.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument("urls", nargs="*", help="Um ou mais links de posts do Instagram.")
    parser.add_argument(
        "-f", "--file", help="Arquivo com links (um por linha; linhas com # são ignoradas)."
    )
    parser.add_argument(
        "-o", "--output", help="Arquivo onde salvar os textos extraídos (UTF-8)."
    )
    parser.add_argument(
        "-u",
        "--username",
        help="Usuário do Instagram para login (necessário para contas privadas).",
    )
    args = parser.parse_args()

    links = list(args.urls)
    if args.file:
        links.extend(read_links_from_file(args.file))

    if not links:
        parser.error("Informe ao menos um link, ou use -f para ler de um arquivo.")

    loader = build_loader(args.username)

    saida = []
    for url in links:
        caption = fetch_caption(loader, url)
        bloco = f"{'=' * 70}\n{url}\n{'-' * 70}\n{caption}\n"
        print(bloco)
        saida.append(bloco)

    if args.output:
        with open(args.output, "w", encoding="utf-8") as fh:
            fh.write("\n".join(saida))
        print(f"\nTextos salvos em: {args.output}", file=sys.stderr)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
