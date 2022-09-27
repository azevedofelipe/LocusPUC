from .models import Comentario, Lugar, Like
from rest_framework import serializers
from taggit.serializers import (TagListSerializerField,TaggitSerializer)

# Serializer para modelo Lugar
class LugarSerializer(TaggitSerializer, serializers.ModelSerializer):
    tags = TagListSerializerField()

    class Meta:
        model = Lugar
        fields = ('id','titulo','descricao','thumb','autor','tags', 'likes_count','dislikes_count')


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'

class ComentarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields = ('id','lugar','autor','texto')