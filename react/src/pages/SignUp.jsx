import React, { useState } from 'react';
import './SignUp.css';


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log('SignUp data:', formData);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className='signup-form'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br />
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
