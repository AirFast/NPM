import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import ProductsList from '../components/ProductsList/ProductsList';

const Home = () => {
    return (
        <div className='container'>
            <PageHeader />
            <ProductsList />
        </div>
    );
};

export default Home;