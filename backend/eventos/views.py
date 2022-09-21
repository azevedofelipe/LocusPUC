from django.shortcuts import render
from .models import Evento
from rest_framework import generics
from .serializers import EventoSerializer


# API para listar todos os lugares e criar lugares [C]RUD
class EventoList(generics.ListCreateAPIView):
    serializer_class = EventoSerializer
    queryset = Evento.objects.all()

# API para update, delete e detalhes de lugares C[RUD]
class EventoDetalhes(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EventoSerializer
    queryset = Evento.objects.all()
