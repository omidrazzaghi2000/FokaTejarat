from django.db import migrations, models


class Migration(migrations.Migration):

  initial = True

  dependencies = []

  operations = [
    migrations.CreateModel(
      name='HomeFeature',
      fields=[
        ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
        ('title', models.CharField(max_length=200)),
        ('description', models.TextField()),
        ('image', models.ImageField(upload_to='home_feature')),
        ('button_text', models.CharField(default='درباره ما', max_length=100)),
        ('button_link', models.CharField(default='/about', max_length=200)),
      ],
      options={
        'verbose_name': 'Home Feature Section',
        'verbose_name_plural': 'Home Feature Sections',
      },
    ),
  ]
