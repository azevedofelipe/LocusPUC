"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from backend.lugar import views as lugar_views      # Importar views.py do app de lugar como lugar_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/lugar', lugar_views.LugarList.as_view()),                     # Lista e criacao de lugares
    path('api/lugar/<int:pk>', lugar_views.LugarDetalhes.as_view()),        # Recebe o pk do lugar especifico para ver mais detalhes
]
