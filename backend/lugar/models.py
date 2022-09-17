from django.db import models
from django.contrib.auth.models import User
from taggit.managers import TaggableManager

# Tabela de lugares
class Lugar(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField()
    thumb = models.ImageField(default='default.png',blank=True)
    autor = models.ForeignKey(User,on_delete=models.CASCADE, default=None)
    
    tags = TaggableManager()                                    # Para criar tags no API de lugar tem que criar em forma de lista e.g ["Estudar","Comer"]

    def __str__(self):
        return self.titulo