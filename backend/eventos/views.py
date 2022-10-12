from django.shortcuts import render
from .models import Evento
from rest_framework import generics
from .serializers import EventoSerializer
from django_filters import rest_framework as filters


# API para listar todos os lugares e criar lugares [C]RUD
class EventoList(generics.ListCreateAPIView):

    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = {
        'local__titulo' : ['contains'],
        'titulo' : ['contains']
    }

    serializer_class = EventoSerializer
    queryset = Evento.objects.all().distinct()

# API para update, delete e detalhes de lugares C[RUD]
class EventoDetalhes(generics.RetrieveUpdateDestroyAPIView):
        
    serializer_class = EventoSerializer
    queryset = Evento.objects.all()
