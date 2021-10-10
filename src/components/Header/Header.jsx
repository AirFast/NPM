import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowClockwise, Heart, BagFill } from 'react-bootstrap-icons';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-30 mb-60'>

          <header className='d-flax flex-direction-row justify-content-space-between align-items-center'>
            <NavLink to={'/'}>
              <div className='d-flax align-items-center'>
                <span className={styles.logo}><ArrowClockwise size={32} /></span>
                <span className={styles.site_name}>React shop</span>
              </div>
            </NavLink>
            <ul className={styles.navigation}>
              <li className={styles.nav_item}>
                <NavLink to={'/wishlist'}>
                  <Heart size={20} />
                </NavLink>
              </li>
              <li className={styles.nav_item}>
                <NavLink to={'/cart'}>
                  <BagFill size={20} />
                </NavLink>
              </li>
            </ul>
          </header>

        </div>
      </div>
    </div >
  );
};

export default Header;
