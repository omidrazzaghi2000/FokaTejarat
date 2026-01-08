from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions

from .models import Report
from .serializers import ReportSerializer


class ReportListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Report.objects.all()
  serializer_class = ReportSerializer
  pagination_class = None


class ReportDetailView(RetrieveAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Report.objects.all()
  serializer_class = ReportSerializer
  lookup_field = 'id'

