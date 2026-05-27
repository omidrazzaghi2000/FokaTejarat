from django.contrib import admin
from .models import HomeFeature


@admin.register(HomeFeature)
class HomeFeatureAdmin(admin.ModelAdmin):
  list_display = ('title', 'button_text', 'button_link')
  search_fields = ('title', 'description')
