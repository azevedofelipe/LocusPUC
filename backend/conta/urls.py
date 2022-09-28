from .views import CadastroAPI, LoginAPI, UserAPI
from knox import views as knox_views
from django.urls import path

urlpatterns = [
    path('cadastro/',CadastroAPI.as_view(),name='cadastro'),
    path('login/',LoginAPI.as_view(),name='login'),                                             # Input em formato JSON {"username" :  "admin", "password": "Senha123"}
    path('logout/',knox_views.LogoutView.as_view(),name='logout'),                              # Input header Key: Authorization, Value: Token <token_usuario>
    path('user/',UserAPI.as_view(),name='user'),
]
