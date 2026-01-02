from django.test import TestCase
from .models import Article


class ArticleModelUnitTestCase(TestCase):
  def test_create_article(self):
    data = Article.objects.create(
      name='Test Article',
      description='Test Description'
    )
    self.assertIsInstance(data, Article)
