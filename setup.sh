#!/usr/bin/env bash
set -euo pipefail

# Run from the repository root
cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  echo "Error: Node.js 18 or newer is required."
  exit 1
fi

npm install

# Disable Next.js telemetry to avoid prompts
npx next telemetry disable >/dev/null 2>&1 || true

echo "Dependencies installed."
