import React, { useState } from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/appSlice';
import { Redirect, useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          username: userAuth.displayName,
          profilePic: userAuth.photoURL,
          id: userAuth.user.uid,
        })
      );
    });
    history.push('/');
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <h1 className='form__title'>
          Please <span style={{ color: 'orangered' }}>Login</span>
        </h1>
        <div className='login__formContainer'>
          <form className='login__form' action=''>
            <input
              type='email'
              className='form__email'
              placeholder='Email...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type='password'
              className='form__password'
              placeholder='Password...'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type='submit'
              className='form__button'
              variant='outlined'
              value='button'
              onClick={loginToApp}
              to='/'
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
