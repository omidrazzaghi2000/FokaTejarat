from rest_framework.generics import ListAPIView
from rest_framework import permissions

from .models import About,AboutText
from .serializers import AboutSerializer,AboutTextSerializer


class AboutListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = About.objects.all()
  serializer_class = AboutSerializer
  pagination_class = None

class AboutTextListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = AboutText.objects.all()
  serializer_class = AboutTextSerializer
  pagination_class = None
