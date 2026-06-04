# HTTPS / SSL setup

This project supports **Let's Encrypt** certificates behind **nginx** in Docker. HTTP works out of the box; HTTPS activates automatically once certificates exist.

## Prerequisites

- A **public domain** pointing to your server (A record → server IP)
- Ports **80** and **443** open on the firewall
- Docker Compose installed

## 1. Configure `.env`

Add or update these variables in the project root `.env`:

```env
DEBUG=False
DOMAIN=your-domain.com
ALLOWED_HOSTS=your-domain.com,www.your-domain.com
CORS_ALLOWED_ORIGINS=https://your-domain.com,https://www.your-domain.com
CSRF_TRUSTED_ORIGINS=https://your-domain.com,https://www.your-domain.com
USE_HTTPS=True
```

Use your real domain everywhere. If you use `www`, include both hostnames in `ALLOWED_HOSTS` and request a cert for both (see below).

## 2. Start the stack (HTTP first)

```bash
docker compose build
docker compose up -d
```

The site is served on **http://your-domain.com** until certificates are issued.

## 3. Obtain SSL certificate

```bash
chmod +x scripts/init-letsencrypt.sh
./scripts/init-letsencrypt.sh your-domain.com admin@your-domain.com
```

For testing (higher rate limits, invalid cert in browser):

```bash
./scripts/init-letsencrypt.sh your-domain.com admin@your-domain.com staging
```

**www + apex:** request both names:

```bash
docker compose run --rm certbot certonly --webroot -w /var/www/certbot \
  --email admin@your-domain.com --agree-tos --no-eff-email \
  -d your-domain.com -d www.your-domain.com
```

Then set `DOMAIN` to the name used in `nginx-ssl.conf.template` paths (primary domain in `/etc/letsencrypt/live/<DOMAIN>/`). For multiple names, use the first `-d` as `DOMAIN` in `.env`.

## 4. Verify HTTPS

```bash
docker compose logs new_frontend
curl -I https://your-domain.com
```

Nginx reloads with TLS when `fullchain.pem` exists under `/etc/letsencrypt/live/$DOMAIN/`.

## Architecture

```
Browser ──443──► nginx (TLS) ──► React static files
              └──► proxy ──► Django backend:8000
Browser ──80──►  redirect to HTTPS (after cert issued)
              └──► /.well-known/acme-challenge/ (certbot)
```

The **certbot** service renews certificates every 12 hours.

## Manual certificates (no Let's Encrypt)

Mount your own files and set `DOMAIN` to match the folder name:

```yaml
# docker-compose.yml — new_frontend volumes
- ./ssl/fullchain.pem:/etc/letsencrypt/live/your-domain.com/fullchain.pem:ro
- ./ssl/privkey.pem:/etc/letsencrypt/live/your-domain.com/privkey.pem:ro
```

Restart `new_frontend` after placing files.

## Django security

With `USE_HTTPS=True` and `DEBUG=False`, Django enables secure cookies and trusts `X-Forwarded-Proto` from nginx. Redirect to HTTPS is handled by nginx, not Django.

## Troubleshooting

| Issue | Fix |
|--------|-----|
| nginx fails after cert | Check `DOMAIN` in `.env` matches cert folder under `/etc/letsencrypt/live/` |
| Certbot rate limit | Use `staging` argument once, then production |
| Mixed content / API errors | Set `CORS_ALLOWED_ORIGINS` and `CSRF_TRUSTED_ORIGINS` to `https://...` |
| Still HTTP only | Run `docker compose up -d --force-recreate new_frontend` after cert exists |

```bash
docker compose exec certbot certbot certificates
docker compose logs certbot
```
