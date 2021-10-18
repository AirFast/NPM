import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import SignupForm from '../components/Auth/SignupForm';

const Signup = () => {
    const { user } = useSelector(state => state);

    if (user.id) return <Redirect to={'/'}/>

    return (
        <main className='container'>
            <section className='row'>
                <SignupForm />
            </section>
        </main>
    );
};

export default Signup;