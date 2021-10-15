import React from 'react';
import Loader from '../Loader/Loader';
import ProductItem from '../ProductItem/ProductItem';

const ProductsList = ({ products }) => {
    return (
        products.isSet
            ? products.items
                // .filter(item => item.title.toLowerCase().includes(products.searchValue.toLowerCase()))
                .map(product => <ProductItem key={product.id} product={product} />)
            : <Loader />
    );
};

export default ProductsList;
