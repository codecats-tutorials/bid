from django.conf.urls import patterns, include, url
from django.contrib import admin
import sys
import re
from bid import settings


urlpatterns = patterns('',
    url(r'^', include('frontend.urls', namespace='frontend')),
    url(r'^products', include('products.urls', namespace='products')),
    url(r'^example', include('example.urls', namespace='example')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
)
