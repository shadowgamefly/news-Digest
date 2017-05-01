from lxml import html
from lxml import etree
import requests, re, json, random, sys, os

PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))

def write_json(filename, data, pk):
    filename = os.path.join(PROJECT_ROOT, filename)
    output = open(filename, 'w', encoding='utf-8')
    output.write(json.dumps(data))
    output.close()

def write_html(filename, data, pk):
    filename = os.path.join(PROJECT_ROOT, filename)
    output = open(filename, 'w', encoding='utf-8')
    output.write(data.content.decode('utf-8'))
    output.close()

def parse_fullcomment(href):
    try:
        page = requests.get(href, allow_redirects=True, timeout=1)
    except:
        return
    tree = html.fromstring(page.content.decode('utf-8'))

    body = tree.xpath('//div[@class="section-inner sectionLayout--insetColumn"]/*')
    content = ''
    for para in body:
        sentence = para.text_content()
        content += sentence + ' '
    return content

def parse_comment(page, uid, pk, url):
    try:
        resp = requests.get(
            url="https://medium.com/_/api/posts/"+uid+"/responsesStream",
            allow_redirects=True, timeout=1
        )
    except:
        return
    print(uid)
    resp_data = json.loads(resp.content.decode('utf-8')[16:])
    # write_json('../dataset/cache/json/'+str(pk//1000)+'/'+str(pk) +"_"+ str(uid)+'.json', resp_data, pk)

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
                timestamp = value['latestPublishedAt']
            except:
                print("id key error with url: "+url, file=sys.stderr)
                count-=1
                continue

            if comment_id == uid:
                count-=1
                continue

            try:
                username = user_data[creator_id]['username']
            except:
                return None

            if comment_full:
                # print(comment_id)
                for comm_para in comment_paras:
                    comment+=comm_para['text']
            else:
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
                'username': username,
                'timestamp': timestamp,
                'name': str(pk) + '_' + str(count),
                'parent': str(pk)
            }
            # json_f = 'data/comment/' +str(pk//1000)+'/'+ comm_dict['name'] + '.json'
            json_f = '../data/ParentChildTopicModel/MediumComments_Online/'+comm_dict['name']+'.json'
            write_json(json_f, comm_dict, pk)

        return count
        # parse quote
        # value['inResponseToMediaResourceId'] matches value['MediaResource'][key]
        # "mediumQuote" not none
        # quote_count = 0
        # try:
        #     quote_data=resp_data['payload']['references']['Quote']
        #     media_data=resp_data['payload']['references']['MediaResource']
        # except KeyError:
        #     print("quote key error with url: "+url, file=sys.stderr)
        #     return count
        #
        # for mediaResourceId, media in media_data.items():
        #     if 'mediumQuote' in media:
        #         quote_count += 1
        #         media_id = str(mediaResourceId)
        #         comment_id = commment_dict.get(media_id)
        #
        #         quote_id = media['mediumQuote']['quoteId']
        #         quote = quote_data[quote_id]
        #         creator_id = ''
        #         comment = ''
        #         sentence_id = ''
        #         try:
        #             comment_paras = quote['paragraphs']
        #             sentence_id = quote['paragraphs'][0]['name']
        #             creator_id = quote['userId']
        #         except:
        #             print("id key error with url: "+url, file=sys.stderr)
        #
        #         for comm_para in comment_paras:
        #             comment+=comm_para['text']
        #
        #         quote_dict = {
        #             'content': comment, #match sentence piece
        #             'child': '',
        #             'title': '',
        #             'sentenceid': sentence_id,
        #             'commentid': comment_id,
        #             'creatorid': creator_id,
        #             'name': str(pk) + '_' + str(quote_count),
        #             'parent': str(pk)
        #         }
        #         json_f = 'data/truth/' +str(pk//1000)+'/'+ quote_dict['name'] + '.json'
        #         write_json(json_f, quote_dict, pk)

        # return count
    else:
        print("bad request with url: "+url, file=sys.stderr)


def parse_article(page, url, count, pk):
    tree = html.fromstring(page.content.decode('utf-8'))
    print(url)
    try:
        article_name = tree.xpath('//h1/text()')[0]
    except:
        try:
            article_name = tree.xpath('//h1/*/text()')[0]
        except:
            print("bad format cannot parse the title: "+url, file=sys.stderr)
            article_name = ""
            # return

    try:
        author = tree.xpath('//a[@class="link link link--darken link--darker u-baseColor--link"]/text()')[0]
    except:
        try:
            author = tree.xpath('//span[starts-with(@class,"link link--darken link--darker")]/text()')[0]
        except:
            print("bad format cannot parse the author: "+url, file=sys.stderr)
            author = ""

    try:
        tags = tree.xpath('//ul[@class="tags tags--postTags tags--borderless"]')[0]
        timestamp = tree.xpath('//time/text()')[0]
    except:
        print("bad format cannot parse the article: "+url, file=sys.stderr)
        return

    art = {
        'name': str(pk),
        'parent': '',
        'title': article_name,
        'timestamp': timestamp,
        'author': author,
        'sentences': [],
        'content': '',
        'tag': [],
        # 'highlights': [],
        'child': ''
    }

    # try:
    #     highlights = tree.xpath('//span[starts-with(@class,"markup--quote")]/text()')
    #     print(highlights)
    #     for high in highlights:
    #         art['highlights'].append(high)
    # except:
    #     pass

    for tag in tags.xpath('./*/a/text()'):
        art['tag'].append(tag)

    section = tree.xpath('//section/div[@class="section-content"]')
    # print(len(section))

    for sec in section:
        # body = sec.xpath('./div[@class="section-inner sectionLayout--insetColumn"]/*')
        body = sec.xpath('./div[starts-with(@class,"section-inner")]/*')
        art = parse_para(art, body)

    for i in range(1, count+1):
        art['child'] += str(pk) + '_' + str(i)
        if i != count: art['child'] += '\t'

    write_json('../data/ParentChildTopicModel/MediumArticles_Online/'+ str(pk) + '.json', art, pk)

    # write_json('data/article/'+str(pk//1000)+'/'+str(pk) + '.json', art, pk)
    # return len(art['sentences'])

def parse_para(art, body):

    keyList = []
    for para in body:
        sentence = para.text_content()
        try:
            key = para.xpath('@id')[0]
        except:
            # print("no id in tag"+str(pk), file=sys.stderr)
            sub_body = para.xpath('./*')
            art = parse_para(art, sub_body)
            continue
        if sentence == "" or not key: continue
        art['sentences'].append({"sentence" : sentence})
        art['content'] += sentence + ' '
        keyList.append(key)

    write_json('../data/ParentChildTopicModel/keys.json', {"keys" : keyList}, 0)
    return art

def parse_uid(href):
    n = len(href)
    for i in range(n):
        if (href[n-1-i] == '-'):
            return href[n-i:n]

def parse(href, pk, id=None, first=True):
    if not id:
        uid = parse_uid(href)
    else:
        uid = id

    page = requests.get(str(href), allow_redirects=True, timeout=1)
    # except:
    #     return
    # write_html('../dataset/cache/html/'+str(pk//1000)+'/'+str(pk)+"_"+ str(uid) +".html", page, pk)

    # if not first:
    #     # try:
    #     os.system('rm data/*/'+str(pk//1000)+'/'+str(pk)+'_*')
    #     os.system('rm data/article/'+str(pk//1000)+'/'+str(pk)+'.json')
    #     print("again")
    #     # except:
    #     #     print("fail to rm", file=sys.stderr)
    #     #     return

    count = parse_comment(page, uid, pk, href)
    if count:
        parse_article(page, href, count, pk)
    # parse_image(page, href, count, pk)


if __name__ == '__main__':
    if len(sys.argv) == 3:
        parse(sys.argv[1], int(sys.argv[2]))
    else:
        # parse("https://medium.com/tag/artificial-intelligence", 0)
        # parse("https://medium.freecodecamp.com/big-picture-machine-learning-classifying-text-with-neural-networks-and-tensorflow-d94036ac2274", 0)
        parse("https://backchannel.com/i-work-i-swear-a649e0eb697d", 0) #815
