from django.shortcuts import render,HttpResponse
from .serializers import TeacherSerializer
from .models import Teacher,Course,CourseCatogary,Student
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions,status,generics
from django.contrib.auth import authenticate
from django.http import JsonResponse
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.decorators import  permission_classes
from django.shortcuts import redirect
from rest_framework.authtoken.models import Token

#Generic class based Views to update the data via rest framework
########################## TEACHER ###########################

#class based Views : this class handle the list type views 
class TecherList(generics.ListCreateAPIView):
    queryset=Teacher.objects.all()
    serializer_class=TeacherSerializer
    #permission_classes=[permissions.IsAuthenticated]
#this class can handle specific type data
class TecherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Teacher.objects.all()
    serializer_class=TeacherSerializer

