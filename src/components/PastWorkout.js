import React from 'react';
import './pastWorkout.css';
import { v4 as uuidv4 } from 'uuid';

const PastWorkout = ({ workouts, timestamp, id }) => {
  return (
    <div className='pastWorkout' id={uuidv4()}>
      <div className='pastWorkout__top'>
        <p className='pastWorkout__title'>
          <span className='chunky'>{workouts[0].exercise}</span>
        </p>
      </div>
      <div className='pastWorkout__middle'>
        <p>Length:</p>
        <p>{timestamp}</p>
      </div>
      <div className='pastWorkout__bottom'>
        {workouts.map((workout) => (
          <div id={uuidv4()}>
            <p>Exercise: {workout.exercise} </p>
            <p>Weight: {workout.weight} </p>
            <p>Reps: {workout.reps} </p>
            <p> ---- </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastWorkout;
