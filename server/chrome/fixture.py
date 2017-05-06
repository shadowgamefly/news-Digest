import os
articles={}
current="start"
filename = os.listdir("../data/results")[1]
f = open('../data/results/' + filename + '/topChild4Stn.txt', 'r')
while(current != ""):
    line = f.readline()
    if line == "" :
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

print(articles)

#
# CommentList = []
# for art in articles.keys():
#     for com in articles[art].keys():
#         comment = copy.deepcopy(commentModel)
#         link = "TestComments/"+ com + ".json"
#         with open(link) as json_data:
#             d = json.load(json_data)
#             comment['fields']["content"] = d['content']
#             comment['fields']["sentence"] = art * 100 + int(articles[art][com])
#             CommentList.append(comment)
# #         comment["content"] =
#
# with open('comment.json', 'w') as outfile:
#     json.dump(CommentList, outfile)
#
#
# SentenceList = []
# ArticleList = []
# for i in range(1, 98):
#     link = "TestArticles/" + str(i) + ".json"
#     try:
#         with open(link) as json_data:
#             d = json.load(json_data)
#             article = copy.deepcopy(articleModel)
#             article["pk"] = int(d["name"])
#             article["fields"]["title"] = d["title"]
#             ArticleList.append(article)
#
#             sentL = d['sentences']
#             for j in range(len(sentL)):
#                 pk = j + 1
#                 content = sentL[j]
#                 sentence = copy.deepcopy(sentenceModel)
#                 sentence["pk"] = i*100 + pk
#                 sentence['fields']['content'] = content['sentence']
#                 sentence['fields']['position'] = pk
#                 sentence['fields']['article'] = i
#                 SentenceList.append(sentence)
#     except FileNotFoundError:
#         continue
