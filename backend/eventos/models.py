from django.db import models
from django.contrib.auth.models import User
from backend.lugar.models import Lugar

# Tabela de lugares
class Evento(models.Model):
    titulo = models.CharField(max_length=100)
    data_hora = models.DateTimeField()
    autor = models.ForeignKey(User,on_delete=models.CASCADE, default=None)
    local = models.ForeignKey(Lugar,on_delete=models.CASCADE, default=None)

    def __str__(self):
        return self.titulo