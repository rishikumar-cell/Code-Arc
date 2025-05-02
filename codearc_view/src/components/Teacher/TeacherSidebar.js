import { Link } from "react-router-dom";

function TeacherSidebar(){
    return(
        <div className="card">
        <h5 className="card-header fw-bold">Dashboard</h5>
    <div className="list-group-flush">
        <Link to="/user-dashboard" className="list-group-item list-group-item-action">Your Dashboard</Link>
        <Link to="/teacher-courses" className="list-group-item list-group-item-action">My Courses</Link>
        <Link to="/add-course"className="list-group-item list-group-item-action">Add Course</Link>
        <Link to="/change-profile" className="list-group-item list-group-item-action">Profile Setting</Link>
        <Link to="/reset-password" className="list-group-item list-group-item-action">Change Password</Link>
        <Link to="/teacher-login" className="list-group-item list-group-item-action">Logout</Link>
    </div>
    </div>
    )
}
export default TeacherSidebar;