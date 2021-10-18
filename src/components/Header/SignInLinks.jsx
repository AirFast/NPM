import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const SignInLinks = () => {
    return (
        <>
            <li className={styles.nav_item}>
                <NavLink to={'/signin'}>Sign in</NavLink>
            </li>
            <li className={styles.nav_item + ' ' + styles.sign_up_item}>
                <NavLink to={'/signup'}>Sign up</NavLink>
            </li>
        </>
    );
};

export default SignInLinks;
