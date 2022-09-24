from django.urls import path
from . import views

app_name = 'lugar'

urlpatterns = [
    path('',views.LugarList.as_view()),                     # Lista de lugares
    path('<int:pk>/',views.LugarDetalhes.as_view()),        # Detalhes de lugar, pk de lugar especifico
    path('likes/',views.LikeCriar.as_view()),               # Lista de todos os likes
    path('like/<int:pk>',views.LikeDetalhes.as_view()),     # Detalhes de um like em especifico

]
