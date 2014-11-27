from django.conf.urls import patterns, url, include
from django.views.generic import TemplateView
from bid import settings
import views

__author__ = 't'

urlpatterns = patterns('',
    url(r'^/index.html$', TemplateView.as_view(template_name="products/index.html"), name='index'),
    url(r'^/product$', views.Products.as_view(), name='products'),
)

if True:
    urlpatterns = patterns('',
        url(r'^site_media/(?P<path>.*)$', 'django.views.static.serve',
            {'document_root': settings.MEDIA_ROOT, 'show_indexes': True}),
        url(r'', include('django.contrib.staticfiles.urls')),
    ) + urlpatterns