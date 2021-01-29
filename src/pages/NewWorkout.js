import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import './NewWorkout.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const NewWorkout = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  function toggle() {
    setTimerOn(!timerOn);
  }

  const finishWorkout = () => {
    setTimerOn(false);
  };

  return (
    <div className='newWorkout'>
      <div className='newWorkout__container'>
        <form action=''>
          <div className='newWorkout__top'>
            <Button
              onClick={toggle}
              style={{
                backgroundColor: 'orangered',
                color: '#fff',
                fontSize: '15px',
                paddingRight: '15px',
                marginRight: '15px',
                paddingLeft: '15px',
                fontWeight: '900',
              }}
            >
              {!timerOn ? <p>Start</p> : <p>Pause</p>}{' '}
            </Button>
            <Button
              onClick={finishWorkout}
              style={{
                backgroundColor: '#27AA61',
                color: '#fff',
                fontSize: '15px',
                paddingRight: '15px',
                paddingLeft: '15px',
                fontWeight: '900',
              }}
            >
              Finish
            </Button>
          </div>
          <div className='newWorkout__middle'>
            <p className='newWorkout__title'>
              <input type='text' placeholder='New Workout..' />
            </p>
            <p className='newWorkout__timer'>
              <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
              <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
              <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
              <span> {''}</span>
            </p>
            <RotateLeftIcon
              onClick={() => setTime(0)}
              style={{
                fontSize: '19px',
                marginLeft: '5px',
                paddingLeft: '5px',
                position: 'relative',
                right: '-40px',
                bottom: '21px',
              }}
            />
          </div>
          <div className='newWorkout__exercises'></div>
          <div className='newWorkout__footer'>
            <Button
              style={{
                backgroundColor: '#EBF4FF',
                marginBottom: '25px',
                width: '90%',
                color: '#40A5F3',
                fontWeight: '900',
              }}
            >
              Add Exercise
            </Button>
            <Button
              style={{
                backgroundColor: '#FEEDEF',
                marginBottom: '25px',
                width: '90%',
                color: '#EB6F79',
                fontWeight: '900',
              }}
            >
              Cancel Workout
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewWorkout;
