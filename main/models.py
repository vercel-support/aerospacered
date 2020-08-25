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
STATES_EN = (
    ('Planning', "Planning"),
    ('Design', "Design"),
    ('Development', "Development"),
    ('Building', "Building"),
    ('Evaluation', "Evaluation"),
    ('Optimization', "Optimization"),
)

class Project(models.Model):
    index       =   models.AutoField(primary_key=True, editable=False)
    titleES       =   models.CharField(blank=False, max_length=150,editable=True)
    titleEN       =   models.CharField(blank=False, max_length=150,editable=True)
    bodyES        =   models.TextField(blank=False, null=False, max_length=5000,editable=True)
    bodyEN        =   models.TextField(blank=False, null=False, max_length=5000,editable=True)
    start_date  =   models.DateTimeField()
    img         =   models.ImageField(upload_to='projects/', blank=True, null=True)
    coordinator =   models.CharField(blank=False, max_length=150,editable=True)
    stateES       =   models.CharField(blank=False, max_length=50, choices=STATES, default="Planificación")
    stateEN       =   models.CharField(blank=False, max_length=50, choices=STATES_EN, default="Planning")
    partners    =   models.TextField(blank=True, max_length=1000, editable=True)

    class Meta:
        ordering: ['-index']
        app_label = 'main'
    def __str__(self):
        return '%s Project: %s'%(self.index, self.titleES)





LEGIONS = (
    ('2019', "2019"),
    ('2020', "2020"),
    ('2021', "2021"),
    ('2022', "2022"),
    ('2023', "2023"),
)

class Member(models.Model):
    index             =   models.AutoField(primary_key=True, editable=False)
    name              =   models.CharField(blank=False, max_length=150,editable=True)
    rolES               =   models.CharField(blank=False, max_length=150,editable=True)
    rolEN               =   models.CharField(blank=False, max_length=150,editable=True)
    college           =   models.CharField(blank=False, max_length=150,editable=True)
    description       =   models.TextField(blank=False, null=False, max_length=5000,editable=True)
    mail              =   models.EmailField(blank=False, max_length=300)
    member_link       =   models.CharField(blank=False, max_length=150,editable=True)
    random_fact       =   models.CharField(blank=False, max_length=500, editable=True)
    twitter_link      =   models.CharField(blank=False, max_length=150,editable=True)
    research_link     =   models.CharField(blank=False, max_length=150,editable=True)
    banco_ideas_link  =   models.CharField(blank=False, max_length=150,editable=True)
    img               =   models.ImageField(upload_to='members/', blank=False, null=True)
    legion            =   models.CharField(blank=False, max_length=50, choices=LEGIONS, default="2020")

    class Meta:
        ordering: ['-index']
        app_label = 'main'
    def __str__(self):
        return '%s Member: %s'%(self.index, self.name)