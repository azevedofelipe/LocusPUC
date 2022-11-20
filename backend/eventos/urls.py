from django.urls import path
from . import views

app_name = 'eventos'

urlpatterns = [
    path('',views.EventoList.as_view()),
    path('<int:pk>', views.EventoDetalhes.as_view()),
    path('comentarios/',views.ComentarioCriar.as_view()),
    path('comentarios/<int:pk>',views.ComentarioDetalhes.as_view())
]
