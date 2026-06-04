#!/bin/bash
# Obtain or renew Let's Encrypt certificates for Docker Compose deployment.
# Usage: ./scripts/init-letsencrypt.sh your-domain.com admin@your-domain.com
set -eu

if [ $# -lt 2 ]; then
  echo "Usage: $0 <domain> <email> [staging]"
  echo "  staging — use Let's Encrypt staging (for testing, optional third argument)"
  exit 1
fi

DOMAIN=$1
EMAIL=$2
STAGING=${3:-0}
COMPOSE="docker compose"

cd "$(dirname "$0")/.."

if ! grep -q "^DOMAIN=${DOMAIN}" .env 2>/dev/null && ! grep -q "^DOMAIN=" .env 2>/dev/null; then
  echo "Tip: set DOMAIN=${DOMAIN} in your .env file"
fi

$COMPOSE up -d new_frontend backend db

echo "Requesting certificate for ${DOMAIN}..."

STAGING_ARG=""
if [ "$STAGING" != "0" ]; then
  STAGING_ARG="--staging"
fi

$COMPOSE run --rm certbot certonly --webroot \
  -w /var/www/certbot \
  $STAGING_ARG \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email \
  -d "$DOMAIN"

export DOMAIN
$COMPOSE up -d --force-recreate new_frontend

echo "Done. Site should be available at https://${DOMAIN}"
echo "Renewal runs automatically via the certbot service."
