import {Link} from 'react-router-dom';


function Header() {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/" >Code-Arc</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alll-courses">Courses</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Course Catogary
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/catogary-courses/php">Python</Link>
              <Link className="dropdown-item" to="/catogary-courses/php">PHP</Link>
              <Link className="dropdown-item" to="/catogary-courses/php">Django</Link>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">More</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
         
         
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Teacher
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/teacher-login">Login</Link></li>
            <li><Link className="dropdown-item" to="/teacher-register">Register</Link></li>
            <li><Link className="dropdown-item" to="/teacher-dashboard">Dashboard</Link></li>
            <li><Link className="dropdown-item" to="/teacher-logout">Logout</Link></li>
          </ul>
        </li>
         
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/user-login">Login</Link></li>
            <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
            <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
            <li><Link className="dropdown-item" to="/user-logout">Logout</Link></li>
          </ul>
        </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
        
    );
  }
  
  export default Header;
  