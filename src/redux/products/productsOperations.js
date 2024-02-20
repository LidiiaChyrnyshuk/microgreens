import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'api/instance';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/products');
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);
