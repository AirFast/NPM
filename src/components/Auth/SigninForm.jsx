import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeLoginInputs, signIn } from '../../store/actions/authAction';
import styles from './Auth.module.css';

const SigninForm = () => {
    const { signin } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleChangeInputs = e => {
        dispatch(changeLoginInputs(e.target));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signIn(signin));
    }

    return (
        <div className='col-5 col-md-7 col-sm-12 m-auto mt-30 mb-30'>
            <h1 className='mb-60'>Sign in</h1>
            <form className={styles.auth_form} onSubmit={handleSubmit}>
                <div className={styles.input_group}>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='text' onChange={handleChangeInputs} value={signin.email} />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' onChange={handleChangeInputs} value={signin.password} />
                </div>
                <div className={styles.button_group}>
                    <button type='submit'>Sign in</button>
                    <span>Don't have an account yet? <Link to={'/signup'}>Sign up.</Link></span>
                </div>
                {signin.signinError && <span className={styles.auth_form_err}>{signin.signinError}</span>}
            </form>
        </div>
    );
};

export default SigninForm;