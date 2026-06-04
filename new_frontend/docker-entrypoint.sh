#!/bin/sh
set -eu

DOMAIN="${DOMAIN:-}"
CERT_PATH="/etc/letsencrypt/live/${DOMAIN}/fullchain.pem"

if [ -n "$DOMAIN" ] && [ -f "$CERT_PATH" ]; then
  echo "SSL certificates found for ${DOMAIN} — enabling HTTPS"
  envsubst '${DOMAIN}' < /etc/nginx/templates/nginx-ssl.conf.template > /etc/nginx/conf.d/default.conf
else
  if [ -n "$DOMAIN" ]; then
    echo "No SSL certs at ${CERT_PATH} — serving HTTP only (run scripts/init-letsencrypt.sh)"
  fi
  cp /etc/nginx/templates/nginx.http.conf /etc/nginx/conf.d/default.conf
fi

exec nginx -g 'daemon off;'
