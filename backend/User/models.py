

from django.db import models


# Create your models here.
class Users(models.Model):
    userName=models.CharField(max_length=20,unique=True)
    name=models.CharField(max_length=100)
    email=models.EmailField(max_length=100,unique=True)
    mobile=models.CharField(max_length=10)
    isDoctor=models.BooleanField(default=True)

class Patient(Users,models.Model):
    age=models.PositiveSmallIntegerField()
    gender=models.CharField(max_length=15)
    address=models.TextField()
    medicalHistory=models.TextField()

class Doctor(Users,models.Model):
    specialization=models.CharField(max_length=100)
    experience=models.CharField(max_length=100)
    degree=models.CharField(max_length=100)
    hospitalName=models.CharField(max_length=100)
    hospitalLocation=models.TextField()
    

class BookedSlot(models.Model):
    slot=models.IntegerField(default=-1)
    doc=models.ForeignKey(Doctor,on_delete=models.CASCADE)
    pat=models.ForeignKey(Patient,on_delete=models.CASCADE,default=None)
    type=models.BooleanField(default=True)

