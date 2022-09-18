from .models import Lugar
from rest_framework import serializers
from taggit.serializers import (TagListSerializerField,TaggitSerializer)

# Serializer para modelo Lugar
class LugarSerializer(TaggitSerializer, serializers.ModelSerializer):
    tags = TagListSerializerField()

    class Meta:
        model = Lugar
        fields = ('id','titulo','descricao','thumb','autor','tags')