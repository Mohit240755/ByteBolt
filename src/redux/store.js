// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slide';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
