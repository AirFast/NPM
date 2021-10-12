import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import ProductItem from '../ProductItem/ProductItem';

const ProductsList = () => {
    const { products } = useSelector(state => state);

    console.log(products);

    return (
        <div className="row">
            {products.isSet
                ? products.items
                    .filter(item => item.title.toLowerCase().includes(products.searchValue.toLowerCase()))
                    .map(product => <ProductItem key={product.id} product={product} />)
                : <Loader />}
        </div>
    );
};

export default ProductsList;
