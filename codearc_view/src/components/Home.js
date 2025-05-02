import {Link} from 'react-router-dom';
import AllCourses from './AllCourses';
import {useEffect} from 'react';


function Home() {
  useEffect(()=>{
    document.title='Home'
  })
  return (


    //Courses Section
    <div className='container'>



<div className="row mt-5 mb-5" style={{display:'grid', gridTemplateColumns:'2fr 1fr'}}>
<figure class="figure">
  <img src="/logo1.png" class="figure-img img-fluid rounded" alt="..."/>
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
    
</div>
     
{/*Latest Courses start */}
<h3 className="border-bottom mt-5 ">Latest Courses<Link to="all-courses" class="float-end">See All</Link></h3>
    
<div className="row mt-5 mb-5 " style={{gap: '1rem', marginLeft:'3rem'}}>
    <div className="card "style={{width: '18rem'}}>
      <Link to='/about'>
  <img src="logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/></Link>
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
    <div className="card "style={{width: '18rem'}}>
      <Link to='/about'>
  <img src="logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/></Link>
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
    <div className="card "style={{width: '18rem'}}>
      <Link to='/about'>
  <img src="logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/></Link>
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
    <div className="card "style={{width: '18rem'}}>
      <Link to='/about'>
  <img src="logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/></Link>
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
    <div className="card "style={{width: '18rem'}}>
      <Link to='/about'>
  <img src="logo512.png" className="card-img-top  md-5 mt-5" style={{width: '200px', height: '200px'}} alt="..."/></Link>
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
</div>
 {/*Latest Courses end */}

{/*popular Courses start */}
    <h3 className="border-bottom mt-8">Popular Courses  <Link to="popular-courses" class="float-end">See All</Link></h3>
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
 {/*Popular Courses end */}




 {/*Popular Teachers start */}
            <h3>Popular Teachers <Link to="popular-teachers" class="float-end">See All</Link></h3>
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
 {/*Popular Teachers end */}





 {/* student testimonial start */}
 <h3 className="border-bottom mt-8">Student Testimonials  </h3>
 <div id="carouselExampleCaptions" className="carousel slide bg-dark text-white py-5 mb-4" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
    <figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
    <figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 {/* student testimonial end */}






</div>



  );
}

export default Home;
