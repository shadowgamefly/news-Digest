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

def parse_fullcomment(href):
    page = requests.get(href)
    tree = html.fromstring(page.content.decode('utf-8'))

    body = tree.xpath('//div[@class="section-inner sectionLayout--insetColumn"]/*')
    content = ''
    for para in body:
        sentence = para.text_content()
        content += sentence + ' '
    return content

def parse_comment(page, uid, pk, url):
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
            user_data=resp_data['payload']['references']['User']
        except:
            print("comment key error with url: "+url, file=sys.stderr)
            return None

        count = 0
        commment_dict = {}
        # parse all comments
        for key, value in comm_data.items():
            count += 1

            comment_id = ''
            creator_id = ''
            comment = ''
            media_id = ''
            try:
                comment_full = value['previewContent']['isFullContent']
                comment_paras = value['previewContent']['bodyModel']['paragraphs']
                comment_id = value['id']
                creator_id = value['creatorId']
                media_id = value['inResponseToMediaResourceId']
            except:
                print("id key error with url: "+url, file=sys.stderr)
                count-=1
                continue

            if comment_id == uid:
                count-=1
                continue

            if comment_full:
                # print(comment_id)
                for comm_para in comment_paras:
                    comment+=comm_para['text']
            else:
                username = user_data[creator_id]['username']
                unique_slug = value['uniqueSlug']
                comment = parse_fullcomment('https://medium.com/@'+username+'/'+unique_slug)

            if media_id != '': #assume one media_id only to one sentences
                commment_dict[media_id] = comment_id

            comm_dict = {
                'content': comment,
                'child': '',
                'title': '',
                'id': comment_id,
                'creatorid': creator_id,
                'name': str(pk) + '_' + str(count),
                'parent': str(pk)
            }
            json_f = 'data/comment/' + comm_dict['name'] + '.json'
            write_json(json_f, comm_dict, pk)

        # parse quote
        # value['inResponseToMediaResourceId'] matches value['MediaResource'][key]
        # "mediumQuote" not none
        quote_count = 0
        try:
            quote_data=resp_data['payload']['references']['Quote']
            media_data=resp_data['payload']['references']['MediaResource']
        except KeyError:
            print("quote key error with url: "+url, file=sys.stderr)
            return count

        for mediaResourceId, media in media_data.items():
            if 'mediumQuote' in media:
                quote_count += 1
                media_id = str(mediaResourceId)
                comment_id = commment_dict.get(media_id)

                quote_id = media['mediumQuote']['quoteId']
                quote = quote_data[quote_id]
                creator_id = ''
                comment = ''
                sentence_id = ''
                try:
                    comment_paras = quote['paragraphs']
                    sentence_id = quote['paragraphs'][0]['name']
                    creator_id = quote['userId']
                except:
                    print("id key error with url: "+url, file=sys.stderr)

                for comm_para in comment_paras:
                    comment+=comm_para['text']

                quote_dict = {
                    'content': comment, #match sentence piece
                    'child': '',
                    'title': '',
                    'sentenceid': sentence_id,
                    'commentid': comment_id,
                    'creatorid': creator_id,
                    'name': str(pk) + '_' + str(quote_count),
                    'parent': str(pk)
                }
                json_f = 'data/truth/' + quote_dict['name'] + '.json'
                write_json(json_f, quote_dict, pk)

        return count
    else:
        print("bad request with url: "+url, file=sys.stderr)


def parse_article(page, url, count, pk):
    tree = html.fromstring(page.content.decode('utf-8'))
    print(url)
    try:
        article_name = tree.xpath('//h1/text()')[0]
    except:
        print(url)
        return
    art = {
        'name': str(pk),
        'parent': '',
        'title': article_name,
        'sentences': [],
        'content': '',
        'child': ''
    }
    section = tree.xpath('//section/div[@class="section-content"]')
    # print(len(section))

    for sec in section:
        body = sec.xpath('./div[@class="section-inner sectionLayout--insetColumn"]/*')

        for para in body:
            sentence = para.text_content()
            try:
                key = para.xpath('@id')[0]
            except:
                # print("no id in tag"+str(pk), file=sys.stderr)
                continue
            if sentence == "" or not key: continue
            art['sentences'].append({key : sentence})
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
    count = parse_comment(page, uid, pk, href)
    if count: parse_article(page, href, count, pk)
    # parse_image(page, href, count, pk)


if __name__ == '__main__':
    if len(sys.argv) == 3:
        parse(sys.argv[1], int(sys.argv[2]))
    else:
        # parse("https://medium.com/tag/artificial-intelligence", 0)
        # parse("https://medium.freecodecamp.com/big-picture-machine-learning-classifying-text-with-neural-networks-and-tensorflow-d94036ac2274", 0)
        parse("https://civicskunk.works/the-united-story-isnt-about-customer-service-it-s-about-class-warfare-52e47b455f2e", 0)
