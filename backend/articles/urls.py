from django.urls import path
from .views import ArticleListView, ArticleDetailView

urlpatterns = [
  path('', ArticleListView.as_view()),
  path('<int:id>/', ArticleDetailView.as_view()),
]

