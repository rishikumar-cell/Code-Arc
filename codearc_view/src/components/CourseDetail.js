import {useParams} from 'react-router-dom'; //this is hook working for getting the parameter of the url 
import {Link} from 'react-router-dom';



function CourseDetail(){

    let {course_id} = useParams();
    return(
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-4'>
                    <img src="/logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} class="img-thumbnail" alt="..."/>
                </div>
                <div className='col-8 text-start'>
                     <h3>Course title</h3>
                    <p>Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some  styles for a simpler baseline and later provide .table, .table-bordered, and more.</p>
                    <p className="fw-bold"><b>Course Created By:</b> <Link to='/teacher-detail/1'>Teacher 1</Link> </p>
                    <p className='fw-bold'>Total Duration : 3H 40M</p>
                    <p className='fw-bold'>Enrolled : 30 Students</p>
                </div>

            </div>
            {/*Course Videos */}

            <div className='card mt-4 mb-3'>
                <div className='card-header'>
                    <p className='fw-bold text-start'>Course Lectures</p>
                </div>

            <div className="card" >

  <ul className="list-group list-group-flush">
    <li className="list-group-item text-start">Setup Project <button className='btn btn-sm btn-danger float-end' data-bs-toggle="modal" data-bs-target="#videoModal1"><i class="bi-youtube"></i></button> 

            {/* Modal demo start*/}
          
<div class="modal fade" id="videoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Video 1</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
      </div>
     
    </div>
  </div>
</div>
            {/* Modal demo end*/}


</li>
    <li className="list-group-item text-start">Live Projects <button className='btn btn-sm btn-danger float-end'><i class="bi-youtube"></i></button> </li>
    <li className="list-group-item text-start">Live Projects <button className='btn btn-sm btn-danger float-end'><i class="bi-youtube"></i></button> </li>
    <li className="list-group-item text-start">Live Projects <button className='btn btn-sm btn-danger float-end'><i class="bi-youtube"></i></button> </li>
    <li className="list-group-item text-start">Live Projects <button className='btn btn-sm btn-danger float-end'><i class="bi-youtube"></i></button> </li>
    <li className="list-group-item text-start">Live Projects <button className='btn btn-sm btn-danger float-end'><i class="bi-youtube"></i></button> </li>
  </ul>
</div>
</div>
{/*Course Videos */}
  



  
{/*Latest Courses start */}
<h3 className="border-bottom mt-5 text-start ">Latest Courses <a href="#" class="float-end">See All</a></h3>
    <div className="row mt-5 mb-5 ">
    <div className="card "style={{width: '18rem'}}>
      <Link to='/about'>
  <img src="/logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/></Link>
  <div className="card-body text-start">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <Link to="/detail/1" className="card-link">Course Details</Link>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
</div>
 {/*Latest Courses end */}




        </div>
    )
}
export default CourseDetail