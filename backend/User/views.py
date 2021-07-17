from django.shortcuts import render
from .models import User
from .models import Doctor
from .models import Patient
from rest_framework import viewsets
from .serializers import UserSerializer
from .serializers import DocSerializer
from .serializers import PatSerializer
# Create your views here.
# def ListDoc(request):
#     Doc_List = Doctor.objects.all()
#     return render(request,'',{'Doc_List':Doc_List})

