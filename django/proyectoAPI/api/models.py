from django.db import models

# Create your models here.

# Clase Cliente
class Cliente(models.Model):
    name = models.CharField(max_length=20)
    apellidos = models.CharField(max_length=20)
    fechaNacimiento = models.CharField(max_length=30)
    rfc = models.CharField(max_length=13)
    correo = models.CharField(max_length=50)
    telefono = models.CharField(max_length=10)
    password = models.CharField(max_length=12)
    rol = models.CharField(max_length=1)

# Clase Empleado
class Empleado(models.Model):
    name = models.CharField(max_length=20)
    apellidos = models.CharField(max_length=20)
    fechaNacimiento = models.CharField(max_length=30)
    rfc = models.CharField(max_length=13)
    correo = models.CharField(max_length=50)
    telefono = models.CharField(max_length=10)
    password = models.CharField(max_length=12)
    rol = models.CharField(max_length=1)
