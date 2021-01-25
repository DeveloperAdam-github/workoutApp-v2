import React, { useState } from 'react';
import './Register.css';
import { Button } from '@material-ui/core';
import firebase from 'firebase';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/appSlice';

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const dispatch = useDispatch();

  const signUp = () => {
    if (!name) {
      return alert('Please enter a full name');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
              })
            );
          })
          .catch((error) => alert(error));
      })
      .catch((error) => alert(error));
  };

  return (
    <div className='register'>
      <div className='register__container'>
        <h1 className='form__title'>
          Please <span style={{ color: 'orangered' }}>Register</span>
        </h1>
        <div className='register__formContainer'>
          <form className='register__form'>
            {/* <p>Name:</p> */}
            <input
              type='text'
              className='form__name'
              placeholder='Name...'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* <p>Email Address:</p> */}
            <input
              type='text'
              className='form__email'
              placeholder='Email...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <p>Password:</p> */}
            <input
              type='password'
              className='form__password'
              placeholder='Password...'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <p>Repeat Password:</p> */}
            {/* <input
              type='password'
              className='form__reapeatPassword'
              placeholder='Repeat password...'
            /> */}
            <Button
              onClick={signUp}
              className='form__button'
              variant='outlined'
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
