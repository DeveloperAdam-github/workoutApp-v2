import { Button, Checkbox } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import './NewWorkout.css';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';
import ClearIcon from '@material-ui/icons/Clear';
import { db } from '../firebase';
import firebase from 'firebase';

const NewWorkout = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      exercise: '',
      weight: '',
      reps: '',
    },
  ]);

  const addExercise = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), exercise: '', weight: '', reps: '' },
    ]);
  };

  const deleteExercise = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  const handleChangeInput = (id, e) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[e.target.name] = e.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const finishWorkout = () => {
    setTimerOn(false);
  };

  const workoutBuilder = (formInputItem) => {
    return {
      exercise: formInputItem.exercise,
      weight: formInputItem.weight,
      reps: formInputItem.reps,
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const workouts = [];

    inputFields.map((inputField) => {
      workouts.push(workoutBuilder(inputField));
    });

    console.log('workouts: ', workouts);

    db.collection('workouts').add({
      workouts,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

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

  // const finishWorkout = () => {
  //   onSubmit();
  //   setTimerOn(false);
  // };

  return (
    <div className='newWorkout'>
      <div className='newWorkout__container'>
        <form onSubmit={onSubmit}>
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
              type='submit'
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
              <input
                name='newWorkout'
                type='text'
                placeholder='New Workout..'
              />
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
          <div className='newWorkout__exercisesTitle'>
            <p style={{ position: 'relative', right: '2%' }}>Set</p>
            <p style={{ position: 'relative', right: '3%' }}>Exercise</p>
            <p>KG</p>
            <p>Reps</p>
            <p></p>
            <p></p>
          </div>

          {inputFields.map((inputField) => (
            <div className='newWorkout__exercises' key={inputField.id}>
              <div className='newWorkout__set'>
                <p>1</p>
              </div>
              <div className='newWorkout__exercise'>
                <input
                  value={inputField.exercise}
                  name='exercise'
                  onChange={(e) => handleChangeInput(inputField.id, e)}
                  type='text'
                  placeholder='Bench Press'
                />
              </div>
              <div className='newWorkout__weight'>
                <input
                  value={inputField.weight}
                  name='weight'
                  onChange={(e) => handleChangeInput(inputField.id, e)}
                  type='text'
                  placeholder='100'
                />
              </div>
              <div className='newWorkout__reps'>
                <input
                  value={inputField.reps}
                  name='reps'
                  onChange={(e) => handleChangeInput(inputField.id, e)}
                  type='text'
                  placeholder='10'
                />
              </div>
              <Checkbox className='newWorkout__checkbox' />
              <Button
                disabled={inputFields.length === 1}
                onClick={() => deleteExercise(inputField.id)}
                style={{
                  minWidth: '10px',
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#FEEDEF',
                }}
              >
                <ClearIcon className='newWorkout__clear' />
              </Button>
            </div>
          ))}
          <div className='newWorkout__footer'>
            <Button
              onClick={addExercise}
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
