import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import { fetchProducts } from './productsOperations';
import storage from 'redux-persist/lib/storage';

const productsInitialState = {
  products: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, handleRejected),
});

export const productsReducer = productsSlice.reducer;

const productsPersistConfig = {
  key: 'products',
  storage,
  whitelist: ['products'],
};

export const persistedProductsReducer = persistReducer(
  productsPersistConfig,
  productsReducer
);
