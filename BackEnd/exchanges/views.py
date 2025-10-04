from rest_framework import viewsets, permissions
from .models import Exchange
from .serializers import ExchangeSerializer

class ExchangeViewSet(viewsets.ModelViewSet):
    queryset = Exchange.objects.all()
    serializer_class = ExchangeSerializer
    permission_classes = [permissions.IsAuthenticated]
