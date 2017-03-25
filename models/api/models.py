from django.db import models
import datetime

class Article(models.Model):
    title = models.CharField(max_length=1024, default='')
    author = models.CharField(max_length=1024, default='')
    date = models.DateField(_('Date'), default=datetime.date.today)

    def __str__(self): return 'Article: ' + title

    class Meta: ordering = (date, title, )


class Sentence(models.Model):
    content = models.TextField(default='')
    article = models.ForeignKey('Article', on_delete=models.CASCADE)
    position = models.PositiveIntegerField(default=0)
    style = models.CharField(max_length=1, choices=(
        ('t', 'title'),
        ('s', 'subtitle'),
        ('n', 'normal'),
        ('o', 'other'),
    ))


class Comment(models.Model):
    content = models.TextField(default='')
    author = models.CharField(max_length=1024, default='')
    sentence = models.ForeignKey('Sentence', on_delete=models.CASCADE)


class Image(models.Model):
    src = models.CharField(max_length=1024, default='')
    caption = models.CharField(max_length=1024, default='')
    article = models.ForeignKey('Article', on_delete=models.CASCADE)
    position = models.PositiveIntegerField(default=0)
