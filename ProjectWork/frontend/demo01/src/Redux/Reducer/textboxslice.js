import { createSlice } from '@reduxjs/toolkit';

const textboxSlice = createSlice({
  name: 'textbox',
  initialState: {
    value: '' 
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setValue } = textboxSlice.actions;
export default textboxSlice.reducer;
