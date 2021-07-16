from backend.settings import TIME_ZONE
from django.db import models
import datetime

# Create your models here.
class User(models.Model):
    userName=models.CharField(max_length=20,default='user')
    name=models.CharField(max_length=100)
    email=models.EmailField(max_length=254)
    mobile=models.CharField(max_length=10)
    password=models.CharField(max_length=15)
    userRole=models.CharField(default='Patient',max_length=15)

class Patient(User,models.Model):
    age=models.PositiveSmallIntegerField()
    gender=models.CharField(max_length=15)
    address=models.TextField()
    medicalHistory=models.TextField()

class Doctor(User,models.Model):
    specialization=models.CharField(max_length=100)
    experience=models.PositiveSmallIntegerField()
    degree=models.CharField(max_length=100)
    hospitalName=models.CharField(max_length=100)
    hospitalLocation=models.TextField()

class Booking(models.Model):
    date=models.DateField(("Date"), default=datetime.date.today)
    hour=models.IntegerField()
    quarter=models.IntegerField()
    doc=models.ForeignKey(Doctor,on_delete=models.CASCADE)
    status=models.IntegerField(default=1)
    patient=models.ManyToManyField(Patient,default=None)
    type=models.BooleanField(default=True)

