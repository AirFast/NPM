import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import ProductItem from '../ProductItem/ProductItem';

const ProductsList = () => {
    const { products } = useSelector(state => state);
    
    return (
        products.isSet
            ? products.items.map(product => <ProductItem key={product.id} product={product} />)
            : <Loader />
    );
};

export default ProductsList;
