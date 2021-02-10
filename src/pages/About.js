import React from 'react';
import './About.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
      <div className='aboutContainer'>
        <div className='aboutContainer__top'>
          <h2 className='aboutContainer__title'>Workout Buddy</h2>
          <p className='aboutContainer__text'>
            Logging your workouts is one of the best ways to track your
            progress!
            <br />
            You will be able to see your old workouts and compare with your
            recent progress too see how far you've come!
            <br />
            <span style={{ textDecoration: 'underline' }}>
              Sign up today and starting tracking your progress!
            </span>
          </p>
        </div>
        <div className='aboutContainer__bottom'>
          <Link>
            <FacebookIcon style={{ width: '50px', height: ' 50px' }} />
          </Link>
          <Link>
            <TwitterIcon style={{ width: '50px', height: ' 50px' }} />
          </Link>
          <Link>
            <InstagramIcon style={{ width: '50px', height: ' 50px' }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
