import {Link} from 'react-router-dom';
function TeacherDetail(){
    return(
       
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-4'>
                        <img src="/image.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} class="img-thumbnail" alt="..."/>
                    </div>
                    <div className='col-8 text-start'>
                         <h3>Teacher Name</h3>
                        <p>Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some  styles for a simpler baseline and later provide .table, .table-bordered, and more.</p>
                        <p className="fw-bold"><b>Skills</b> <Link to='/catogary-courses/php'>Python</Link>
                         ,<Link to='/catogary-courses/php'>Django</Link>,
                        <Link to='/catogary-courses/php'>javaScript</Link> </p>
                        <p className='fw-bold'>Qualification : PHD in Computer Science AI and ML</p>
                        <p className='fw-bold'>Enrolled : 30 Students</p>
                    </div>
    
                </div>
      
    
    
    
      
    {/*Latest Courses start */}
    <h3 className="border-bottom mt-5 text-start ">Course List<a href="#" class="float-end">See All</a></h3>
        <div className="row mt-5 mb-5 ">
        <div className="card "style={{width: '18rem'}}>
          <Link to='/about'>

      <img src="/logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/></Link>
      <div className="card-body text-start">
        <h5 className="card-title">Python</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <Link to="/detail/1" className="card-link">Course Details</Link>
        <a href="#" className="card-link">Enroll Course</a>
      </div>
    </div>
    </div>
     {/*Latest Courses end */}
    
    </div>
    
    
    )
}
export default TeacherDetail