from rest_framework.generics import ListAPIView
from rest_framework import permissions

from .models import HomeFeature
from .serializers import HomeFeatureSerializer


class HomeFeatureListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = HomeFeature.objects.all()
  serializer_class = HomeFeatureSerializer
  pagination_class = None
