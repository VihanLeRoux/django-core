from django.shortcuts import render
from django.views import generic
from blog.models import Post
from django.utils import timezone
from .forms import *

from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

class IndexView(generic.ListView):
    template_name = 'core/index.html'
    context_object_name = 'post_list'
    
    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        form = ContactForm()
        context.update({
            'form': form,
        })
        return context

    def get_queryset(self):
        return Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')[:3]
        
    def post(self, request, *args, **kwargs):
        form = ContactForm(request.POST)
        if form.is_valid():
            post = form.save()
        return render(request, 'core/index.html', {
            'form': form,
            'post_list': self.get_queryset()
        })

def privacy(request):
    return render(request, 'core/privacy.html')