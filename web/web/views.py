from django.shortcuts import render
import urllib.request, json
from django.http import HttpResponse, JsonResponse


def _get_request(url):
    req = urllib.request.Request(url)
    resp_json = urllib.request.urlopen(req).read().decode('utf-8')
    return json.loads(resp_json)


def _success(stat, data):
    return JsonResponse({ 'stat': stat, **data })\


def index(request):
    ret = {}
    top = []
    for i in range(1, 6):
        article = _get_request('http://models-api:8000/api/article?id='+str(i))
        news = {}
        news["title"] = article["title"]
        news["author"] = article["author"]
        news["link"] = "/doc/"+str(i)
        intro = article["content"][0]
        news["id"] = i%5
        for j in article['images']:
            if j:
                news['image']=j["src"]
                break

        if len(intro) > 60 :
            intro = intro[:60] + '...'
        news["intro"] = intro
        top.append(news)

    ret["news"] = top

    return render(request, 'homePage.html', ret)


def docs(request, doc_id):
    link = "http://models-api:8000/api/article?id=" + str(doc_id)
    next_id = int(doc_id) + 1
    d = _get_request(link)
    if next_id > 5:
        next_link = None
        next_title = None
    else :
        nextlink = "http://models-api:8000/api/article?id=" + str(next_id)
        n = _get_request(nextlink)
        next_title = n['title']
        next_link = str(next_id)
    ret = {'title': d['title'], 'author': d['author'], 'next_link': next_link,  'next_title': next_title,  'body': []}

    for i in range(len(d['content'])):
        if d['comments'][i]:
            short_str = d['comments'][i]['content']
            pos = short_str.find(' ', 140)
            if pos > 0: short_str = short_str[:pos] + '...'
            short_dict = {'content': short_str}
        else:
            short_dict = None
            
        ret['body'].append({
            'content': d['content'][i],
            'style': d['style'][i],
            'comments': d['comments'][i],
            'comments_short': short_dict,
            'images': d['images'][i],
            'pos': i+1,
        })

    return render(request, 'articlePage.html', ret)
