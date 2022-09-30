from django.contrib import admin
from .models import Comentario, Lugar, Like

# Register your models here.
admin.site.register(Lugar)
admin.site.register(Comentario)
admin.site.register(Like)