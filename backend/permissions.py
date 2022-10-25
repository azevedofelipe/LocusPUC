from math import perm
from rest_framework import permissions

# Verifica se o usuario fazendo o request e o mesmo q criou o lugar/evento
class isOwner(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.user:
            if request.user.is_superuser:
                return True
            else:
                return obj.autor == request.user
        else:
            return False