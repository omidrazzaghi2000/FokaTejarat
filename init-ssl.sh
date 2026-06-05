#!/bin/bash
set -e

# Check if .env file exists and load variables
if [ -f .env ]; then
    echo "Loading environment variables from .env file"
    export $(grep -v '^#' .env | xargs)
fi

# Check if DOMAIN is set
if [ -z "$DOMAIN" ]; then
    echo "ERROR: DOMAIN environment variable is not set!"
    echo "Please set DOMAIN in your .env file or export it first."
    echo "Example: export DOMAIN=yourdomain.com"
    exit 1
fi

echo "=== Starting initial SSL certificate setup for $DOMAIN ==="

# Check if services are running, if not start them first
if ! docker compose ps | grep -q "Up"; then
    echo "Starting Docker Compose services first..."
    docker compose up -d
fi

# Wait a few seconds for services to be ready
echo "Waiting for services to be ready..."
sleep 10

# Get initial certificate
echo "Obtaining Let's Encrypt certificate for $DOMAIN..."
docker compose run --rm certbot certonly --webroot -w /var/www/certbot -d "$DOMAIN" --email your-email@example.com --agree-tos --no-eff-email

# Restart new_frontend to pick up the certificates
echo "Restarting frontend to apply SSL..."
docker compose restart new_frontend

# Set USE_HTTPS to True in .env
if grep -q "USE_HTTPS" .env; then
    sed -i.bak "s/USE_HTTPS=.*/USE_HTTPS=True/" .env
else
    echo "USE_HTTPS=True" >> .env
fi

echo "=== SSL certificate setup complete! ==="
echo "Your site is now available at https://$DOMAIN"
echo "Certificates will automatically renew every 12 hours"
