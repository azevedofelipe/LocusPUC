from dataclasses import field
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email')

# Cadastro Serializer
class CadastroSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email','password')
        extra_kwargs = {'password' : {'write_only': True}}

    # Valida senha para nao ser muito simples
    def validate_password(self,value):
        validate_password(value)
        return value
    
    # Valida se email ja existe na base
    def validate_email(self,value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email ja existe")
        return value

    # Cria usuario na tabela de users com senha hashed
    def create(self, validated_data):
        user = User(username=validated_data['username'],email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()

        return user

# Altera senha de usuario
class AlterarSenhaSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True,validators=[validate_password])
    password2 = serializers.CharField(write_only=True,required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('old_password','password','password2')

    def validate(self,attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Senhas não coincidem"})

        return attrs

    def validate_old_password(self,value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError({"old_password": "Senha antiga incorreta"})
        return value

    def update(self, instance, validated_data):
        user = self.context['request'].user

        if user.pk != instance.pk:                                                                          # So pode atualizar senha do mesmo usuario
            raise serializers.ValidationError({"authorize": "Voce nao tem permissoes desse usuario"})

        instance.set_password(validated_data['password'])
        instance.save()

        return instance
        

# Atualiza email e nome de usuario
class AtualizerUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ('username','email')


    def validate_email(self,value):
        user = self.context['request'].user

        if User.objects.exclude(pk=user.pk).filter(email=value).exists():                                   # Checa se o email ja existe
            raise serializers.ValidationError({"email": "Esse email ja existe."})
        return value

    def validate_username(self,value):
        user = self.context['request'].user
        if User.objects.exclude(pk=user.pk).filter(username=value).exists():                                # Checa se usuario ja existe
            raise serializers.ValidationError({"username" : "Esse nome de usuário ja existe."})
        return value

    def update(self,instance, validated_data):
        user = self.context['request'].user

        if user.pk != instance.pk:                                                                          # So deixa usuario alterar seu proprio perfil
            raise serializers.ValidationError({"authorize": "Voce nao tem permissoes desse usuario"})

        instance.username = validated_data['username']
        instance.email = validated_data['email']

        instance.save()

        return instance