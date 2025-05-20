import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    const parsed = JSON.parse(serializedCart);
    if (Array.isArray(parsed)) {
      return { value: parsed };
    }
    return { value: [] };
  } catch (err) {
    console.error("Error loading cart from local storage", err);
    return { value: [] };
  }
};
const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (err) {
    console.error("Error saving cart to local storage", err);
  }
};


const initialState = loadCartFromLocalStorage();

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
      saveCartToLocalStorage(state.value); 
    },
    decrement: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload);
      saveCartToLocalStorage(state.value); 
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.value.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
        saveCartToLocalStorage(state.value); 
      }
    }
  },
});

export const { increment, decrement, updateQuantity } = counterSlice.actions;
export default counterSlice.reducer;
