import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./reducers/user.reducer";
import dealsReducer from './reducers/dealsSlice';

export const store = configureStore({
    reducer: {
      user: userReducer,
      deals: dealsReducer
    },
  })