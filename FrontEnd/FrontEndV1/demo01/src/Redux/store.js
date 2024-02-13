import { configureStore } from '@reduxjs/toolkit';
import textboxReducer from "./Reducer/textboxslice";

const store = configureStore({
  reducer: {
    textbox: textboxReducer
  }
});

export default store;
