'use client';
import React, { useState } from 'react';
import './signupin.css';
import Link from 'next/link';

function SigninForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
    alert('Welcome eHisaab-Stores');
  };

  return (
    <div className='signup-container'>
      <h2 className='signup-title'>eHisaab-Store</h2>
      <form onSubmit={handleSubmit} className='signup-form'>
        <div className='inputFields'>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='inputFields'>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type='submit'>Sign In</button>
        <div className='auth-option'>
          <p>Already have an account? </p>
          <Link href='/signup'>Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
