#!/usr/bin/env bash
# Nursing Home study/handout PDF renderer.
# Usage: ./render.sh input.md output.pdf [style.css]
# Requires: pandoc, Chrome at the path below.

set -euo pipefail

IN="${1:?input markdown required}"
OUT="${2:?output pdf path required}"
DIR="$(cd "$(dirname "$0")" && pwd)"
CSS="${3:-$DIR/style.css}"
HTML="$(mktemp --suffix=.html)"
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"

TITLE="$(basename "$IN" .md)"

pandoc "$IN" \
  --standalone \
  --from gfm \
  --to html5 \
  --metadata title="$TITLE" \
  --css "$CSS" \
  --embed-resources \
  --output "$HTML"

OUT_WIN="$(cygpath -w "$OUT")"
HTML_URL="file:///$(cygpath -m "$HTML")"

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT_WIN" \
  --virtual-time-budget=2000 \
  "$HTML_URL"

rm -f "$HTML"
echo "wrote $OUT"
