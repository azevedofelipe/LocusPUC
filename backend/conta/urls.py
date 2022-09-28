from .views import CadastroAPI
from django.urls import path

urlpatterns = [
    path('cadastro/',CadastroAPI.as_view(),name='cadastro'),
]
