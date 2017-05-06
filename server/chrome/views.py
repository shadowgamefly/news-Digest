from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .parser import *
import subprocess
import requests, re, json, random, sys, os, shutil, glob

PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))

def _success(resp):
    return JsonResponse(resp, safe=False)

def index(request):
    return HttpResponse("Hello World!")

def medium(request):
    dic = request.POST
    url = dic['url']
    output = parse(url, 0)
    if output != None :
        rcmd = ["./tmpRun.sh"]
        p = subprocess.call(rcmd, shell = True)
        resp = produce_json()
    else :
        return HttpResponse("")
    shutil.rmtree(PROJECT_ROOT + "/../data/ParentChildTopicModel/MediumComments_Online/")
    shutil.rmtree(PROJECT_ROOT + "/../data/ParentChildTopicModel/MediumArticles_Online/")
    shutil.rmtree(PROJECT_ROOT + "/../data/results")
    os.mkdir(PROJECT_ROOT + "/../data/results")
    os.mkdir(PROJECT_ROOT + "/../data/ParentChildTopicModel/MediumComments_Online/")
    os.mkdir(PROJECT_ROOT + "/../data/ParentChildTopicModel/MediumArticles_Online/")
    return _success(resp)


def produce_json():
    filename = os.listdir(PROJECT_ROOT + "/../data/results")[0]
    f = open(PROJECT_ROOT + '/../data/results/' + filename + '/topChild4Stn.txt', 'r')
    comments = open(PROJECT_ROOT + '/../data/results/' + filename + '/topChild4Parent.txt', 'r')
    line = comments.readline()
    num_comments = len(line.split('\t')) - 2
    line = f.readline()
    num_sentence = int(line.split('\t')[1])
    score = {}
    assignment = {}
    for i in range(1, 100):
        key = "0_" + str(i)
        score[key] = -25
        assignment[key] = -1
    for i in range(17):
        line = f.readline()
        line = line.split('\t')
        print(line)
        sent = int(line[0])
        for i in range(1,7):
            item = line[i].split(':')
            score[item[0]] = max(float(item[1]), float(score[item[0]]))
            if score[item[0]] == float(item[1]) :
                assignment[item[0]] = sent
    keylist = list(assignment.keys())

    for key in keylist:
        if assignment[key] == -1:
            assignment.pop(key, None)
    retval = []

    for key in assignment.keys():
        retval.append(get_pair(assignment[key], key))

    newret = []

    exist = False
    for item in retval:
        key = list(item.keys())[0]
        for d in newret:
            if key in d.keys():
                d[key].append(item[key])
                exist = True
                break
        if not exist:
            newret.append({key : [item[key]]})
        exist = False
    return newret

def get_pair(sentence ,comment):
    f = open(PROJECT_ROOT + '/../data/ParentChildTopicModel/keys.json', 'r')
    f = json.load(f)
    comment = open(PROJECT_ROOT + '/../data/ParentChildTopicModel/MediumComments_Online/' + comment + '.json' , 'r')
    comment = json.load(comment)
    resp = { f["keys"][sentence-1] : comment["content"]}
    return resp
