import React from 'react';
import { useSelector } from 'react-redux';
import PageHeader from '../components/PageHeader/PageHeader';
import ProductsList from '../components/ProductsList/ProductsList';

const Cart = () => {
    const { cart } = useSelector(state => state);

    return (
        <main className='container'>
            <section className='row'>
                <PageHeader />
                <ProductsList products={cart} />
            </section>
        </main>
    );
};

export default Cart;