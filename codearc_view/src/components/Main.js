//Main
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import CourseDetail from './CourseDetail';
import {Routes as Switch,Route} from 'react-router-dom';


//List pages
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import Courses from './Courses';
import CatogaryCourses from './CatogaryCourses';

//User
import Register from './User/Register';
import Login from './User/Login';
import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavoriteCourses';
import RecommandedCourses from './User/RecommandedCourses';
import ProfileSetting from './User/ProfileSetting';
import PasswordReset from './User/PasswordReset';
import UserDashboard from './User/UserDashboard';

//Teacher
import TeacherRegister from './Teacher/Register';
import TeacherLogin from './Teacher/Login';
import Teacherdashboard from './Teacher/TeacherDashboard';
import TeacherDetail from './Teacher/TeacherDetails';
import TeacherCourses from './Teacher/MyCourses';
import ChangePassword from './Teacher/ChangePassword';
import ProfileSettings from './Teacher/ProfileSetting';
import AddCourse from './Teacher/AddCourse';
import Popularteachers from './Teacher/Popularteachers';





function Main() {
    return (
      <div className="App">
       <Header />
       <Switch>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:course_id' element={<CourseDetail />}/>
        <Route path='/dashboard' element={<UserDashboard />}/>
        <Route path='/my-courses' element={<MyCourses />}/>
        <Route path='/favorite-courses' element={<FavoriteCourses />}/>
        <Route path='/recommonded-courses' element={<RecommandedCourses />}/>
        <Route path='/profile-settings' element={<ProfileSetting />}/>
        <Route path='/change-password' element={<PasswordReset />}/>
        <Route path='/user-register' element={<Register />}/>
        <Route path='/user-login' element={<Login />}/>
        <Route path='/teacher-register' element={<TeacherRegister />}/>
        <Route path='/teacher-login' element={<TeacherLogin />}/>
        <Route path='/teacher-dashboard' element={<Teacherdashboard />}/>
        <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail />}/>
        <Route path='/all-courses' element={<AllCourses />}/>
        <Route path='/popular-courses' element={<PopularCourses />}/>
        <Route path='/alll-courses' element={<Courses />}/>
        <Route path='/catogary-courses/:catogary_slug' element={<CatogaryCourses />}/>
        <Route path='/teacher-courses' element={<TeacherCourses />}/>
        <Route path='/reset-password' element={<ChangePassword />}/>
        <Route path='/change-profile' element={<ProfileSettings />}/>
        <Route path='/add-course' element={<AddCourse />}/>
        <Route path='/popular-teachers' element={<Popularteachers />}/>
       </Switch>
       <Footer />
        
      </div>
    );
  }
  
  export default Main;
  