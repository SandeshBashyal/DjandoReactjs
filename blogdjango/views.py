from django.shortcuts import render
from django.http import HttpResponse

# def index(request):
#     return render (request, 'index.html')
# Create your views here.
# def homepage(request):
#     return HttpResponse("Hello!")
def homepage(request):
    return render(request, 'index.html')
    