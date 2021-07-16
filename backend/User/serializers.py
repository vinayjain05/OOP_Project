from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import User
from .models import Doctor
from .models import Patient

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'