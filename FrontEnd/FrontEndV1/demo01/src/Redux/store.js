import { configureStore } from '@reduxjs/toolkit';
import textboxReducer from "./Reducer/textboxslice";
import userslice from './Reducer/userslice';
const store = configureStore({
  reducer: {
    textbox: textboxReducer,
    user:userslice
  }
});

export default store;
