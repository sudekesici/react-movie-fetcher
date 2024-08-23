import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // sliceı import ediyoruz.

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
  },
});

