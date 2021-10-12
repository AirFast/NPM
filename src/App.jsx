import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './store/actions/productAction';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import home from './pages/home';
import wishlist from './pages/wishlist';
import cart from './pages/cart';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Switch>
        <Route exact path={'/'} component={home} />
        <Route exact path={'/wishlist'} component={wishlist} />
        <Route exact path={'/cart'} component={cart} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
