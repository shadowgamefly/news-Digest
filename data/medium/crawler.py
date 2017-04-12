import sys, os, time, requests, queue, re
import pickle
from lxml import html
from parser import parse


def concat(href):
    n = len(href)
    for i in range(n):
        if (href[n-1-i] == '?'):
            href = href[0:n-i-1]
            m = len(href)
            for j in range(m):
                if (href[m-1-j] == '-'):
                    return href, href[m-j: m]
    return None, None

def analyze(url):
    global q
    global s
    page = requests.get(url)
    tree = html.fromstring(page.content.decode('utf-8'))

    all_links = tree.xpath('//a/@href')
    regex = re.compile(r'-\w+\?source+=')

    for href in all_links:
        if regex.search(href):
            link, uid = concat(href)
            if not link or not uid: continue
            if uid in d: continue
            else:
                d[uid] = link
                q.put(uid)
        else:
            continue

def loadvaribles():
    try:
        f1 = open('cache/variable/queue.pckl', 'rb')
        f2 = open('cache/variable/dict.pckl', 'rb')
        f3 = open('cache/variable/pk.pckl', 'rb')
    except FileNotFoundError:
        return None, None, None
    q = pickle.load(f1)
    f1.close()
    d = pickle.load(f2)
    f2.close()
    pk = pickle.load(f3)
    f3.close()
    return q, d, pk


def savevariable(q, d, pk):
    f = open('cache/variable/queue.pckl', 'wb')
    pickle.dump(q, f)
    f.close()
    f = open('cache/variable/dict.pckl', 'wb')
    pickle.dump(d, f)
    f.close()
    f = open('cache/variable/pk.pckl', 'wb')
    pickle.dump(pk, f)
    f.close()

if __name__ == '__main__':
    logtime = str(time.time())
    os.system('mkdir cache/logs/'+logtime+'/')
    sys.stdout = open('cache/logs/'+logtime+'/std.log', 'w')
    sys.stderr = open('cache/logs/'+logtime+'/error.log', 'w')
    l, d, pk = loadvaribles()
    q = queue.Queue()
    if not d:
        d = {}
        pk = 1
    else:
        for item in l:
            q.put(item)


    analyze('https://medium.com/topic/popular')


    while not q.empty():
        time.sleep(10)
        uid = q.get()
        analyze(d[uid])
        parse(d[uid],pk,uid)
        pk += 1
        savevariable(list(q.queue), d, pk)
