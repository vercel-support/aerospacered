from django.db import models
from main.validators import validate_file_extension

# Create your models here.
class Article(models.Model):
    index     =   models.AutoField(primary_key=True, editable=False)
    title     =   models.CharField(blank=False, max_length=150,editable=True)
    body      =   models.TextField(blank=False, null=False, max_length=5000,editable=True)
    date      =   models.DateTimeField(auto_now_add=True)
    img       =   models.ImageField(upload_to='articles/', blank=True, null=True)
    
    class Meta:
        ordering: ['-date']
        app_label = 'main'
    def __str__(self):
        return '%s Title: %s'%(self.index, self.title)


class Article_doc(models.Model):
    index       =   models.ForeignKey(Article, on_delete=models.SET_DEFAULT, default=1,related_name='article_doc_id')
    file_name   =   models.CharField(blank=False, max_length=150,editable=True)
    file_doc    =   models.FileField(upload_to='news_documents/%Y/%m/', blank=True, null=True, validators=[validate_file_extension] )

STATES = (
    ('Planificación', "Planificación"),
    ('Diseño', "Diseño"),
    ('Desarrollo', "Desarrollo"),
    ('Construcción', "Construcción"),
    ('Evaluatión', "Evaluación"),
    ('Optimización', "Optimización"),
)

class Project(models.Model):
    index       =   models.AutoField(primary_key=True, editable=False)
    title       =   models.CharField(blank=False, max_length=150,editable=True)
    body        =   models.TextField(blank=False, null=False, max_length=5000,editable=True)
    start_date  =   models.DateTimeField()
    img         =   models.ImageField(upload_to='projects/', blank=True, null=True)
    coordinator =   models.CharField(blank=False, max_length=150,editable=True)
    state       =   models.CharField(blank=False, max_length=50, choices=STATES, default="Planificación")
    partners    =   models.TextField(blank=True, max_length=1000, editable=True)

    class Meta:
        ordering: ['-index']
        app_label = 'main'
    def __str__(self):
        return '%s Project: %s'%(self.index, self.title)