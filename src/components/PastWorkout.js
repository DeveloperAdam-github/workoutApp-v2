import React, { useState } from 'react';
import './pastWorkout.css';

const PastWorkout = ({ timestamp, exercise, weight, reps }) => {
  const [pastWorkouts, setPastWorkouts] = useState([]);

  return (
    <div className='pastWorkout'>
      <div className='pastWorkout__top'>
        <p className='pastWorkout__title'>
          <span className='chunky'>title</span>
        </p>
      </div>
      <div className='pastWorkout__middle'>
        <p>Length:</p>
        <p></p>
        <p>{timestamp}</p>
      </div>
      <div className='pastWorkout__bottom'>
        <p>{exercise}:</p>
        <p>{weight} X </p>
        <p>{reps}</p>
      </div>
    </div>
  );
};

export default PastWorkout;
