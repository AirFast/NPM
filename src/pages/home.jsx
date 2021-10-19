import React from 'react';
import { useSelector } from 'react-redux';
import PageHeader from '../components/PageHeader/PageHeader';
import ProductsList from '../components/ProductsList/ProductsList';

const Home = () => {
    const { products } = useSelector(state => state);

    // console.log(products);

    return (
        <main className='container'>
            <section className='row'>
                <PageHeader />
                <ProductsList products={products} setLoader={true}/>
            </section>
        </main>
    );
};

export default Home;