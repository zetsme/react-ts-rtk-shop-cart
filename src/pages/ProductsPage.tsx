import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { fetchAllProducts } from '../api';
import ProductCard from '../components/ProductCard';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAllProducts } from '../state/productSlice';

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  useEffect(() => {
    fetchAllProducts().then((products) => dispatch(getAllProducts(products)));
  }, []);
  return (
    <Grid container columns={4} my={4} spacing={4}>
      {Object.values(products).map((product) => (
        <Grid key={product.id} item xs='auto'>
          <ProductCard {...{ product }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsPage;
