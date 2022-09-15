from .models import Lugar
from rest_framework import serializers

# Serializer para modelo Lugar
class LugarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lugar
        fields = '__all__'