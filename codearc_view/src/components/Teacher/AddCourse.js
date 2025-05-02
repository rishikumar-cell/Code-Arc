import { Link } from "react-router-dom";
import  TeacherSidebar  from "./TeacherSidebar"
import { useState,useEffect } from "react";
import axios from "axios";


//to fetch the data from frontend we need hooks 
const baseUrl = 'http://127.0.0.1:8000/api/';

function AddCourse(){
 
  const [cats,setCats]=useState([]) 

  const [courseData, setcourseData]=useState({
    categary:'',
    title:'',
    descriptipn:'',
    featured_img:'',
    technologies: '', 
})

  useEffect(()=>{ 
    try{ 
       axios.get(baseUrl+'catogary/')
       .then((respose)=>{
       
          setCats(respose.data)
      })
      
    }catch(error){
      console.log(error)
    }
},[]);


  const handleChange=(event)=>{
    setcourseData({
      ...courseData,

      [event.target.name]:event.target.value
    })
  }
  const handleFileChange=(event)=>{
    setcourseData({
      ...courseData,

      [event.target.name]:event.target.files[0]
    })
  }
  const formSubmit = async (event) => {
    event.preventDefault();

    const _formData = new FormData();
    _formData.append('categary', courseData.categary);  // Fixed typo
    _formData.append('teacher', 7); // Replace with actual teacher ID
    _formData.append('title', courseData.title);
    _formData.append('descriptipn', courseData.descriptipn); // Fixed typo
    _formData.append('technologies', courseData.technologies || "None");

    if (courseData.featured_img) {
        _formData.append('featured_img', courseData.featured_img, courseData.featured_img.name);
    }

    // 🔍 Log FormData values before sending the request
    for (let pair of _formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    try {
        const response = await axios.post(baseUrl + 'course/', _formData, {
            headers: { 'content-type': 'multipart/form-data' },
        });

        console.log("✅ Success:", response.data);
    } catch (error) {
        if (error.response) {
            console.error("❌ Backend Error Response:", error.response.data);
        } else {
            console.error("❌ Unknown Error:", error);
        }
    }
};




    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <TeacherSidebar />
                </aside>
                <div className="col-9">
                  <div className="card">
                    <h5 className="card-header">Add Course</h5>
                    <div className="card-body">
                    <form>               
    <div className="mb-3 row">
    <label htmlFor="categary" className="col-sm-2 mt-1 col-form-label">Select Catogary</label>
      <select onChange={handleChange} className="form-control mt-4 my-3" name="form-control">
      {cats.map((categary, index) => (
    <option key={index} value={categary.id}>{categary.title}</option>
  ))}
      </select>
    </div>


    <div className="col-sm-10">
    <label htmlFor="title" className="col-sm-2 mt-1 col-form-label">Title</label>
    <input type="text" name="title" onChange={handleChange} className="form-control mt-1" />
    </div>
  
   
    <div className="col-sm-10">
    <label htmlFor="descriptipn" className="col-sm-2 mt-1 col-form-label">Description</label>
    <textarea name="descriptipn" onChange={handleChange} className="form-control mt-1"></textarea>
    </div>
  
    
    <div className="col-sm-10">
    <label htmlFor="video" className="col-sm-2 mt-1 col-form-label">Features Image</label>
    <input type="file" onChange={handleFileChange}  className="form-control mt-1" id="featured_img" />
    </div>
  
    
    <div className="col-sm-10">
    <label htmlFor="teachnologies" className="col-sm-2 mt-1 col-form-label">Teachnologies</label>
    <input type="text" name="technologies" onChange={handleChange} className="form-control mt-1" />
    <div className="form-text float-start">PhP, Python, JavaScript, HTML, CSS, React.js</div>

    </div>
  
    <button onClick={formSubmit} type="button" className="btn btn-primary">Update</button>
  
</form>
  
                    </div>
                  </div>
                </div>
                
                   
            </div>
        </div>
    )
}
export default AddCourse;