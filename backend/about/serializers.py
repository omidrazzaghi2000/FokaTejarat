from rest_framework import serializers
from .models import About,AboutText


class AboutSerializer(serializers.ModelSerializer):
  class Meta:
    model = About
    fields = '__all__'


class AboutTextSerializer(serializers.ModelSerializer):
  class Meta:
    model = AboutText
    fields = '__all__'
