import { Container } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Switch>
          <Route path='/' exact component={ProductsPage} />
          <Route path='/cart' component={CartPage} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
