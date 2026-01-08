from django.test import TestCase
from .models import Report


class ReportModelUnitTestCase(TestCase):
  def test_create_report(self):
    data = Report.objects.create(
      name='Test Report',
      description='Test Description'
    )
    self.assertIsInstance(data, Report)

