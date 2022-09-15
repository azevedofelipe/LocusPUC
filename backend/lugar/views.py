from django.shortcuts import render
from .models import Lugar
from rest_framework import generics
from .serializers import LugarSerializer


# API para listar todos os lugares e criar lugares [C]RUD
class LugarList(generics.ListCreateAPIView):
    serializer_class = LugarSerializer
    queryset = Lugar.objects.all()

# API para update, delete e detalhes de lugares C[RUD]
class LugarDetalhes(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = LugarSerializer
    queryset = Lugar.objects.all()
