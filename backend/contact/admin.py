from django.contrib import admin
from .models import Contact, ContactMessage


class ContactAdmin(admin.ModelAdmin):
  list_display = ('address', 'email')
  list_display_links = ('email',)
  search_fields = ('address', 'email')
  list_per_page = 20


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
  list_display = ('first_name', 'last_name', 'email', 'phone', 'created_at', 'is_read')
  list_filter = ('is_read', 'created_at')
  search_fields = ('first_name', 'last_name', 'email', 'phone', 'message')
  readonly_fields = ('created_at',)
  list_per_page = 25

  def mark_as_read(self, request, queryset):
    queryset.update(is_read=True)

  def mark_as_unread(self, request, queryset):
    queryset.update(is_read=False)

  actions = [mark_as_read, mark_as_unread]


admin.site.register(Contact, ContactAdmin)
