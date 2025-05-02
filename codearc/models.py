from django.db import models

# Create your models here.

#Teacher model
class Teacher(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=100)
    mobile_number = models.CharField(max_length=20)
    skills = models.CharField(max_length=500)
    status = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Teachers"

    def __str__(self):
        return self.full_name



    
    class Meta:
        verbose_name_plural='1. Teachers'


#Course Catogary Model
class CourseCatogary(models.Model):
    title=models.CharField(max_length=100)
    descriptipn=models.TextField()

    

    class Meta:
        verbose_name_plural='2. Course Catogaries'




#Course Model
class Course(models.Model):
    categary=models.ForeignKey(CourseCatogary, on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher, on_delete=models.CASCADE)
    title=models.CharField(max_length=100)
    descriptipn=models.TextField()
    featured_img=models.ImageField(upload_to='course_images/',null=True)
    technologies=models.CharField(max_length=500,default=None)



    def __str__(self):
        return self.title

    
    class Meta:
        verbose_name_plural='3. Courses'




#Student model
class Student(models.Model):
    full_name= models.CharField(max_length=200)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    qualification=models.CharField(max_length=100)
    mobile_number=models.CharField(max_length=10)
    address=models.TextField()
    intrested_catogary=models.TextField()


    def __str__(self):
        return self.full_name

    
    class Meta:
        verbose_name_plural='4. Students'
