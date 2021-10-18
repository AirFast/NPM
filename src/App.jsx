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
import signin from './pages/signin';
import signup from './pages/signup';

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
        <Route exact path={'/signin'} component={signin} />
        <Route exact path={'/signup'} component={signup} />
      </Switch>

      <Footer />
    </>
  );
};

export default App;