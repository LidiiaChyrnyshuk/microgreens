import { configureStore } from '@reduxjs/toolkit';
import { persistedAuthReducer } from './auth/authSlice';
import { persistedBasketReducer } from './basket/basketSlice';
import { persistedProductsReducer } from './products/productsSlice';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    basket: persistedBasketReducer,
    products: persistedProductsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
