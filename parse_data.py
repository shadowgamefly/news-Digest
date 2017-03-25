from lxml import html
from lxml import etree
import requests
import re
import json


sentences = []
articles = []
pk=0
def parse_article(href):
    course_page = requests.get('https://www.nytimes.com/'+href)

    tree = html.fromstring(course_page.content)
    global pk
    pk+=1
    art = {}
    articleName = tree.xpath('//h1[@class="headline"]/text()')[0]
    art["model"]="api.Article"
    art["pk"]=pk
    fields = {}
    fields["title"]=articleName
    fields["author"]="New York Times"
    art["fields"]=fields
    articles.append(art)

    paragraphs = tree.xpath('//p[@class="story-body-text"]')
    for para in paragraphs:
        comment = {}
        comment["model"] = "api.Sentence"
        field["content"] = para.text
        
        comment["fields"] = field

        if (table.xpath('./td[@class="CourseNum"]') ):
            info = table.xpath('./td[@class="CourseNum"]/span/text()')[0].split()
            CourseMn = info[0]
            CourseNum = info[1]
            CourseName = table.xpath('./td[@class="CourseName"]/text()')[0]
            # print(CourseNum)
            # print(CourseName)

        # if (table.xpath('./td[@align="right"]')):
        if (table.xpath('./td/strong')):
            if (table.xpath('./td/strong')[0].text == "Lecture"):
                tab = {}
                tab["model"] = "api.Course"
                fields = {}
                fields["mnemonic"] = CourseMn
                fields["number"] = CourseNum
                fields["title"] = CourseName
                fields["id"] = int(table.xpath('./td')[0].xpath('./a[last()]/text()')[0])
                if (table.xpath('./td/a/strong')):
                    fields["website"] = table.xpath('./td/a/@href')[0]
                fields["section"] = table.xpath('./td')[1].text
                fields["meet_time"] = table.xpath('./td')[6].text
                fields["location"] = table.xpath('./td')[7].text

                instructor = parse_instructor(table.xpath('./td')[5].xpath('./strong/span')[0].text)
                if (instructor != "Staff"):
                    fields["instructor"] = instructor #escape the staff case
                else:
                    continue
                tab["fields"] = fields
                # print(tab)
                tabs.append(tab)



parse_article('2017/03/25/us/politics/trump-health-care-defeat-gop-civil-war.html')
# save data into json
output = open("nytimes.json", "w")
article_data = json.dumps(articles)
output.write(article_data)
output.close()
