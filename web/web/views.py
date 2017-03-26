from django.shortcuts import render
import urllib.request, json
from django.http import HttpResponse, JsonResponse


def _get_request(url):
    req = urllib.request.Request(url)
    resp_json = urllib.request.urlopen(req).read().decode('utf-8')
    return json.loads(resp_json)

def _success(stat, data):
    return JsonResponse({ 'stat': stat, **data })

def index(request):
    articleList = []
    for i in range(1, 6):
        articleList.append(_get_request('http://models-api:8000/api/article?id='+str(i)))
    ret = []

    for article in articleList:
        news = {}
        news["title"] = article["title"]
        news["author"] = article["author"]
        intro = article["content"][0]
        if len(intro) > 60 :
            intro = intro[:60] + '...'
        news["intro"] = intro
        ret.append(news)

    return render(request, 'articlePage.html', ret)

def docs(request, doc_id):
    link = "http://models-api:8000/api/article?id=" + str(doc_id)
    d = _get_request(link)
    ret = {'title': d['title'], 'author': d['author'], 'body': []}

    for i in range(len(d['content'])):
        ret['body'].append({'content': d['content'][i], \
            'style': d['style'][i], 'pos': i+1})

    return render(request, 'articlePage.html', ret)
