from django.shortcuts import render
from .models import Comentario, Like, Lugar
from rest_framework import generics
from .serializers import ComentarioSerializer, LugarSerializer, LikeSerializer
from django_filters import rest_framework as filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from backend.permissions import isOwner


# API para listar todos os lugares e criar lugares [C]RUD
class LugarList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly,]               # So usuario autenticado pode criar lugar novo

    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = {
            'tags__name' : ['in'],              # 'in' deixa filtrar por mais de um tag ao mesmo tempo e.g. ?tags__name__in=Comer,Estudar
            'titulo' : ['contains']             # 'contains' url syntax: ?titulo__contains=biblio -> Biblioteca
    }
    serializer_class = LugarSerializer
    queryset = Lugar.objects.all().distinct()           

# API para update, delete e detalhes de lugares C[RUD]
class LugarDetalhes(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [isOwner,]

    serializer_class = LugarSerializer
    queryset = Lugar.objects.all()

# API para listar todos os likes, pode filtrar no URL por user,lugar,e tipo de voto e.g. ?user=1, ?lugar=5
class LikeCriar(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('autor','lugar','voto')
    serializer_class = LikeSerializer
    queryset = Like.objects.all()

# API para update,deletar like
class LikeDetalhes(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (isOwner,)
    
    serializer_class = LikeSerializer
    queryset = Like.objects.all()

class ComentarioCriar(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    serializer_class = ComentarioSerializer
    queryset = Comentario.objects.all()

class ComentarioDetalhes(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (isOwner,)

    serializer_class = ComentarioSerializer
    queryset = Comentario.objects.all()