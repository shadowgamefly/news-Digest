from django.conf.urls import include, url
from django.contrib import admin
from . import views
from .views import *

urlpatterns = [url(r'^$', views.index),
               url(r'medium$', views.medium) ]
