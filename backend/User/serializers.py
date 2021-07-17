from django.db.models import fields
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import BookedSlot, User
from .models import Doctor
from .models import Patient

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('userName','name','email','mobile','password','userRole')

class DocSerializer(serializers.ModelSerializer):
    class Meta(UserSerializer.Meta):
        model = Doctor
        fields = UserSerializer.Meta.fields + ('specialization', 'experience','degree','hospitalName','hospitalLocation')

class PatSerializer(serializers.ModelSerializer):
    class Meta(UserSerializer.Meta):
        model = Patient
        fields = UserSerializer.Meta.fields + ('age', 'gender','address','medicalHistory')

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookedSlot
        fields = '__all__'
