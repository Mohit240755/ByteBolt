import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const existingItem = state.value.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.value.push(action.payload);
      }
    },
    decrement: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.value.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    }
  },
});

export const { increment, decrement, updateQuantity } = counterSlice.actions;
export default counterSlice.reducer;
