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

    # Cria usuario na tabela de users com senha hashed
    def create(self, validated_data):
        user = User(username=validated_data['username'],email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()

        return user
        