# Generated by Django 4.1.1 on 2022-11-29 22:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventos', '0002_evento_tags_comentario'),
    ]

    operations = [
        migrations.AddField(
            model_name='evento',
            name='texto',
            field=models.TextField(blank=True, max_length=500),
        ),
    ]