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
    global t
    try:
        page = requests.get(url, allow_redirects=True, timeout=1)
    except:
        return
    tree = html.fromstring(page.content.decode('utf-8'))

    all_links = tree.xpath('//a/@href')
    regex = re.compile(r'https:\/\/[\s\S]+-[\w]{12}\?source=[\s\S]+')
    re_tag = re.compile(r'https:\/\/[\w|.]+\/(tag|topic|tagged)\/[\s\S]+')

    for href in all_links:
        if re_tag.search(href):
            t.append(href)
            continue
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
        f4 = open('cache/variable/topic.pckl', 'rb')
    except FileNotFoundError:
        return None, None, None, None
    q = pickle.load(f1)
    f1.close()
    d = pickle.load(f2)
    f2.close()
    pk = pickle.load(f3)
    f3.close()
    t = pickle.load(f4)
    f4.close()
    return q, t, d, pk


def savevariable(q, t, d, pk):
    f = open('cache/variable/queue.pckl', 'wb')
    pickle.dump(q, f)
    f.close()
    f = open('cache/variable/topic.pckl', 'wb')
    pickle.dump(t, f)
    f.close()
    f = open('cache/variable/dict.pckl', 'wb')
    pickle.dump(d, f)
    f.close()
    f = open('cache/variable/pk.pckl', 'wb')
    pickle.dump(pk, f)
    f.close()

def create_directory(n):
    os.system('mkdir cache/html/'+n+'/')
    os.system('mkdir cache/json/'+n+'/')
    os.system('mkdir data/article/'+n+'/')
    os.system('mkdir data/comment/'+n+'/')
    os.system('mkdir data/truth/'+n+'/')


if __name__ == '__main__':
    logtime = str(time.time())
    os.system('mkdir cache/logs/'+logtime+'/')
    sys.stdout = open('cache/logs/'+logtime+'/std.log', 'w')
    sys.stderr = open('cache/logs/'+logtime+'/error.log', 'w')
    create_directory(str(0))

    l, t, d, pk = loadvaribles()
    q = queue.Queue()
    if not d:
        d = {}
        pk = 1
        t = []
    else:
        for item in l:
            q.put(item)

    t.append('https://medium.com/topic/popular')
    while len(t) > 0:
        analyze(t.pop())

        while not q.empty():
            time.sleep(10)
            uid = q.get()
            analyze(d[uid])
            parse(d[uid],pk,uid)
            pk += 1
            if pk%1000 == 0:
                create_directory(str(pk//1000))

            savevariable(list(q.queue), t, d, pk)
