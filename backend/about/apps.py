from django.apps import AppConfig


class AboutConfig(AppConfig):
  default_auto_field = 'django.db.models.BigAutoField'
  name = 'about'

class AboutTextConfig(AppConfig):
  default_auto_field = 'django.db.models.BigAutoField'
  name = 'about sub text'
