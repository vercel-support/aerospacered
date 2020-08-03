from django.shortcuts import render

from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import permissions
# Create your views here.
#Articles
from main.serializers import ArticleSerializer, ProjectSerializer
from main.models import Article, Article_doc, Project
#Json
from rest_framework.parsers import JSONParser 

#Mailing
from django.template import loader
from django.core.mail import EmailMultiAlternatives

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def article_dispacher(request):
    article     = Article.objects.filter()
    serializer  = ArticleSerializer(article, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def project_dispacher(request):
    project     = Project.objects.filter()
    serializer  = ProjectSerializer(project, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def join_us(request):
    data = JSONParser().parse(request)
    #Mailing
    subject = data['subject']
    from_email = 'admin@mecanica-espoch.com'
    to_address = ['sss.coronelr@ss.com',]


    html_message = loader.render_to_string('mail_html.html', {
        'name': data['name'],
        'college': data['college'],
        'team': data['area'],
        'email': data['mail'],
        'comments': data['description'],
    })
    msg = EmailMultiAlternatives(subject,html_message, from_email,to_address)
    msg.attach_alternative(html_message, "text/html")
    msg.send()
    return Response(data, status=200)


    
