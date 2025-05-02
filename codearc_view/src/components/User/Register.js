import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Login from "./Login";
import {useNavigate } from 'react-router-dom';
import auth from './auth';

function Register(){
  const navigate=useNavigate();
  const [error,setError]=useState({});
  const [formData, setFormData]=useState({

                full_name:'',
                email:'',
                qualification:'',
                mobile_number:'',
                address:'',
                intrested_catogary:'',
                password:'',
  })

  const [successMessage, setSuccessMessage] = useState(""); // Stores success message
  const [redirectingMessage, setRedirectingMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setRedirectingMessage("");

    try {
      await auth.register(...setFormData.values(formData));
      navigate('/Login'); // Redirect to login after registration
    } catch (error) {
      setError(error.message);
    }
  };
  


    return(

        <div className="container mt-4">

            <div className="row text-start">
                <h3 className="form-header mb-5 mt-5">User Registration</h3>
                {successMessage && <p className="text-success">{successMessage}</p>}
                {redirectingMessage && <p style={{ color: "blue" }}>{redirectingMessage}</p>}
                {error.general && <p className="text-danger">{error.general}</p>}
                <form onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name:</label>
        <input className="form-control" type="text" name="full_name" value={formData.full_name} onChange={(e) => setFormData({...formData, full_name: e.target.value})} required />
        {error.full_name && <p style={{ color: "red" }}>{error.full_name[0]}</p>}

        
        <label htmlFor="email">Email:</label>
        <input className="form-control my-3" type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        {error.email && <p style={{ color: "red" }}>{error.email[0]}</p>}


        <label htmlFor="qualification">Qualification:</label>
        <input className="form-control my-3" type="text" name="qualification" value={formData.qualification} onChange={(e) => setFormData({...formData, qualification: e.target.value})} required />
        {error.qualification && <p style={{ color: "red" }}>{error.qualification[0]}</p>}


        <label htmlFor="mobile_number">Mobile Number:</label>
        <input className="form-control my-3" type="text" name="mobile_number" value={formData.mobile_number} onChange={(e) => setFormData({...formData, mobile_number: e.target.value})} required />
        {error.mobile_number && <p style={{ color: "red" }}>{error.mobile_number[0]}</p>}


        <label htmlFor="address">Address:</label>
        <input className="form-control my-3" type="text" name="address" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} required />
        {error.address && <p style={{ color: "red" }}>{error.address[0]}</p>}


        <label htmlFor="intrested_catogary">Interested Category:</label>
        <input className="form-control my-3" type="text" name="intrested_catogary" value={formData.intrested_catogary} onChange={(e) => setFormData({...formData, intrested_catogary: e.target.value})} required />
        {error.intrested_catogary && <p style={{ color: "red" }}>{error.intrested_catogary[0]}</p>}


        <label htmlFor="password">Password:</label>
        <input className="form-control my-3" type="password" name="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required />
        {error.password && <p style={{ color: "red" }}>{error.password[0]}</p>}
        <br/>
        <p className="link">Already have an account <Link to={'/Login/'}>Login</Link></p>
        <button type="submit" className="mt-5 btn btn-success">Register</button>
      </form>



            </div>
        </div>

    )
  }


export default Register;