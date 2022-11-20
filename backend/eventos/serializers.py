from .models import Evento, Comentario
from rest_framework import serializers
from taggit.serializers import (TagListSerializerField,TaggitSerializer)

# Serializer para modelo Lugar
class EventoSerializer(serializers.ModelSerializer):
    autor_nome = serializers.ReadOnlyField()
    local_titulo = serializers.ReadOnlyField()
    local_descricao = serializers.ReadOnlyField()
    tags = TagListSerializerField()


    class Meta:
        model = Evento
        fields = ('id','titulo','data_hora','autor','autor_nome','local','local_titulo','local_descricao','tags')

class ComentarioSerializer(serializers.ModelSerializer):
    evento_nome = serializers.ReadOnlyField()
    autor_nome = serializers.ReadOnlyField()

    class Meta:
        model = Comentario
        fields = ('id','evento','evento_nome','autor','autor_nome','texto')