import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import ProductsList from '../components/ProductsList/ProductsList';

const Home = () => {
    return (
        <main className='container'>
            <section className='row'>
                <PageHeader />
                <ProductsList />
            </section>
        </main>
    );
};

export default Home;