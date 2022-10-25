from .models import Comentario, Lugar, Like
from rest_framework import serializers
from taggit.serializers import (TagListSerializerField,TaggitSerializer)

# Serializer para modelo Lugar
class LugarSerializer(TaggitSerializer, serializers.ModelSerializer):
    tags = TagListSerializerField()
    autor = serializers.CharField(source='autor.username')

    class Meta:
        model = Lugar
        fields = ('id','titulo','descricao','thumb','autor','tags', 'likes_count','dislikes_count')


class LikeSerializer(serializers.ModelSerializer):
    lugar = serializers.CharField(source='lugar.titulo')
    user = serializers.CharField(source='user.username')
    
    class Meta:
        model = Like
        fields = ('id','voto','lugar','user')

class ComentarioSerializer(serializers.ModelSerializer):
    lugar = serializers.CharField(source='lugar.titulo')
    autor = serializers.CharField(source='autor.username')

    class Meta:
        model = Comentario
        fields = ('id','lugar','autor','texto')