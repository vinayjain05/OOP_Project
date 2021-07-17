
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from .models import Users,Doctor,Patient,BookedSlot
from rest_framework import serializers, viewsets,generics,status
from .serializers import UserSerializer,DocSerializer,PatSerializer,SlotSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets,permissions
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages





    

def userregister(request):
    
    userName = request.POST['userName']
    email = request.POST['email']
    password= request.POST['password']
    
    if User.objects.filter(email=email).exists():
        messages.info(request,'Email already used')
        return redirect('register')
    elif User.objects.filter(userName=userName).exists():
        messages.info(request,'Username already used')
        return redirect('register')
    else:
        user = User.objects.create_user(userName=userName,email=email,password=password)
        user.save()
        

    return redirect('')
def login(request):
    if request.method=='POST':
        userName=request.POST['userName']
        password= request.POST['password']
        user = authenticate(userName=userName,password=password)
        if user is not None:
            login(request,user)
            patient=Patient.objects.filter(userName=userName)
            doclist=Doctor.objects.all()
            newlist=[patient,doclist]
            return newlist
            
    return render(request,'')
def logout(request):
    logout(request)
   
    
    
