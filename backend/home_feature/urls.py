from django.urls import path
from .views import HomeFeatureListView

urlpatterns = [
  path('', HomeFeatureListView.as_view()),
]
