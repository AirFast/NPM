import React from 'react';
import { NavLink } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
import styles from './Header.module.css';

const SignOutLinks = () => {
    return (
        <>
            <li className={styles.nav_item + ' ' + styles.user_item}>
                <NavLink to={'/'}>
                    <PersonFill size={24} />
                </NavLink>
            </li>
        </>
    );
};

export default SignOutLinks;
