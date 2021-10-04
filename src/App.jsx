import { Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import styles from './App.module.css';

// Pages
import home from './pages/home';
import wishlist from './pages/wishlist';
import cart from './pages/cart';

const App = () => {
  return (
    <>
      <div className='container'>
        <header className={styles.app_header}>
          <NavLink to={'/'}>
            <div className={styles.logo_block}>
              <img src={logo} className={styles.app_logo} alt="logo" />
              <span className={styles.site_name}>React shop</span>
            </div>
          </NavLink>
          <ul>
            <li>
              <NavLink to={'/wishlist'}>Wishlist</NavLink>
            </li>
            <li>
              <NavLink to={'/cart'}>Cart</NavLink>
            </li>
          </ul>
        </header>
      </div>
      <Switch>
        <Route exact path={'/'} component={home} />
        <Route exact path={'/wishlist'} component={wishlist} />
        <Route exact path={'/cart'} component={cart} />
      </Switch>
    </>

  );
}

export default App;
