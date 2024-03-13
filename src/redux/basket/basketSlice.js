import { createSlice } from '@reduxjs/toolkit';

import { fetchBasket, addToBasket, deleteFromBasket } from './basketOperation';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchBasket.pending]: handlePending,
    [addToBasket.pending]: handlePending,
    [deleteFromBasket.pending]: handlePending,

    [fetchBasket.rejected]: handleRejected,
    [addToBasket.rejected]: handleRejected,
    [deleteFromBasket.rejected]: handleRejected,

    [fetchBasket.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.products;
    },

    [addToBasket.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [deleteFromBasket.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        basket => basket._id !== action.payload.productId
      );
    },
  },
});

export const basketReducer = basketSlice.reducer;

const basketPersistConfig = {
  key: 'basketProducts',
  storage,
  whitelist: ['product', '_id', 'description'],
};

export const persistedBasketReducer = persistReducer(
  basketPersistConfig,
  basketReducer
);
