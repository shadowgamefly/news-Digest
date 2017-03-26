from django.shortcuts import render
import urllib.request, json


def _get_request(url):
    req = urllib.request.Request(url)
    resp_json = urllib.request.urlopen(req).read().decode('utf-8')
    return json.loads(resp_json)


def index(request):
    d = _get_request('http://models-api:8000/api/article?id=1')
    ret = {'title': d['title'], 'author': d['author'], 'body': []}

    for i in range(len(d['content'])):
        ret['body'].append({
            'content': d['content'][i],
            'style': d['style'][i],
            'comments': d['comments'][i],
            'images': d['images'][i],
            'pos': i+1,
        })

    return render(request, 'articlePage.html', ret)


def docs(request, doc_id):
    link = "http://models-api:8000/api/article?id=" + str(doc_id)
    d = _get_request(link)
    ret = {'title': d['title'], 'author': d['author'], 'body': []}

    for i in range(len(d['content'])):
        ret['body'].append({'content': d['content'][i], \
            'style': d['style'][i], 'pos': i+1})

    return render(request, 'articlePage.html', ret)
