import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './store/actions/productAction';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/home';
import Wishlist from './pages/wishlist';
import Cart from './pages/cart';
import Signin from './pages/signin';
import Signup from './pages/signup';

const App = () => {
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/wishlist'} component={Wishlist} />
        <Route exact path={'/cart'} component={Cart} />
        <Route exact path={'/signin'}>
          {user.id ? <Redirect to='/' /> : <Signin />}
        </Route>
        <Route exact path={'/signup'}>
          {user.id ? <Redirect to='/' /> : <Signup />}
        </Route>
      </Switch>

      <Footer />
    </>
  );
};

export default App;