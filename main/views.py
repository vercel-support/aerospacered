from django.shortcuts import render

from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import permissions
# Create your views here.
#Articles
from main.serializers import *
from main.models import Article, Article_doc, Project
#Json
from rest_framework.parsers import JSONParser

#Mailing
from django.template import loader
from django.core.mail import EmailMultiAlternatives

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os

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

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def members(request):
    member     = Member.objects.filter()
    serializer  = MemberSerializer(member, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def member(request, user_name):
    member     = Member.objects.filter(member_link = user_name).get()
    serializer  = MemberSerializer(member)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def join_us(request):
    data = JSONParser().parse(request)
    #Mailing
    message = Mail(
        from_email='general@6268up.com',
        to_emails=['vicente.coronelr@gmail.com', 'redecuatorianaear@gmail.com'],
        subject='Red Ecuatoriana Aeroespacial ',
        html_content=loader.render_to_string('mail_html.html', {
        'name': data['name'],
        'college': data['college'],
        'team': data['area'],
        'email': data['mail'],
        'comments': data['description'],
        }))
    sg = SendGridAPIClient(os.getenv('SENDGRID_KEY'))
    response = sg.send(message)
    return Response(data, status=200)

#Error handlers
def handler404(request, exception):
    return render(request, '404.html', {'error_ind':'404'})

def handler500(request):
    return render(request, '404.html', {'error_ind':'505'})
