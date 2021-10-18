import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Auth.module.css';

const SignupForm = () => {
    return (
        <div className='col-5 col-md-7 col-sm-12 m-auto mt-30 mb-30'>
            <h1 className='mb-60'>Sign up</h1>
            <form className={styles.auth_form}>
                <div className={styles.input_group}>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='text' />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor='confirm-password'>Confirm password</label>
                    <input id='confirm-password' type='password' />
                </div>
                <div className={styles.button_group}>
                    <button type='submit'>Sign up</button>
                    <span>Already have an account? <Link to={'/signin'}>Sign in.</Link></span>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;