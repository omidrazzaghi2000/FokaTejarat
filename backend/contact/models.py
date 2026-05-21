from django.db import models


class ContactMessage(models.Model):
  first_name = models.CharField(max_length=100)
  last_name = models.CharField(max_length=100)
  email = models.EmailField()
  phone = models.CharField(max_length=20)
  message = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  is_read = models.BooleanField(default=False)

  class Meta:
    verbose_name = 'Contact Message'
    verbose_name_plural = 'Contact Messages'
    ordering = ['-created_at']

  def __str__(self):
    return f'{self.first_name} {self.last_name} — {self.email}'


class Contact(models.Model):
  address = models.CharField(max_length=250)
  email = models.CharField(max_length=150)
  phone = models.CharField(max_length=20)
  latitude = models.DecimalField(max_digits=9, decimal_places=6)
  longitude = models.DecimalField(max_digits=9, decimal_places=6)

  class Meta:
    verbose_name = 'Contact'
    verbose_name_plural = 'Contact'

  def __str__(self):
    return self.email
