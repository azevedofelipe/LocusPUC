from .models import Evento
from rest_framework import serializers

# Serializer para modelo Lugar
class EventoSerializer(serializers.ModelSerializer):
    autor_nome = serializers.ReadOnlyField()
    local_titulo = serializers.ReadOnlyField()
    local_descricao = serializers.ReadOnlyField()
    class Meta:
        model = Evento
        fields = ('id','titulo','data_hora','autor','autor_nome','local','local_titulo','local_descricao')