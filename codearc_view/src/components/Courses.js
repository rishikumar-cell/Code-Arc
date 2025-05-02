import {Link} from 'react-router-dom';

function Courses(){
    return(

        <>
        
{/*Latest Courses start */}
    <h3 className="border-bottom mt-5 ">Latest Courses</h3>
    
    <div className="row mt-5 mb-5" style={{gap: '1rem', justifyContent:'center'}}>
    <div className="card mb-3"style={{width: '18rem'}}>
      <Link to='/about'>
  <img src="image.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/></Link>
  <div className="card-body">
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
    <div className="card mb-3"style={{width: '18rem'}}>
      <Link to='/about'>
  <img src="/logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/></Link>
  <div className="card-body">
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
    <div className="card mb-3 "style={{width: '18rem'}}>
      <Link to='/about'>
  <img src="/logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/></Link>
  <div className="card-body">
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
    <div className="card mb-3"style={{width: '18rem'}}>
      <Link to='/about'>
  <img src="/logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/></Link>
  <div className="card-body">
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

 {/*Latest Courses end */}
 </>
    );
}
export default Courses