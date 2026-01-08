from django.urls import path
from .views import ReportListView, ReportDetailView

urlpatterns = [
  path('', ReportListView.as_view()),
  path('<int:id>/', ReportDetailView.as_view()),
]

