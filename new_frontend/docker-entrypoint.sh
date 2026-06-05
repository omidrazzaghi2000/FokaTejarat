#!/bin/sh
set -e

# If DOMAIN is not set, use HTTP only config
if [ -z "$DOMAIN" ]; then
    echo "No DOMAIN set, using HTTP-only config"
    envsubst < /etc/nginx/templates/nginx.http.conf > /etc/nginx/conf.d/default.conf
else
    echo "DOMAIN set to $DOMAIN, checking for SSL certificates"
    
    # Check if certificates exist
    if [ ! -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
        echo "No SSL certificates found, using HTTP-only config temporarily"
        envsubst < /etc/nginx/templates/nginx.http.conf > /etc/nginx/conf.d/default.conf
    else
        echo "SSL certificates found, using HTTPS config"
        envsubst < /etc/nginx/templates/nginx-ssl.conf.template > /etc/nginx/conf.d/default.conf
    fi
fi

exec nginx -g 'daemon off;'
