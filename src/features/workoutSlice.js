import { createSlice } from '@reduxjs/toolkit';

export const workoutSlice = createSlice({
  name: 'workout',
  initialState: {
    selectedWorkout: null,
  },
  reducers: {
    selectWorkout: (state, action) => {
      state.selectedWorkout = action.payload;
    },
  },
});

export const { selectWorkout } = workoutSlice.actions;

export const selectOpenWorkout = (state) => state.mail.selectedWorkout;

export default workoutSlice.reducer;
