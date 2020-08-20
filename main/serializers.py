
from rest_framework import serializers
from main.models import Article, Article_doc, Project, Member

class ArticleSerializer(serializers.ModelSerializer):
	class Meta:
		model = Article
		fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
	class Meta:
		model = Project
		fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
	class Meta:
		model = Member
		fields = '__all__'