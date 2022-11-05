from backend.conta.serializers import AlterarSenhaSerializer
from .views import AlterarSenhaView, AtualizarPerfilView, CadastroAPI, LoginAPI, UserAPI, UserEmailAPI
from knox import views as knox_views
from django.urls import path

urlpatterns = [
    path('cadastro/',CadastroAPI.as_view(),name='cadastro'),
    path('login/',LoginAPI.as_view(),name='login'),                                                     # Input em formato JSON {"username" :  "admin", "password": "Senha123"}
    path('logout/',knox_views.LogoutView.as_view(),name='logout'),                                      # Input header Key: Authorization, Value: Token <token_usuario>
    path('user/',UserAPI.as_view(),name='user'),
    path('alterar_senha/<int:pk>/', AlterarSenhaView.as_view(),name='alterar_senha'),                   # Alterar senha, <int:pk> id do user
    path('atualizar_perfil/<int:pk>/', AtualizarPerfilView.as_view(),name='atualizar_perfil'),          # Atualizar perfil, <int:pk> id do user
    path('email/<str:email>',UserEmailAPI.as_view(),name='email'),                                      # GET usuario por email
]
