import { Product } from './types';

export const fetchAllProducts = async (): Promise<Product[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
};
