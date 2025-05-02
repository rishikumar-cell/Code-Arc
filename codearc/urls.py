from django.urls import path
from . import views

urlpatterns = [
    path('teacher/',views.TecherList.as_view()),
    path('teacher/<int:pk>/', views.TecherDetail.as_view()),
    #path('teacher/', views.teacher_register, name='teacher_register'),
    #path('teacher-login/', views.teacher_login, name='teacher_login'),
]

