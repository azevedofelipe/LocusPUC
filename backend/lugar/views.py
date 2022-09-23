from django.shortcuts import render
from .models import Lugar
from rest_framework import generics
from .serializers import LugarSerializer
from django_filters import rest_framework as filters


# API para listar todos os lugares e criar lugares [C]RUD
class LugarList(generics.ListCreateAPIView):
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = {
        'tags__name' : ['in','contains','exact'],                   # para filtrar por mais de um tag: api/lugar/?tags__name__in=Comer,Estudar
        'titulo' : ['contains','exact']                             # para filtrar por titulo precisa user __contains: api/lugar/?titulo__contains=bibli
    }                 
    serializer_class = LugarSerializer
    queryset = Lugar.objects.all()

# API para update, delete e detalhes de lugares C[RUD]
class LugarDetalhes(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = LugarSerializer
    queryset = Lugar.objects.all()
