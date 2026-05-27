from rest_framework import serializers
from .models import HomeFeature


class HomeFeatureSerializer(serializers.ModelSerializer):
  class Meta:
    model = HomeFeature
    fields = '__all__'
