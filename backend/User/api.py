from .models import BookedSlot, Users
from .models import Doctor
from .models import Patient
from rest_framework import viewsets,permissions
from .serializers import UserSerializer,DocSerializer,PatSerializer,SlotSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset=Users.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

class DocViewSet(viewsets.ModelViewSet):
    queryset=Doctor.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = DocSerializer

class PatViewSet(viewsets.ModelViewSet):
    queryset=Patient.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = PatSerializer

class SlotViewSet(viewsets.ModelViewSet):
    queryset=BookedSlot.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = SlotSerializer