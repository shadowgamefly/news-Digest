# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, serialize=False, primary_key=True)),
                ('title', models.CharField(default='', max_length=1024)),
                ('author', models.CharField(default='', max_length=1024)),
                ('date', models.DateField(default=datetime.date.today)),
            ],
            options={
                'ordering': ('date', 'title'),
            },
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, serialize=False, primary_key=True)),
                ('content', models.TextField(default='')),
                ('author', models.CharField(default='', max_length=1024)),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, serialize=False, primary_key=True)),
                ('src', models.CharField(default='', max_length=1024)),
                ('caption', models.CharField(default='', max_length=1024)),
                ('position', models.PositiveIntegerField(default=0)),
                ('article', models.ForeignKey(to='api.Article')),
            ],
        ),
        migrations.CreateModel(
            name='Sentence',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, serialize=False, primary_key=True)),
                ('content', models.TextField(default='')),
                ('position', models.PositiveIntegerField(default=0)),
                ('style', models.CharField(choices=[('t', 'title'), ('s', 'subtitle'), ('n', 'normal'), ('o', 'other')], max_length=1)),
                ('article', models.ForeignKey(to='api.Article')),
            ],
        ),
        migrations.AddField(
            model_name='comment',
            name='sentence',
            field=models.ForeignKey(to='api.Sentence'),
        ),
    ]
