from django.contrib import admin
from .models import Lugar, Avaliacao, Like

# Register your models here.
admin.site.register(Lugar)
admin.site.register(Avaliacao)
admin.site.register(Like)