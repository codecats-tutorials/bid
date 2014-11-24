import json
import logging
from time import sleep
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from code_cats.views import APIView
from products import models

class Products(APIView):
    def get(self, request, *args, **kwargs):
        sleep(3)
        a = 4
        print 'aaaaaaaaaa'
        #return HttpResponse('a')
        action = 'get_{}'.format(request.GET.get('type', 'default'))
        return getattr(self, action)(request, *args, **kwargs)

        #return render(request, 'products/products.ajax.html', {'products': models.Product.objects.all()})
    def get_default(self, request, *args, **kwargs):
        return JsonResponse({
            'success': True,
            'data': [model_to_dict(product) for product in models.Product.objects.all()],
        })
    def get_form(self, request, *args, **kwargs):
        return render(request, 'products/form.html', {})
    def post(self, request, *args, **kwargs):

        # product = models.Product()
        # product.name = request.DATA.get('name', 'Samsung')
        # product.cost = 752.5
        # product.save()
        self.response({}, '')

    def update(self, request, *args, **kwargs):
        self.response({}, '')

    def delete(self, request, *args, **kwargs):
        self.response({}, '')