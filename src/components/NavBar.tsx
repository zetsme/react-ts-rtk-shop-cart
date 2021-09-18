import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Badge, Button, Container, Fab, styled, Toolbar } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { getNumItems } from '../state/cartSlice';
import { useAppSelector } from '../hooks';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const NavBar = () => {
  const numItems = useAppSelector(getNumItems);
  return (
    <>
      <AppBar position='fixed'>
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              sx={{ backgroundColor: 'orange' }}
              color='inherit'
              variant='contained'
              component={RouterLink}
              to='/'
            >
              Products
            </Button>
            <Badge max={9999} badgeContent={numItems} color='secondary'>
              <Fab size='small' component={RouterLink} to='/cart'>
                <ShoppingCart />
              </Fab>
            </Badge>
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
    </>
  );
};

export default NavBar;
