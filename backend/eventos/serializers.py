from .models import Evento
from rest_framework import serializers

# Serializer para modelo Lugar
class EventoSerializer(serializers.ModelSerializer):
    autor = serializers.CharField(source='autor.username')
    local_titulo = serializers.CharField(source='local.titulo')
    local_descricao = serializers.CharField(source='local.descricao')

    class Meta:
        model = Evento
        fields = ('id','titulo','data_hora','autor','local_titulo','local_descricao')