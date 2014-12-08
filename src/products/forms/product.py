from django import forms
from products.models import Product

__author__ = 't'

class ProductAddForm(forms.ModelForm):
    class Meta:
        model=Product

    def clean(self):
        raise forms.ValidationError('no words')