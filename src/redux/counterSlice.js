import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  category: 'action-adventure',
};

export const counterSlice = createSlice({
  name: 'counter', 
  initialState,
  reducers: { 

    handleCategoryChange: (state, action) => {
      state.category = action.payload; 
    },
  },
});

export const { handleCategoryChange } = counterSlice.actions; 
export default counterSlice.reducer;
