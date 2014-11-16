from rest_framework.views import APIView

__author__ = 't'


class APIView(APIView):

    def dispatch(self, request, *args, **kwargs):
        return super(APIView, self).dispatch(request, *args, **kwargs)