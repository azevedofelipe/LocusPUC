from .models import Comentario, Lugar, Like
from rest_framework import serializers
from taggit.serializers import (TagListSerializerField,TaggitSerializer)

# Serializer para modelo Lugar
class LugarSerializer(TaggitSerializer, serializers.ModelSerializer):
    tags = TagListSerializerField()
    autor_nome = serializers.ReadOnlyField()

    class Meta:
        model = Lugar
        fields = ('id','titulo','descricao','thumb','alt_text','autor','autor_nome','tags', 'likes_count','dislikes_count')


class LikeSerializer(serializers.ModelSerializer):
    lugar_nome = serializers.ReadOnlyField()
    user_nome = serializers.ReadOnlyField()
    
    class Meta:
        model = Like
        fields = ('id','voto','lugar','lugar_nome','autor','user_nome', 'lugar_likes','lugar_dislikes')

class ComentarioSerializer(serializers.ModelSerializer):
    lugar_nome = serializers.ReadOnlyField()
    autor_nome = serializers.ReadOnlyField()

    class Meta:
        model = Comentario
        fields = ('id','lugar','lugar_nome','autor','autor_nome','texto')