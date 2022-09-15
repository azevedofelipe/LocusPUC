from django.db import models
from django.contrib.auth.models import User

# Tabela de lugares
class Lugar(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField()
    thumb = models.ImageField(default='default.png',blank=True)
    autor = models.ForeignKey(User,on_delete=models.CASCADE, default=None)

    def __str__(self):
        return self.titulo