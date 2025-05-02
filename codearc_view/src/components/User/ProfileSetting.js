import { Link } from "react-router-dom";
import  Sidebar  from "./SideBar"

function ProfileSetting(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <Sidebar />
                </aside>
                
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Profile Settings</h5>
    <div className="mb-3 row">
    <label for="staticEmail" className="col-sm-2 mt-1 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text" className="form-control mt-1" id="staticEmail" />
    </div>
  </div>
    <div className="mb-3 row">
    <label for="staticEmail" className="col-sm-2 mt-1 col-form-label">Full Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control mt-1" id="staticEmail" />
    </div>
  </div>
    <div className="mb-3 row">
    <label for="staticEmail" className="col-sm-2 mt-1 col-form-label">Your Interest</label>
    <div className="col-sm-10">
      <input type="text" className="form-control mt-1" id="staticEmail" />
    </div>
  </div>
  <button type="button" class="btn btn-primary">Update</button>

  <div className="mb-3 row">

</div>     
 
  
  </div>         
  </section>
            </div>
        </div>
    )
}
export default ProfileSetting;