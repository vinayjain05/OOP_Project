from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import User
from .models import Doctor
from .models import Patient

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

class DocSerializer(serializers.ModelSerializer):
    class Meta(UserSerializer.Meta):
        model = Doctor
        fields = UserSerializer.Meta.fields + ('specialization', 'experience','degree','hospitalName','hospitalLocation','bookedSlot','patientID','bookingType')

class PatSerializer(serializers.ModelSerializer):
    class Meta(UserSerializer.Meta):
        model = Patient
        fields = UserSerializer.Meta.fields + ('age', 'gender','address','medicalHistory')

