import { Avatar, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import './Homepage.css';
import google from '../assets/images/googleLogo.jpg';
import { auth, provider } from '../firebase';
import { login, selectUser } from '../features/appSlice';
import RightArrow from '@material-ui/icons/ArrowRightAltOutlined';

const Homepage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='homepage'>
      <div className='homepage__container'>
        {!user ? (
          <div className='homepage__loginButton'>
            <Button
              onClick={signIn}
              className='button'
              variant='text'
              style={{ color: 'orangered', fontWeight: '500', zIndex: '1' }}
            >
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png'
                alt=''
                style={{ height: '25px', marginRight: '10px' }}
              />
              Sign in with Google
            </Button>
          </div>
        ) : (
          <>
            <div className='homepage__welcome'>
              <div className='homepage__welcomeContainer'>
                <div className='homepage__topInfo'>
                  <p className='homepage__welcomeTitle'>
                    {' '}
                    <Avatar
                      className='homepage__avatar'
                      src={user?.profilePic}
                    />{' '}
                    Hello {user?.username}
                  </p>
                  <p>
                    Past workouts <RightArrow />
                  </p>
                  <Button
                    style={{ width: '200px' }}
                    className='newWorkout__button'
                  >
                    Start a new workout
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const googleLogo = (
  <img
    src={google}
    alt=''
    style={{ height: '70px', width: '70px', float: 'left' }}
  />
);

export default Homepage;
