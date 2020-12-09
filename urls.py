from django.urls import path
from . import views
from django.contrib.auth import views as django_views

app_name = 'core'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('privacy_policy/', views.privacy, name='privacy'),
]