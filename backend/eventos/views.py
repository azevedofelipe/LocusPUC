from django.shortcuts import render
from .models import Evento, Comentario
from rest_framework import generics
from .serializers import EventoSerializer, ComentarioSerializer
from django_filters import rest_framework as filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from backend.permissions import isOwner


# API para listar todos os lugares e criar lugares [C]RUD
class EventoList(generics.ListCreateAPIView):
    #permission_classes = (IsAuthenticatedOrReadOnly,)

    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = {
        'local__titulo' : ['contains'],
        'titulo' : ['contains'],
        'data_hora' : ['gte','lte'],
        'tags__name' : ['in']
    }

    serializer_class = EventoSerializer
    queryset = Evento.objects.all().distinct()

# API para update, delete e detalhes de lugares C[RUD]
class EventoDetalhes(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (isOwner,)

    serializer_class = EventoSerializer
    queryset = Evento.objects.all()

class ComentarioCriar(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    serializer_class = ComentarioSerializer
    queryset = Comentario.objects.all()

class ComentarioDetalhes(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (isOwner,)

    serializer_class = ComentarioSerializer
    queryset = Comentario.objects.all()
