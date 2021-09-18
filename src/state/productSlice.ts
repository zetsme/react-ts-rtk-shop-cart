import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types';

export interface ProductState {
  products: { [id: string]: Product };
}

const initialState: ProductState = {
  products: {},
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts: (state, action: PayloadAction<Product[]>) => {
      const products = action.payload;
      products.forEach((product) => {
        state.products[product.id] = product;
      });
    },
  },
});

export const { getAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
