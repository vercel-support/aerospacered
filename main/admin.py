from django.contrib import admin
from main.models import Article, Article_doc, Project, Member
# Register your models here.



#General post files system
class article_inline(admin.StackedInline):
    model = Article_doc
    extra = 1



class article_admin(admin.ModelAdmin):
    inlines = [article_inline]

    def save_model(self, request, obj, form, change):
        obj.save()

        for afile in request.FILES.getlist('file_multiple'):
            obj.docs.create(file_doc=afile)



#Posts
admin.site.register(Article, article_admin)
admin.site.register(Project)
admin.site.register(Member)