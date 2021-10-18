import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowClockwise, Heart, BagFill, PersonFill } from 'react-bootstrap-icons';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const { wishlist, cart } = useSelector(state => state);

  return (
    <header className='container'>
      <div className='row'>
        <div className='col-12 mt-30 mb-100 d-flex flex-direction-row justify-content-space-between align-items-center'>
          <NavLink to={'/'}>
            <div className='d-flex align-items-center'>
              <span className={styles.logo}><ArrowClockwise size={32} /></span>
              <span className={styles.site_name}>React shop</span>
            </div>
          </NavLink>
          <ul className={styles.navigation}>
            <li className={styles.nav_item}>
              <NavLink to={'/signin'}>Sign in</NavLink>
            </li>
            <li className={styles.nav_item + ' ' + styles.sign_up_item}>
              <NavLink to={'/signup'}>Sign up</NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink to={'/wishlist'}>
                <Heart size={24} />
                {wishlist.count > 0 && <span className={styles.count}>{wishlist.count}</span>}
              </NavLink>
            </li>
            <li className={styles.nav_item}>
              <NavLink to={'/cart'}>
                <BagFill size={24} />
                {cart.count > 0 && <span className={styles.count}>{cart.count}</span>}
              </NavLink>
            </li>
            <li className={styles.nav_item + ' ' + styles.user_item}>
              <NavLink to={'/'}>
                <PersonFill size={24} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header >
  );
};

export default Header;
