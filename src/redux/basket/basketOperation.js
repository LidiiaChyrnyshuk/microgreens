import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'api/instance';

// axios.defaults.baseURL = 'https://648ae22b17f1536d65e9e5ee.mockapi.io';

export const fetchBasket = createAsyncThunk(
  'basket/fetchAll',
  async (query, thunkAPI) => {
    try {
      const { data } = await instance.get('/basket?${query}');

      if (!data.products.length) {
        return [];
      }
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load basket');
    }
  }
);

export const addToBasket = createAsyncThunk(
  'basket/addToBasket',
  async (productId, thunkAPI) => {
    try {
      const response = await instance.patch('/basket/${poductId}');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFromBasket = createAsyncThunk(
  'basket/deleteFromBasket',
  async (productId, thunkAPI) => {
    try {
      const responce = await instance.delete('basket/${productId}');
      return { productId, ...responce.data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
