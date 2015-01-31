import json
import time
from bid.settings import STATIC_URL
from django.http import StreamingHttpResponse, HttpResponse
from django.shortcuts import render
from django.views.generic import View, TemplateView
import gridfs
from pymongo import MongoClient


class ServeView(TemplateView):
    template_name = 'frontend/index.html'
    def get(self, request, *args, **kwargs):
        #GridFS
        # db = MongoClient().gridfs_example
        #storing example
        #db.example.insert({'name': 'test'})

        #gridfs example
        # fs = gridfs.GridFS(db)
        # fs.put('hello world')
        config = json.dumps({
            'STATIC_URL': STATIC_URL
        })
        return self.render_to_response({'CONFIG': config})

class HelperTemplate(TemplateView):
    template_name = 'frontend/helper/template/index.html'
