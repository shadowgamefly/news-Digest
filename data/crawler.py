import os, time, requests, queue, re
from lxml import html


def analyze(url):
    global q
    page = requests.get(url)
    tree = html.fromstring(page.content.decode('utf-8'))

    all_links = tree.xpath('//a/@href')
    regex = re.compile(r'2017/\d{1,2}/\d{1,2}.*\.html$')

    for link in all_links:
        if regex.search(link): q.put(link)


if __name__ == '__main__':
    q = queue.Queue()
    analyze('https://www.nytimes.com/')
    pk = 0

    os.system('mkdir /app/TestArticles/ /app/TestComments/')
    os.system('rm -f /app/TestArticles/*')
    os.system('rm -f /app/TestComments/*')

    while not q.empty():
        time.sleep(30)
        pk += 1
        cmd_args = q.get() + ' ' + str(pk)
        os.system('python /app/parse_data.py ' + cmd_args)
