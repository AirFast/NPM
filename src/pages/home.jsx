import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem/ProductItem';

const Home = () => {
    const products = useSelector(state => state.products);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Home</h1>
                </div>
                {products.map(product => <ProductItem key={product.id} product={product} />)}
            </div>
        </div>
    );
};

export default Home;