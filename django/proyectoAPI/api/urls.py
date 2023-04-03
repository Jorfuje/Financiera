from django.urls import path
from .views import ClienteView, EmpleadoView

urlpatterns = [
    path('clientes/', ClienteView.as_view(), name='clientes_list'),
    path('clientes/<int:id>', ClienteView.as_view(), name='clientes_process'),
    path('empleados/', EmpleadoView.as_view(), name='empleados_list'),
    path('empleados/<int:id>', EmpleadoView.as_view(), name='empleados_process')
]