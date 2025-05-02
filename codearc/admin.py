from django.contrib import admin
from .models import Teacher,Course,CourseCatogary,Student
# Register your models here.

admin.site.register(Student)
admin.site.register(Course)
admin.site.register(CourseCatogary)
admin.site.register(Teacher)