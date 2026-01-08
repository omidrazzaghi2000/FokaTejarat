# راهنمای Docker Deployment

## پیش‌نیازها

- Docker
- Docker Compose
- Git

## نصب روی Ubuntu Server

### 1. نصب Docker و Docker Compose

```bash
# به‌روزرسانی سیستم
sudo apt update

# نصب Docker
sudo apt install -y docker.io docker-compose

# فعال‌سازی Docker
sudo systemctl enable docker
sudo systemctl start docker

# بررسی نصب
docker --version
docker-compose --version
```

### 2. کلون کردن پروژه

```bash
git clone <repository-url>
cd enterprise-website-template-main
```

### 3. ساخت فایل .env

```bash
cp .env.example .env
nano .env
```

مقادیر را ویرایش کنید:

```env
DEBUG=False
SECRET_KEY=یک-کلید-مخفی-قوی-با-حداقل-50-کاراکتر
ALLOWED_HOSTS=localhost,127.0.0.1,your-domain.com

DB_NAME=fouka_db
DB_USER=fouka_user
DB_PASSWORD=یک-رمز-قوی-اینجا

DB_HOST=db
DB_PORT=5432

CORS_ALLOWED_ORIGINS=http://localhost,http://your-domain.com
```

### 4. Build و اجرای Docker Compose

```bash
# Build images
sudo docker-compose build

# اجرای containers
sudo docker-compose up -d

# مشاهده لاگ‌ها
sudo docker-compose logs -f
```

### 5. ساخت Superuser برای Django Admin

```bash
sudo docker-compose exec backend python manage.py createsuperuser
```

### 6. اجرای Migrations (اگر لازم بود)

```bash
sudo docker-compose exec backend python manage.py migrate
```

## دستورات مفید

### مشاهده وضعیت
```bash
sudo docker-compose ps
```

### مشاهده لاگ‌ها
```bash
# همه لاگ‌ها
sudo docker-compose logs -f

# فقط backend
sudo docker-compose logs -f backend

# فقط frontend
sudo docker-compose logs -f frontend
```

### توقف سرویس‌ها
```bash
sudo docker-compose down
```

### توقف و حذف Volumes (حذف دیتابیس)
```bash
sudo docker-compose down -v
```

### Restart
```bash
sudo docker-compose restart
```

### اجرای دستور در Container
```bash
# Django shell
sudo docker-compose exec backend python manage.py shell

# Migration
sudo docker-compose exec backend python manage.py migrate

# Collect static
sudo docker-compose exec backend python manage.py collectstatic

# دسترسی به bash
sudo docker-compose exec backend bash
sudo docker-compose exec frontend sh
```

## تنظیمات Nginx (اختیاری)

اگر می‌خواهید از Nginx Reverse Proxy استفاده کنید:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## تنظیمات SSL با Let's Encrypt (اختیاری)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Backup دیتابیس

```bash
# Backup
sudo docker-compose exec db pg_dump -U fouka_user fouka_db > backup.sql

# Restore
sudo docker-compose exec -T db psql -U fouka_user fouka_db < backup.sql
```

## مشکلات رایج

### مشکل: Port در حال استفاده است
```bash
# بررسی پورت
sudo lsof -i :80
sudo lsof -i :8000

# تغییر پورت در docker-compose.yml
```

### مشکل: Permission denied
```bash
sudo chown -R $USER:$USER .
```

### مشکل: Container شروع نمی‌شود
```bash
# بررسی لاگ
sudo docker-compose logs backend
sudo docker-compose logs frontend

# Rebuild
sudo docker-compose build --no-cache
sudo docker-compose up -d
```

## ساختار پروژه

```
.
├── backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── ...
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── .dockerignore
│   └── ...
├── docker-compose.yml
├── .env.example
└── README_DOCKER.md
```

## پورت‌ها

- Frontend: `80`
- Backend: `8000`
- Database: `5432` (internal only)

## دسترسی

- Frontend: `http://localhost` یا `http://your-domain.com`
- Backend API: `http://localhost:8000` یا از طریق nginx proxy
- Django Admin: `http://localhost:8000/admin` یا `http://your-domain.com/admin`

