import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';

const Login = () => {
  return (
    <div className='login'>
      <div className='login__container'>
        <h1 className='form__title'>
          Please <span style={{ color: 'orangered' }}>Login</span>
        </h1>
        <div className='login__formContainer'>
          <form className='login__form'>
            <input type='text' className='form__email' placeholder='Email...' />

            <input
              type='password'
              className='form__password'
              placeholder='Password...'
            />
          </form>
          <Button className='form__button' variant='outlined'>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
