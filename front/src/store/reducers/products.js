import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const productsSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.push(...payload);
    }
  }
})

export const { addProducts } = productsSlice.actions;

export default productsSlice.reducer;