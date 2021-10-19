import React from 'react';
import Loader from '../Loader/Loader';
import ProductItem from '../ProductItem/ProductItem';
import EmptyProductsList from './EmptyProductsList';

const ProductsList = ({ products, setLoader }) => {
    return (
        products.isSet
            ? products.items
                // .filter(item => item.title.toLowerCase().includes(products.searchValue.toLowerCase()))
                .map(product => <ProductItem key={product.id} product={product} />)
            : setLoader ? <Loader /> : <EmptyProductsList />
    );
};

export default ProductsList;
