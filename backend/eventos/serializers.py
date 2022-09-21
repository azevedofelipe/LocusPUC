from .models import Evento
from rest_framework import serializers

# Serializer para modelo Lugar
class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = ('id','titulo','data_hora','autor','local')