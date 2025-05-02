import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function TeacherRegister() {
  const navigate = useNavigate();
  const [teacherData, setTeacherData] = useState({
    full_name: '',
    email: '',
    password: '',
    qualification: '',
    skills: '',
    mobile_number: '',
    status: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (event) => {
    setTeacherData({
      ...teacherData,
      [event.target.name]: event.target.value
    });
  };

  const submitForm = async (event) => {
    //event.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!teacherData.full_name || !teacherData.email || !teacherData.password) {
      setError('Please fill all required fields');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/teacher/', teacherData);

      if (response.data.status === 'success') {
        setSuccess('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/teacher-login');
        }, 1500);
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Teacher Registration</h3>

              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <form onSubmit={submitForm}>
                <div className="mb-3">
                  <label htmlFor="full_name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="full_name"
                    value={teacherData.full_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={teacherData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={teacherData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="qualification" className="form-label">Qualification</label>
                  <input
                    type="text"
                    className="form-control"
                    name="qualification"
                    value={teacherData.qualification}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="skills" className="form-label">Skills</label>
                  <input
                    type="text"
                    className="form-control"
                    name="skills"
                    value={teacherData.skills}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="mobile_number" className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile_number"
                    value={teacherData.mobile_number}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>

                <div className="text-center mt-3">
                  <p>
                    Already have an account? {' '}
                    <Link to="/teacher-login" className="text-decoration-none">
                      Login here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherRegister;
