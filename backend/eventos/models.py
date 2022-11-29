from django.db import models
from django.contrib.auth.models import User
from backend.lugar.models import Lugar
from taggit.managers import TaggableManager

# Tabela de lugares
class Evento(models.Model):
    titulo = models.CharField(max_length=100)
    data_hora = models.DateTimeField()
    autor = models.ForeignKey(User,on_delete=models.CASCADE, default=None)
    local = models.ForeignKey(Lugar,on_delete=models.CASCADE, default=None)
    texto = models.TextField(max_length=500,blank=True)

    tags = TaggableManager()

    def __str__(self):
        return self.titulo

    @property
    def autor_nome(self):
        return self.autor.username
    
    @property
    def local_titulo(self):
        return self.local.titulo

    @property
    def local_descricao(self):
        return self.local.descricao


class Comentario(models.Model):
    evento = models.ForeignKey(Evento,on_delete=models.CASCADE)
    autor = models.ForeignKey(User,on_delete=models.CASCADE,related_name='autor_evento')
    texto = models.TextField()

    def __str__(self):
        return self.autor.username + " - " + self.lugar.titulo

    @property
    def evento_nome(self):
        return self.evento.titulo

    @property
    def autor_nome(self):
        return self.autor.username