# todos/urls.py
from django.urls import path
from .views import ListTodo, DetailTodo, CreateTodo, UpdateTodo, DeleteTodo

urlpatterns = [
    path('<int:pk>/', DetailTodo.as_view()),
    path('create/', CreateTodo.as_view()),
    path('update/<int:pk>/', UpdateTodo.as_view()),
    path('delete/<int:pk>/', DeleteTodo.as_view()), 
    path('', ListTodo.as_view()),
]