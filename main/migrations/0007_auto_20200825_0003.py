# Generated by Django 3.0.8 on 2020-08-25 00:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_auto_20200825_0002'),
    ]

    operations = [
        migrations.RenameField(
            model_name='member',
            old_name='rol',
            new_name='rolEN',
        ),
        migrations.AddField(
            model_name='member',
            name='rolES',
            field=models.CharField(default='update this', max_length=150),
            preserve_default=False,
        ),
    ]