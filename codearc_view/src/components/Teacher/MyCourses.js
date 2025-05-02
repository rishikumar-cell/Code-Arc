import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
function TeacherCourses(){
    return(
    <div className="container mt-4">
        <div className="row">
        <aside className="col-md-3">
           <TeacherSidebar />
        </aside>
        <section className="col-md-9">
        <div className="card">
        <h5 className="card-header">My Courses</h5>
        <div className="card-body">

        <table class="table">
<thead>
<tr>
<th scope="col"></th>
<th scope="col">Name</th>
<th scope="col">Created By</th>
<th scope="col">Action</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">1</th>
<td>Mark</td>
<td><Link to="">RIshi</Link></td>
<td><button className="btn btn-primary btn-danger btn-sm">Delete</button></td>
</tr>
<tr>
<th scope="row">2</th>
<td>Jacob</td>
<td><Link to="">RIshi</Link></td>
<td><button className="btn btn-primary btn-danger btn-sm ">Delete</button></td>

</tr>
<tr>
<th scope="row">3</th>
<td>Jacob</td>
<td><Link to="">RIshi</Link></td>
<td><button className="btn btn-primary btn-danger btn-sm ">Delete</button></td>

</tr>
</tbody>
</table>      
</div>

 
</div>
</section>
</div>
</div>
        
    )
}
export default TeacherCourses;