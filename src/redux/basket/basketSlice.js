import { createSlice } from '@reduxjs/toolkit';

const basketInitialState = {
  products: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: basketInitialState,

  reducers: {
    addToBasketPage(state, action) {
      state.products.push(action.payload);
    },
    deleteFromBasketPage(state, action) {
      state.products = state.products.filter(
        product => product !== action.payload
      );
    },
  },
});

export const basketReduser = basketSlice.reducer;

export const { addToBasketPage, deleteFromBasketPage } = basketSlice.actions;
