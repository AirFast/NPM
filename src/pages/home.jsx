import React from 'react';
import ProductsList from '../components/ProductsList/ProductsList';

const Home = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Home</h1>
                </div>
                <ProductsList />
            </div>
        </div>
    );
};

export default Home;