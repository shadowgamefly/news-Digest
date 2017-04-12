from lxml import html
from lxml import etree
import requests, re, json, random, sys

def write_json(filename, data, pk):
    output = open(filename, 'w', encoding='utf-8')
    output.write(json.dumps(data))
    output.close()

def write_html(filename, data, pk):
    output = open(filename, 'w', encoding='utf-8')
    output.write(data.content.decode('utf-8'))
    output.close()

def parse_comment(page, uid, pk):
    resp = requests.get(
        url="https://medium.com/_/api/posts/"+uid+"/responsesStream",
        params={},
        headers={},
    )
    print(uid)
    resp_data = json.loads(resp.content.decode('utf-8')[16:])
    write_json('cache/json/'+str(pk) +"_"+ str(uid)+'.json', resp_data, pk)


    if (resp_data['success']):
        try:
            comm_data=resp_data['payload']['references']['Post']
        except KeyError:
            return None
        count = 0
        for key, value in comm_data.items():
            count += 1
            comment = ""
            # value['inResponseToMediaResourceId'] matches value['MediaResource'][key]
            # "mediumQuote" not none
            for comm_para in value['previewContent']['bodyModel']['paragraphs']:
                comment+=comm_para['text']

            comm_dict = {
                'content': comment,
                'child': '',
                'title': '',
                'name': str(pk) + '_' + str(count),
                'parent': str(pk)
            }
            json_f = 'data/comment/' + comm_dict['name'] + '.json'
            write_json(json_f, comm_dict, pk)

        return count
    else:
        print("bad request")


def parse_article(page, url, count, pk):
    tree = html.fromstring(page.content.decode('utf-8'))
    print(url)
    article_name = tree.xpath('//h1/text()')[0]
    art = {
        'name': str(pk),
        'parent': '',
        'title': article_name,
        'sentences': [],
        'content': '',
        'child': ''
    }

    body = tree.xpath('//div[@class="section-inner sectionLayout--insetColumn"]/p')

    for para in body:
        sentence = para.text_content()
        art['sentences'].append({'sentence': sentence})
        art['content'] += sentence + ' '

    for i in range(1, count+1):
        art['child'] += str(pk) + '_' + str(i)
        if i != count: art['child'] += '\t'

    write_json('data/article/'+str(pk) + '.json', art, pk)
    # return len(art['sentences'])


# def parse_image(page, url, count, pk):
#     page = requests.get(url)
#     tree = html.fromstring(page.content.decode('utf-8'))
#
#     imgs = tree.xpath('//img[@class="media-viewer-candidate"]')
#     imgs_json = []
#
#     for img in imgs:
#         caption = img.get('data-mediaviewer-caption')
#         caption = caption.replace('&rsquo;', '\'')
#         fields = {
#             'src': img.get('src'),
#             'caption': caption,
#             'article': pk,
#             'position': random.randint(0, count-1),
#         }
#         imgs_json.append({'model': 'api.Image', 'fields': fields})
#
#     write_json('/app/img_' + str(pk) + '.json', imgs_json, pk)

def parse_uid(href):
    n = len(href)
    for i in range(n):
        if (href[n-1-i] == '-'):
            return href[n-i:n]



def parse(href, pk, id=None):
    if not id:
        uid = parse_uid(href)
    else:
        uid = id
    page = requests.get(href)
    write_html('cache/html/' + str(pk)+"_"+ str(uid) +".html", page, pk)
    count = parse_comment(page, uid, pk)
    if count: parse_article(page, href, count, pk)
    # parse_image(page, href, count, pk)


if __name__ == '__main__':
    if len(sys.argv) == 3:
        parse(sys.argv[1], int(sys.argv[2]))
    else:
        parse("https://hackernoon.com/building-a-gas-pump-scanner-with-opencv-python-ios-116fe6c9ae8b", 0)
