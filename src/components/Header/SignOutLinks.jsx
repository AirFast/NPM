import React from 'react';
import { NavLink } from 'react-router-dom';
import { DoorOpenFill, PersonFill } from 'react-bootstrap-icons';
import styles from './Header.module.css';
import { signOut } from '../../store/actions/authAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const SignOutLinks = () => {
    const { user } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(signOut());
    };

    return (
        <li className={styles.nav_item + ' ' + styles.user_item}>
            <NavLink to={'/'}>
                <PersonFill size={24} />
            </NavLink>
            <span className={styles.user_name}>{ user.name }</span>
            <span className={styles.signout}>
                <button onClick={handleSignOut}>
                    <DoorOpenFill size={20} />
                </button>
            </span>
        </li>
    );
};

export default SignOutLinks;
