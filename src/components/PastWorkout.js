import React from 'react';
import './pastWorkout.css';

const PastWorkout = ({ title, time, date }) => {
  return (
    <div className='pastWorkout'>
      <div className='pastWorkout__top'>
        <p className='pastWorkout__title'>
          <span className='chunky'>{title}</span>
        </p>
      </div>
      <div className='pastWorkout__middle'>
        <p>Length: {time}</p>
        <p>{date}</p>
      </div>
      <div className='pastWorkout__bottom'>
        <p>Bench press 5 reps 100kg</p>
        <p>Bench press 5 reps 100kg</p>
        <p>Bench press 5 reps 100kg</p>
        <p>Bench press 5 reps 100kg</p>
      </div>
    </div>
  );
};

export default PastWorkout;
