import {useEffect, useState} from 'react';
import axios from 'axios'; //it is the package which will helps to send the request to the http server


const baseURL='http://127.0.0.1:8000/'
function Popularteachers(){

    {/**/}
    //teacher is the variable and setteacher is the keyword which will change the state of our data in teacher variable
    const [teacher,setTeacher]=useState(null);//by default our data os null
    //whenever our component is loaded then useEffect will work to show that component is loaded
    useEffect(()=>{
        axios.get(baseURL+'/teacher/').then((response)=>{
        setTeacher(response.data)
        })
     
    },[]);
    console.log(teacher)


    return(
        <>
        <div className="container mt-4">
            <h3>Popular Teachers</h3>
            <div className="row mt-5 mb-5"  style={{gap:'2rem', justifyContent:'center'}}>
    <div className="card "style={{width: '18rem'}}>
  <img src="logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Course title</h5>
    
    <p className="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div className='title'>
  <ul className="list-group list-group-flush float-start">
    <li className="list-group-item">rating : 4/5</li>
    <li className="list-group-item">Views : 350</li>
  </ul>
  </div>
 
  <div className="card-body">
    <a href="#" className="card-link">Course Details</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
    <div className="card "style={{width: '18rem'}}>
  <img src="logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Course title</h5>
    
    <p className="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div className='title'>
  <ul className="list-group list-group-flush float-start">
    <li className="list-group-item">rating : 4/5</li>
    <li className="list-group-item">Views : 350</li>
  </ul>
  </div>
 
  <div className="card-body">
    <a href="#" className="card-link">Course Details</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
    <div className="card "style={{width: '18rem'}}>
  <img src="logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Course title</h5>
    
    <p className="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div className='title'>
  <ul className="list-group list-group-flush float-start">
    <li className="list-group-item">rating : 4/5</li>
    <li className="list-group-item">Views : 350</li>
  </ul>
  </div>
 
  <div className="card-body">
    <a href="#" className="card-link">Course Details</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
</div>

<div className='pagination' style={{justifyContent:'center'}}>
     
 {/* pagination start */}
 <nav aria-label="Page navigation example mt-4 text-center">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
 {/* pagination end */}
</div>
</div>
</>
    )
}
export default Popularteachers