'use client';
import React, { useState } from 'react';
import './signupin.css';
import {
  doc,
  db,
  getDoc,
  setDoc,
  collection,
  auth,
  createUserWithEmailAndPassword,
} from '../firebase/firebaseConfig';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const InputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const Submit = async (event) => {
    if (formData.password !== formData.confirmPassword) {
      alert('please match password and confirm password');
      event.preventDefault();
      return;
    }

    event.preventDefault();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;

        const cityRef = doc(db, 'users', userCredential.user.uid);
        setDoc(cityRef, formData);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    alert('UserCreated Success Fully');
    setSignInShow(true);
  };

  return (
    <div className='signup-container'>
      <h2 className='signup-title'>eHisaab-Store</h2>
      <form onSubmit={Submit} className='signup-form'>
        <div className='inputFields'>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={InputChange}
            required
          />
        </div>
        <div className='inputFields'>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={InputChange}
            required
          />
        </div>

        <div className='inputFields'>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={InputChange}
            required
          />
        </div>
        <div className='inputFields'>
          <label>Confirm Password:</label>
          <input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={InputChange}
            required
          />
        </div>
        <button type='submit' onClick={Submit}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
