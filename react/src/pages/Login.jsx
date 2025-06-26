import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        // Optionally redirect or update UI here
      } else {
        alert(data.msg || 'Login failed');
      }
    } catch (err) {
      alert('An error occurred.');
    }
    setLoading(false);
    setFormData({ email: '', password: '' });
  };

  return (
    <div className='login-form'>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <br />
        <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default Login;
