import React, { useState } from 'react';
import './Login.css'; // Import the CSS for styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isLogin: true, // toggle between Login and SignUp forms
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.isLogin) {
      alert('Login Successful');
    } else {
      alert('Account Created Successfully');
    }
  };

  const toggleForm = () => setFormData({ ...formData, isLogin: !formData.isLogin });

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>{formData.isLogin ? 'Welcome Back' : 'Create Account'}</h1>
        <p className="login-subtitle">{formData.isLogin ? 'Login to continue' : 'Sign up to get started'}</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {!formData.isLogin && (
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your Password"
                required
              />
            </div>
          )}
          <button type="submit" className="btn-login">{formData.isLogin ? 'Login' : 'Sign Up'}</button>
        </form>

        <p className="toggle-form" onClick={toggleForm}>
          {formData.isLogin ? "Don't have an account? Create one" : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );
};

export default Login;
