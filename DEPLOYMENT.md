# راهنمای Deployment با Docker

## خلاصه تغییرات

پروژه شما برای اجرا با Docker Compose آماده شده است. تمام تغییرات لازم اعمال شده‌اند.

## فایل‌های جدید

1. **backend/Dockerfile** - Docker image برای Django backend
2. **frontend/Dockerfile** - Docker image برای React frontend  
3. **frontend/nginx.conf** - تنظیمات Nginx برای serve کردن frontend
4. **docker-compose.yml** - فایل اصلی Docker Compose
5. **backend/.dockerignore** - فایل‌های نادیده گرفته شده در Docker build
6. **frontend/.dockerignore** - فایل‌های نادیده گرفته شده در Docker build
7. **frontend/src/config/api.ts** - Config برای API URLs
8. **README_DOCKER.md** - راهنمای کامل Docker

## تغییرات انجام شده

### Backend:
- ✅ Dockerfile ایجاد شد
- ✅ settings.py برای استفاده از environment variables به‌روزرسانی شد
- ✅ پشتیبانی از PostgreSQL اضافه شد
- ✅ gunicorn و psycopg2-binary به requirements.txt اضافه شد
- ✅ تنظیمات امنیتی برای production اضافه شد

### Frontend:
- ✅ Dockerfile ایجاد شد (multi-stage build)
- ✅ nginx.conf برای serve کردن static files
- ✅ فایل config/api.ts برای مدیریت API URLs
- ✅ همه کامپوننت‌ها برای استفاده از API_URL به‌روزرسانی شدند

### Docker Compose:
- ✅ سرویس PostgreSQL
- ✅ سرویس Backend (Django + Gunicorn)
- ✅ سرویس Frontend (Nginx)
- ✅ Volumes برای persistent data
- ✅ Health checks

## مراحل نصب

### 1. ساخت فایل .env

در root پروژه یک فایل `.env` بسازید:

```bash
cat > .env << 'EOF'
DEBUG=False
SECRET_KEY=your-very-secret-key-change-this-min-50-characters
ALLOWED_HOSTS=localhost,127.0.0.1,your-domain.com

DB_NAME=fouka_db
DB_USER=fouka_user
DB_PASSWORD=your-strong-password-here

DB_HOST=db
DB_PORT=5432

CORS_ALLOWED_ORIGINS=http://localhost,http://your-domain.com
EOF
```

**⚠️ مهم**: `SECRET_KEY` و `DB_PASSWORD` را با مقادیر قوی تغییر دهید!

### 2. Build و اجرا

```bash
# Build images
docker-compose build

# اجرا در background
docker-compose up -d

# مشاهده لاگ‌ها
docker-compose logs -f
```

### 3. ساخت Superuser

```bash
docker-compose exec backend python manage.py createsuperuser
```

### 4. دسترسی به سایت

- **Frontend**: http://localhost
- **Backend API**: http://localhost:8000
- **Django Admin**: http://localhost:8000/admin

## ساختار Docker

```
┌─────────────────┐
│   Frontend      │  Port 80
│   (Nginx)       │  ────────┐
└─────────────────┘          │
                             │ HTTP Requests
┌─────────────────┐          │
│   Backend       │  Port 8000
│   (Gunicorn)    │  ◄───────┘
└─────────────────┘
         │
         │ PostgreSQL
         ▼
┌─────────────────┐
│   Database      │  Port 5432 (internal)
│   (PostgreSQL)  │
└─────────────────┘
```

## دستورات مفید

```bash
# مشاهده وضعیت
docker-compose ps

# مشاهده لاگ‌ها
docker-compose logs -f backend
docker-compose logs -f frontend

# توقف
docker-compose down

# توقف و حذف volumes (حذف دیتابیس!)
docker-compose down -v

# Restart
docker-compose restart

# Rebuild (بعد از تغییرات)
docker-compose build --no-cache
docker-compose up -d

# اجرای migration
docker-compose exec backend python manage.py migrate

# Django shell
docker-compose exec backend python manage.py shell

# دسترسی به bash
docker-compose exec backend bash
docker-compose exec frontend sh
```

## Backup و Restore

### Backup دیتابیس:
```bash
docker-compose exec db pg_dump -U fouka_user fouka_db > backup_$(date +%Y%m%d_%H%M%S).sql
```

### Restore دیتابیس:
```bash
docker-compose exec -T db psql -U fouka_user fouka_db < backup.sql
```

## تنظیمات Production

### 1. تغییر SECRET_KEY
```env
SECRET_KEY=your-production-secret-key-very-long-and-random
```

### 2. تغییر ALLOWED_HOSTS
```env
ALLOWED_HOSTS=your-domain.com,www.your-domain.com
```

### 3. تغییر CORS_ALLOWED_ORIGINS
```env
CORS_ALLOWED_ORIGINS=https://your-domain.com
```

### 4. فعال‌سازی HTTPS (اختیاری)
در `settings.py` می‌توانید `SECURE_SSL_REDIRECT = True` را فعال کنید.

## نکات مهم

1. **SECRET_KEY**: در production باید یک کلید قوی و منحصر به فرد باشد
2. **DB_PASSWORD**: از رمز قوی استفاده کنید
3. **DEBUG**: در production باید `False` باشد
4. **Volumes**: داده‌های دیتابیس در volume `postgres_data` ذخیره می‌شوند
5. **Media Files**: فایل‌های آپلود شده در volume `media_volume` ذخیره می‌شوند

## عیب‌یابی

### Container شروع نمی‌شود:
```bash
docker-compose logs backend
docker-compose logs frontend
```

### مشکل اتصال به دیتابیس:
```bash
docker-compose exec backend python manage.py dbshell
```

### مشکل در build:
```bash
docker-compose build --no-cache
```

### مشکل در static files:
```bash
docker-compose exec backend python manage.py collectstatic --noinput
```

## پشتیبانی

برای مشکلات بیشتر به `README_DOCKER.md` مراجعه کنید.

