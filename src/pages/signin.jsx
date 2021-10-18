import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import SigninForm from '../components/Auth/SigninForm';

const Signin = () => {
    const { user } = useSelector(state => state);

    if (user.id) return <Redirect to={'/'}/>

    return (
        <main className='container'>
            <section className='row'>
                <SigninForm />
            </section>
        </main>
    );
};

export default Signin;