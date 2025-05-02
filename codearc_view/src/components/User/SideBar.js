import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <div className="card">
        <h5 className="card-header fw-bold">Dashboard</h5>
    <div className="list-group-flush">
        <Link to="/user-dashboard" className="list-group-item list-group-item-action">Your Dashboard</Link>
        <Link to="/my-courses" className="list-group-item list-group-item-action">My Courses</Link>
        <Link to="/favorite-courses" className="list-group-item list-group-item-action">favorite Courses</Link>
        <Link to="/recommonded-courses"className="list-group-item list-group-item-action">Recommanded Courses</Link>
        <Link to="/profile-settings" className="list-group-item list-group-item-action">Profile Setting</Link>
        <Link to="/change-password" className="list-group-item list-group-item-action">Change Password</Link>
        <Link to="/user-login" className="list-group-item list-group-item-action">Logout</Link>
    </div>
    </div>
    )
}
export default Sidebar;