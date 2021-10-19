import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const SignInLinks = () => {
    return (
        <li className={styles.nav_item + ' ' + styles.sign_in_item}>
            <NavLink to={'/signin'}>Sign in</NavLink>
        </li>
    );
};

export default SignInLinks;
