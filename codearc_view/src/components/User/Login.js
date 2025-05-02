import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';


function Login(){
    
    return(
    <div className="container mt-4">

    <div className="row text-start">
        <h3 className="form-header mb-5 mt-5">User Login</h3>
    <form>

<div className="mb-3">
<label htmlFor="email" className="form-label">Email address</label>
<input type="email" className="form-control" placeholder="Enter Your Email" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
<label htmlFor="password" className="form-label">Password</label>
<input type="password" className="form-control" placeholder="Create Password" name="password" id="exampleInputPassword1"/>
</div>

<div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
<label className="form-check-label" for="exampleCheck1">Check this if above all are correct !</label>
</div>
<button type="submit" className="btn btn-success">Login</button>
</form>

    </div>
</div>

    )

}
export default Login