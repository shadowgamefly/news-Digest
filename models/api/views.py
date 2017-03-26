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
        body[sentence.position - 1] = sentence.content
        style[sentence.position - 1] = sentence.style

    return _success(200, { 'title': obj.title, \
        'author': obj.author, 'content': body, 'style': style })


def get_article_everything(request):
    query = request.GET.dict()
    match = Article.objects.filter(**query)

    if len(match) == 0: return _fail(404, 'article not found')
    if len(match) > 1: return _fail(400, 'multiple articles found')

    obj = match[0]
    body = [''] * len(obj.sentence_set.all())
    style = [''] * len(obj.sentence_set.all())
    comments = [None] * len(obj.sentence_set.all())
    images = [None] * len(obj.sentence_set.all())

    for sentence in obj.sentence_set.all():
        body[sentence.position - 1] = sentence.content
        style[sentence.position - 1] = sentence.style

        comm = Comment.objects.filter(sentence=sentence)
        if len(comm) != 0:
            comments[sentence.position - 1] = {
                'content': comm[0].content,
            }

        imgs = Image.objects.filter(
            article=obj,
            position=sentence.position,
        )
        if len(imgs) != 0:
            images[sentence.position - 1] = {
                'src': imgs[0].src,
                'caption': imgs[0].caption,
            }

    return _success(200, { 'title': obj.title, \
        'author': obj.author, 'content': body, 'style': style, \
        'comments': comments, 'images': images })
