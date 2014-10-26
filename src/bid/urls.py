from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^', include('frontend.urls', namespace='frontend')),
    url(r'^admin/', include(admin.site.urls)),
)
