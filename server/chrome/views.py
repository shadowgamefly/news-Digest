from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .parser import *
import subprocess
import requests, re, json, random, sys, os, shutil, glob

PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))

def _success(resp):
    return JsonResponse(resp)

def index(request):
    return HttpResponse("Hello World!")

def medium(request):
    dic = request.POST
    url = dic['url']
    output = parse(url, 0)
    rcmd = ["./tmpRun.sh"]
    p = subprocess.call(rcmd, shell = True)
    resp = produce_json()
    shutil.rmtree(PROJECT_ROOT + "/../data/ParentChildTopicModel/MediumComments/")
    shutil.rmtree(PROJECT_ROOT + "/../data/ParentChildTopicModel/MediumArticles/")
    shutil.rmtree(PROJECT_ROOT + "/../data/results")
    os.mkdir(PROJECT_ROOT + "/../data/results")
    os.mkdir(PROJECT_ROOT + "/../data/ParentChildTopicModel/MediumComments/")
    os.mkdir(PROJECT_ROOT + "/../data/ParentChildTopicModel/MediumArticles/")

    return _success(resp)


def produce_json():
    articles={}
    current="start"
    filename = os.listdir(PROJECT_ROOT + "/../data/results")[0]
    f = open(PROJECT_ROOT + '/../data/results/' + filename + '/topChild4Stn.txt', 'r')
    while(current != ""):
        line = f.readline()
        if line == "":
            break
        line = line.split('\t')
        article = line[0]
        comments={}
        for i in range(1, int(line[1]) + 1):
            current = f.readline()
            list = current.split('\t')
            para = list[1].split(':')
            comments[list[0]] = para[0]
        articles[int(article)] = comments

    resp = get_pair(3, articles[0]['3'])
    return resp

def get_pair(sentence ,comment):
    f = open(PROJECT_ROOT + '/../data/ParentChildTopicModel/MediumArticles/0.json', 'r')
    f = json.load(f)
    comment = open(PROJECT_ROOT + '/../data/ParentChildTopicModel/MediumComments/' + comment + '.json' , 'r')
    comment = json.load(comment)
    resp = { f["sentences"][sentence]['sentence'] : comment["content"]}
    print(resp)
    return resp
