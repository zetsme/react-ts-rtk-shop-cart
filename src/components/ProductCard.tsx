import { Card, CardContent, CardHeader, CardMedia, Fab, Typography } from '@mui/material';
import { Product } from '../types';
import { Add } from '@mui/icons-material';
import { useAppDispatch } from '../hooks';
import { addToCart } from '../state/cartSlice';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useAppDispatch();
  return (
    <Card
      elevation={8}
      sx={{
        width: 320,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        sx={{ objectFit: 'contain' }}
        component='img'
        height='300'
        image={product.image}
        alt={product.title}
      />
      <CardHeader
        sx={{ flex: 1, alignItems: 'flex-start' }}
        title={product.title}
        subheader={`Category: ${product.category}`}
      />
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant='h5' color='text.secondary'>
          Price: ${product.price}
        </Typography>
        <Fab
          onClick={() => dispatch(addToCart(product.id))}
          sx={{ marginLeft: 'auto' }}
          color='primary'
        >
          <Add />
        </Fab>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
