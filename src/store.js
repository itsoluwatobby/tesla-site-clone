import { configureStore } from '@reduxjs/toolkit';
import carReducer from './carSlice';
import optionReducer from './optionSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    option: optionReducer
  },
});

