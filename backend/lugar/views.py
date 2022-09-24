from django.shortcuts import render
from .models import Like, Lugar
from rest_framework import generics
from .serializers import LugarSerializer, LikeSerializer
from django_filters import rest_framework as filters


# API para listar todos os lugares e criar lugares [C]RUD
class LugarList(generics.ListCreateAPIView):
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = {
            'tags__name' : ['in','exact'],              # 'in' deixa filtrar por mais de um tag ao mesmo tempo e.g. ?tags__name__in=Comer,Estudar
            'titulo' : ['contains','exact']             # 'contains' url syntax: ?titulo__contains=biblio -> Biblioteca
    }
    serializer_class = LugarSerializer
    queryset = Lugar.objects.all().distinct()           

# API para update, delete e detalhes de lugares C[RUD]
class LugarDetalhes(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = LugarSerializer
    queryset = Lugar.objects.all()

# API para listar todos os likes, pode filtrar no URL por user,lugar,e tipo de voto e.g. ?user=1, ?lugar=5
class LikeCriar(generics.ListCreateAPIView):
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('user','lugar','voto')
    serializer_class = LikeSerializer
    queryset = Like.objects.all()

# API para update,deletar like
class LikeDetalhes(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = LikeSerializer
    queryset = Like.objects.all()
