// src/services/auth.js
import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/';

const Register = async (full_name,email,qualification,mobile_number,address,intrested_catogary,password) => {
  try {
    const response = await axios.post(API_URL + 'student/', {
        full_name,email,qualification,mobile_number,address,intrested_catogary,password
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Registration failed.");
  }
};

const Login = async (email, password) => {
  try {
    const response = await axios.post(API_URL + 'Login/', { email, password });
    localStorage.setItem('student', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Login failed.");
  }
};

const logout = () => {
  localStorage.removeItem('user');
  return axios.post(API_URL + 'logout/');
};

export default { Register, Login, logout };
