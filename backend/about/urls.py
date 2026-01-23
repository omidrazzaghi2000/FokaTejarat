from django.urls import path
from .views import AboutListView,AboutTextListView

urlpatterns = [
  path('', AboutListView.as_view()),
  path('text', AboutTextListView.as_view()),
]
