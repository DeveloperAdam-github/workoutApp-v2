import React, { useState } from 'react';
import './pastWorkout.css';
import { v4 as uuidv4 } from 'uuid';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button } from '@material-ui/core';
import { db } from '../firebase';

const PastWorkout = ({ workouts, timestamp, id, length, user }) => {
  const deletePastWorkout = (e) => {
    db.collection('workouts')
      .doc(id)
      .delete()
      .then(() => {
        console.log('deleted');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  };

  return (
    <div className='pastWorkout' id={id}>
      <div className='pastWorkout__top'>
        <p className='pastWorkout__title'>
          <span className='chunky'>
            {workouts[0].exercise.charAt(0).toUpperCase() +
              workouts[0].exercise.slice(1)}
          </span>
          <Button
            style={{
              position: 'absolute',
              right: '0',
              minWidth: '10px',
              width: '16px',
              height: '16px',
            }}
          >
            <CancelIcon
              // style={{ position: 'absolute', right: '0' }}
              onClick={deletePastWorkout}
            />
          </Button>
        </p>
      </div>
      <div className='pastWorkout__middle'>
        <p>
          Length:
          <span>{('0' + Math.floor((length / 60000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((length / 1000) % 60)).slice(-2)}:</span>
          <span>{('0' + ((length / 10) % 100)).slice(-2)}</span>
          <span> {''}</span>
        </p>
        <p>{timestamp}</p>
      </div>
      <div className='pastWorkout__bottom'>
        {workouts.map((workout) => (
          <div key={uuidv4()}>
            <p>Exercise: {workout.exercise} </p>
            <p>Weight: {workout.weight} </p>
            <p>Reps: {workout.reps} </p>
            <p style={{ color: 'orangered' }}> ------ </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastWorkout;
