import React from 'react';
import './pastWorkout.css';

const PastWorkout = ({ workouts, timestamp }) => {
    console.log('Workout: ',workouts);
  return (
    <div className='pastWorkout'>
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
          {workouts.map(
              (workout) => (<div>

                  <p>Exercise: {workout.exercise}  </p>
                  <p>Reps: {workout.reps}  </p>
                  <p>Weight: {workout.weight}  </p>
                      <p> -- </p>
                  </div>
              )
          )}
      </div>
    </div>
  );
};

export default PastWorkout;
