import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeSignupInputs, signUp } from '../../store/actions/authAction';
import styles from './Auth.module.css';

const SignupForm = () => {
    const { signup } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleChangeInputs = e => {
        dispatch(changeSignupInputs(e.target));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signUp(signup));
    }

    return (
        <div className='col-5 col-md-7 col-sm-12 m-auto mt-30 mb-30'>
            <h1 className='mb-60'>Sign up</h1>
            <form className={styles.auth_form} onSubmit={handleSubmit}>
                <div className={styles.input_group}>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' onChange={handleChangeInputs} value={signup.name} />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='text' onChange={handleChangeInputs} value={signup.email} />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' onChange={handleChangeInputs} value={signup.password} />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor='passwordConfirm'>Password confirm</label>
                    <input id='passwordConfirm' type='password' onChange={handleChangeInputs} value={signup.passwordConfirm} />
                </div>
                <div className={styles.button_group}>
                    <button type='submit'>Sign up</button>
                    <span>Already have an account? <Link to={'/signin'}>Sign in.</Link></span>
                </div>
                {signup.signupError && <span className={styles.auth_form_err}>{signup.signupError}</span>}
            </form>
        </div>
    );
};

export default SignupForm;