import json
import logging
from time import sleep
from django.core.exceptions import PermissionDenied
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from code_cats.views import APIView
from products import models
from products.forms.product import ProductAddForm


class Products(APIView):
    def get(self, request, *args, **kwargs):
        action = 'get_{}'.format(request.GET.get('type', 'default'))
        return getattr(self, action)(request, *args, **kwargs)

    def get_default(self, request, *args, **kwargs):
        return JsonResponse({
            'success': True,
            'data': [model_to_dict(product) for product in models.Product.objects.all()],
        })

    def get_form(self, request, *args, **kwargs):
        return render(request, 'products/form.html', {'form': ProductAddForm()})

    def post(self, request, *args, **kwargs):
        form = ProductAddForm(data=request.DATA)
        pk = None
        if form.is_valid():
            pk = form.save().pk
        return JsonResponse({
            'success': form.is_valid(),
            'errors': form.errors,
            'pk': pk,
        })

    def put(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return JsonResponse({
            'success': True,
            'pk': 1,
        })