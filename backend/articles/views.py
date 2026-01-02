from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions

from .models import Article
from .serializers import ArticleSerializer


class ArticleListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Article.objects.all()
  serializer_class = ArticleSerializer
  pagination_class = None


class ArticleDetailView(RetrieveAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Article.objects.all()
  serializer_class = ArticleSerializer
  lookup_field = 'id'
