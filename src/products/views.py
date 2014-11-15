import logging
from django.http import HttpResponse
from django.shortcuts import render
from code_cats.views import APIView
logger = logging.getLogger(__name__)

class Products(APIView):
    def get(self, request, *args, **kwargs):
        a = 4
        logger.error("this is a debug message!")
        print 'aaaaaaaaaa'
        pass
        return HttpResponse('a')
        #self.response({}, '')

    def post(self, request, *args, **kwargs):
        self.response({}, '')

    def update(self, request, *args, **kwargs):
        self.response({}, '')

    def delete(self, request, *args, **kwargs):
        self.response({}, '')