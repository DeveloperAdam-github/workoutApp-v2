import React, { useState } from 'react';
import './Navbar.css';
import gym from '../assets/images/gym.svg';
import picture1 from '../assets/images/undraw_indoor_bike_pwa4.svg';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { logout, selectUser } from '../features/appSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isShowing, setIsShowing] = useState(false);

  const showMenu = () => {
    setIsShowing(!isShowing);
  };

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <Link to='/'>{Logo}</Link>
      </div>
      <div className='navbar__middle'>
        <li>
          <Link
            to='/'
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              style={{
                color: 'orangered',
                textDecoration: 'none',
                fontFamily: 'Teko',
                fontSize: ' 20px',
              }}
            >
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              style={{
                color: 'orangered',
                textDecoration: 'none',
                fontFamily: 'Teko',
                fontSize: ' 20px',
              }}
            >
              About
            </Button>
          </Link>
        </li>

        {!user ? (
          <li>
            <Link
              to='/signup'
              style={{
                textDecoration: 'none',
              }}
            >
              <Button
                style={{
                  color: 'orangered',
                  textDecoration: 'none',
                  fontFamily: 'Teko',
                  fontSize: ' 20px',
                }}
              >
                Sign Up
              </Button>
            </Link>
          </li>
        ) : (
          <li>
            <Button
              style={{
                color: 'orangered',
                textDecoration: 'none',
                fontFamily: 'Teko',
                fontSize: ' 20px',
              }}
              onClick={signOut}
            >
              Sign out
            </Button>
          </li>
        )}
      </div>
      <div className='navbar__right'>
        {/* <Button className='navbar__button'>
          <Link
            to='/login'
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: ' 20px',
              fontFamily: 'Teko',
            }}
          >
            LOGIN
          </Link>
        </Button> */}
      </div>
      <div className='navbar__rightBurger'>
        <Button
          onClick={showMenu}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginRight: '20px',
            zIndex: '50',
          }}
        >
          <MenuIcon
            style={{
              color: 'orangered',
              fontSize: '40px',
            }}
          />
        </Button>
      </div>

      <div
        className={
          isShowing
            ? 'navbar__BurgerLinkContainerShow'
            : 'navbar__BurgerLinkContainer'
        }
      >
        <li>
          <Link
            onClick={showMenu}
            to='/'
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              style={{
                color: 'orangered',
                textDecoration: 'none',
                fontFamily: 'Teko',
                fontSize: '40px',
              }}
            >
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link
            onClick={showMenu}
            to='/about'
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              style={{
                color: 'orangered',
                textDecoration: 'none',
                fontFamily: 'Teko',
                fontSize: '40px',
              }}
            >
              About
            </Button>
          </Link>
        </li>
        <li>
          <Link
            onClick={showMenu}
            to='/signup'
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              style={{
                color: 'orangered',
                textDecoration: 'none',
                fontFamily: 'Teko',
                fontSize: '40px',
              }}
            >
              Sign Up
            </Button>
          </Link>
        </li>
        <li>
          <Button onClick={showMenu}>
            <Link
              to='/login'
              style={{
                textDecoration: 'none',
                color: 'orangered',
                fontFamily: 'Teko',
                fontSize: '40px',
              }}
            >
              Login
            </Link>
          </Button>
        </li>
        {/* {bikePicture} */}
      </div>
    </div>
  );
};

const Logo = (
  <img
    src={gym}
    alt=''
    style={{ height: '70px', width: '70px', float: 'left' }}
  />
);

const bikePicture = (
  <img
    src={picture1}
    alt=''
    style={{
      height: 'auto',
      width: '170px',
      position: 'absolute',
      bottom: '10px',
      right: '5px',
    }}
  />
);

export default Navbar;
