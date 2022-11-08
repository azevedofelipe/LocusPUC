from django.shortcuts import render
from rest_framework import generics,permissions,status
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import AlterarSenhaSerializer, AtualizerUserSerializer, UserSerializer, CadastroSerializer
from knox.views import LoginView as KnoxLoginView
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import login
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

# API Cadastro
class CadastroAPI(generics.GenericAPIView):
    serializer_class = CadastroSerializer

    def post(self,request,*args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user" : UserSerializer(user, context=self.get_serializer_context()).data,
            "token" : AuthToken.objects.create(user=user)[1]                                                 # Cria JWT para session do usuario
        })

# API Login de usuario cria token pra session do usuario
class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    # Autenticacao do usuario
    def post(self,request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request,user)                                                                 # Fazer login de session
        return super(LoginAPI,self).post(request, format=None)

# Get User API, input de token output de usuario
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

# GET User Email API, input de email output de user com mesmo email
class UserEmailAPI(generics.ListAPIView):

    def post(self,request,*args, **kwargs):
        email = self.kwargs.get('email')
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            return Response({
            "token" : AuthToken.objects.create(user)[1]                                                 # Cria JWT para session do usuario
            })
        else:
            content = {"Erro": "Email nao encontrado"}
            return Response(content,status=status.HTTP_400_BAD_REQUEST)

    serializer_class = UserSerializer

class AlterarSenhaView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = AlterarSenhaSerializer


class AtualizarPerfilView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = AtualizerUserSerializer