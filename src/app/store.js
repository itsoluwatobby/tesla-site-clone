import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/counter/car/carSlice';
import optionReducer from '../features/options/optionSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    option: optionReducer
  },
});

