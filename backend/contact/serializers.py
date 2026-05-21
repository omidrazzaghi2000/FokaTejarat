from rest_framework import serializers
from .models import Contact, ContactMessage


class ContactSerializer(serializers.ModelSerializer):
  class Meta:
    model = Contact
    fields = '__all__'


class ContactMessageSerializer(serializers.ModelSerializer):
  class Meta:
    model = ContactMessage
    fields = ('first_name', 'last_name', 'email', 'phone', 'message')
