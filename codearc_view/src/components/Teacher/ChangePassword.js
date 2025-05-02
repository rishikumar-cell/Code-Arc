import { Link } from "react-router-dom";
import  TeacherSidebar  from "./TeacherSidebar"

function ChangePassword(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <TeacherSidebar />
                </aside>
                
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Change Password</h5>
    
    <div className="mb-3 row">
<label for="staticEmail" className="col-sm-2 mt-1 col-form-label">New Password</label>
    <div className="col-sm-10">
      <input type="text" className="form-control mt-1" id="staticEmail" />
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 mt-1 col-form-label">Enter Again</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
  </div>    
  <div className="mb-3 row">

</div>     
  <button type="button" class="btn btn-primary">Change Password</button>
 
  
  </div>         
  </section>
            </div>
        </div>
    )
}
export default ChangePassword;