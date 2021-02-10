import { createSlice } from '@reduxjs/toolkit';

export const workoutSlice = createSlice({
  name: 'workout',
  initialState: {
    selectedWorkout: null,
    // workoutId: null,
  },
  reducers: {
    selectWorkout: (state, action) => {
      state.selectedWorkout = action.payload;
      state.chatId = action.payload.chatId;
    },
  },
});

export const { selectWorkout } = workoutSlice.actions;

export const selectOpenWorkout = (state) => state.workout.selectedWorkout;
// export const selectWorkoutId = (state) => state.workout.workoutId;

export default workoutSlice.reducer;
