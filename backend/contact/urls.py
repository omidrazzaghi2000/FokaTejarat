from django.urls import path
from .views import ContactListView, ContactMessageCreateView

urlpatterns = [
  path('', ContactListView.as_view()),
  path('messages/', ContactMessageCreateView.as_view()),
]
