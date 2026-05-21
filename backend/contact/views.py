from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework import permissions

from .models import Contact, ContactMessage
from .serializers import ContactSerializer, ContactMessageSerializer


class ContactListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Contact.objects.all()
  serializer_class = ContactSerializer
  pagination_class = None


class ContactMessageCreateView(CreateAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = ContactMessage.objects.all()
  serializer_class = ContactMessageSerializer
