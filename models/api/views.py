from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from api.models import *


def index(request):
    return HttpResponse('success!\n')

def _success(stat, data):
    return JsonResponse({ 'stat': stat, **data })

def _fail(stat, error_msg):
    return JsonResponse({ 'stat': stat, 'error': error_msg })


def get_article_body(request):
    query = request.GET.dict()
    match = Article.objects.filter(**query)

    if len(match) == 0: return _fail(404, 'article not found')
    if len(match) > 1: return _fail(400, 'multiple articles found')

    obj = match[0]
    body = [''] * len(obj.sentence_set.all())
    style = [''] * len(obj.sentence_set.all())

    for sentence in obj.sentence_set.all():
        body[sentence.position] = sentence.content
        style[sentence.position] = sentence.style

    return _success(200, { 'title': obj.title, \
        'author': obj.author, 'content': body, 'style': style })
