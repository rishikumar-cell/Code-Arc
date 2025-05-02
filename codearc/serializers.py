from rest_framework import serializers
from . import models
from django.contrib.auth import authenticate



#serialiser will turn your data into json format
#converting teacher model into serializers
class TeacherSerializer(serializers.ModelSerializer):
      
      class Meta:
        model=models.Teacher
        fields=['id', 'full_name', 'email', 'password', 'qualification', 
                 'mobile_number', 'skills', 'status']



       


####### course ##########
'''
class CatogarySerializer(serializers.ModelSerializer):
    class Meta:
       model=models.CourseCatogary
       fields=['id','title','descriptipn']




class CourseSerializer(serializers.ModelSerializer):
    class Meta:

       model=models.Course
       fields=['id','categary','teacher','title','descriptipn','featured_img','technologies']
'''