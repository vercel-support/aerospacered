from django.urls import path, include
from django.conf.urls import url
from main.views import *

urlpatterns = [ 



    # !REST
    
    #TODO Profile overview
        #! Data
            # Article
    path('api/articles/', article_dispacher, name="article_dispacher"),
    path('api/projects/', project_dispacher, name="ProjectSerializer"),
    path('api/join_us/', join_us, name="join_us"),
    path('api/members/', members, name="members"),
    path('api/member/<str:user_name>', member, name="member"), #! NEED TO PARSE THE USER'S USERNAME
    
]