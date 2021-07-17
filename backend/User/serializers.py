from django.db.models import fields
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import BookedSlot, Users
from .models import Doctor
from .models import Patient


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ('userName','name','email','mobile','userRole')

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
