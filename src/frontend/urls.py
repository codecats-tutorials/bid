from django.conf.urls import patterns, url
import views

__author__ = 't'

urlpatterns = patterns('',
    url(r'^$', views.ServeView.as_view(), name='index')
)
