import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getTotalPrice, removeFromCart, updateQuantity } from '../state/cartSlice';

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const items = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector(getTotalPrice);

  const onQuantityChanged = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => {
    const quantity = Number(e.target.value) || 0;
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(items).map(([id, quantity]) => (
              <TableRow key={products[id].id}>
                <TableCell>{products[id].title}</TableCell>
                <TableCell>
                  <TextField
                    type='text'
                    defaultValue={quantity}
                    onBlur={(e) => onQuantityChanged(e, id)}
                  />
                </TableCell>
                <TableCell>${products[id].price}</TableCell>
                <TableCell>
                  <Button onClick={() => dispatch(removeFromCart(id))}>
                    <Delete color='secondary' />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>${totalPrice}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CartPage;
