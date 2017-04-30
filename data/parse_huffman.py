from lxml import html
from lxml import etree
import requests, re, json, random


def fuck_unicode(bad):
    good = bad.replace(u'\u2014', '-').replace(u'\u2019', '\'')
    good = good.replace(u'\u201c', '\"').replace(u'\u201d', '\"')
    return good


def write_json(filename, data):
    output = open(filename, 'w', encoding='utf-8')
    output.write(json.dumps(data))
    output.close()


def parse_comment(url):
    # resp = requests.get(
    #     url="https://www.nytimes.com/svc/community/V3/requestHandler",
    #     params={
    #         "commentSequence": "0",
    #         "sort": "newest",
    #         "offset": "0",
    #         "url": url,
    #         "cmd": "GetCommentsNYTPicks",
    #         "method": "get",
    #     },
    #     headers={"Content-Type": "application/json; charset=utf-8"},
    # )
    # comm_data = json.loads(resp.content.decode('utf-8'))
    tree = html.fromstring(page.content.decode('utf-8'))
    
    count = 0
    for comm in comm_data['results']['comments']:
        count += 1
        as_xml = '<p class="special">' + comm['commentBody'] + '</p>'
        c_tree = html.fromstring(as_xml)
        comm_obj = c_tree.xpath('//p[@class="special"]')[0]
        comment = fuck_unicode(comm_obj.text_content())

        comm_dict = {
            'content': comment,
            'child': '',
            'title': '',
            'name': str(pk) + '_' + str(count),
            'parent': str(pk)
        }
        write_json(comm_dict['name'] + '.json', comm_dict)

    return count


def parse_article(url, count):
    page = requests.get(url)
    tree = html.fromstring(page.content.decode('utf-8'))

    article_name = tree.xpath('//h1[@class="headline"]/text()')[0]
    art = {
        'name': str(pk),
        'parent': '',
        'title': article_name,
        'sentences': [],
        'content': '',
        'child': ''
    }
    body = tree.xpath('//p[@class="story-body-text story-content"]')

    for para in body:
        sentence = fuck_unicode(para.text_content())
        art['sentences'].append({'sentence': sentence})
        art['content'] += sentence + ' '

    for i in range(1, count+1):
        art['child'] += str(pk) + '_' + str(i)
        if i != count: art['child'] += '\t'

    write_json(str(pk) + '.json', art)
    return len(art['sentences'])


def parse_image(url, count):
    page = requests.get(url)
    tree = html.fromstring(page.content.decode('utf-8'))

    imgs = tree.xpath('//img[@class="media-viewer-candidate"]')
    imgs_json = []

    for img in imgs:
        caption = img.get('data-mediaviewer-caption')
        caption = caption.replace('&rsquo;', '\'')
        fields = {
            'src': img.get('src'),
            'caption': caption,
            'article': pk,
            'position': random.randint(0, count-1),
        }
        imgs_json.append({'model': 'api.Image', 'fields': fields})

    write_json('img_' + str(pk) + '.json', imgs_json)


def parse(href):
    global pk
    pk += 1
    count = parse_comment('http://www.huffingtonpost.com/' + href)
    count = parse_article('http://www.huffingtonpost.com/' + href, count)
    parse_image('http://www.huffingtonpost.com/' + href, count)


if __name__ == '__main__':
    pk = 0
    parse('2017/03/25/us/politics/trump-health-care-defeat-gop-civil-war.html')
