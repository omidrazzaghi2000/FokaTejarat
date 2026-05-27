from django.db import models
from django.core.files.base import ContentFile
from io import BytesIO
from PIL import Image


class HomeFeature(models.Model):
  title = models.CharField(max_length=200)
  description = models.TextField()
  image = models.ImageField(upload_to='home_feature')
  button_text = models.CharField(max_length=100, default='درباره ما')
  button_link = models.CharField(max_length=200, default='/about')

  class Meta:
    verbose_name = 'Home Feature Section'
    verbose_name_plural = 'Home Feature Sections'

  def save(self, *args, **kwargs):
    if self.image:
      filename = '%s.jpg' % self.image.name.split('.')[0]
      image = Image.open(self.image)
      if image.mode in ('RGBA', 'LA'):
        background = Image.new(image.mode[:-1], image.size, '#fff')
        background.paste(image, image.split()[-1])
        image = background
      image_io = BytesIO()
      image.save(image_io, format='JPEG', quality=100)
      self.image.save(filename, ContentFile(image_io.getvalue()), save=False)
    super().save(*args, **kwargs)

  def __str__(self):
    return self.title
