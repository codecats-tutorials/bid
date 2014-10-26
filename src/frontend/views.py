from django.shortcuts import render
from django.views.generic import View, TemplateView


class ServeView(TemplateView):
    template_name = 'frontend/Index.html'
    def get(self, request, *args, **kwargs):
        return self.render_to_response({})