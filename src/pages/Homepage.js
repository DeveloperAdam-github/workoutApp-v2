import { Avatar, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import './Homepage.css';
import google from '../assets/images/googleLogo.jpg';
import { auth, provider } from '../firebase';
import { login, selectUser } from '../features/appSlice';
import RightArrow from '@material-ui/icons/ArrowRightAltOutlined';
import AddIcon from '@material-ui/icons/Add';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link, Redirect } from 'react-router-dom';
import PastWorkout from '../components/PastWorkout';

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
          <>
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
            <div className='homepage__loginButton2'>
              <Button>
                <MailOutlineIcon style={{ paddingRight: '26.5px' }} />
                <Link
                  style={{ textDecoration: 'none', color: 'orangered' }}
                  to='/login'
                >
                  Sign in with Email
                </Link>
              </Button>
            </div>
          </>
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
                  <Link to='/newworkout' style={{ textDecoration: 'none' }}>
                    <Button className='newWorkout__button'>
                      New Workout{' '}
                      <AddIcon
                        style={{ marginLeft: '16px', fontSize: '22px' }}
                      />
                    </Button>
                  </Link>
                </div>
                <div className='homepage__pastWorkouts'>
                  <PastWorkout
                    title='Squat day'
                    time='30:32'
                    date='12/1/2021'
                  />
                  <PastWorkout
                    title='Bench day'
                    time='39:32'
                    date='11/1/2021'
                  />
                  <PastWorkout title='OHP day' time='45:32' date='18/1/2021' />
                  <PastWorkout title='Deadlift day' />
                  <PastWorkout title='Cardio' />
                  <PastWorkout title='Bench day' />
                  <PastWorkout title='Bench day' />
                  <PastWorkout title='Bench day' />
                  <PastWorkout title='Bench day' />
                  <PastWorkout title='Bench day' />
                  <PastWorkout title='Bench day' />
                  <PastWorkout title='Bench day' />
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
