import  TeacherSidebar  from "./TeacherSidebar"


//import {Routes as Switch,Route} from 'react-router-dom';




function Teacherdashboard(){
    return(
        <div className="container mt-4"> 
            <div className="row">
                <aside className="col-md-3">
                   <TeacherSidebar />
                </aside>
                
                <section className="col-md-9">
               Dashboard              
                 </section>
            </div>
        </div>
    )
}
export default Teacherdashboard;