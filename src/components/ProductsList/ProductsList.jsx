import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../store/actions/productAction';
import Loader from '../Loader/Loader';
import ProductItem from '../ProductItem/ProductItem';

const ProductsList = () => {
    const { products } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts());
    }, [dispatch]);

    console.log(products);

    return (
        products.isSet
            ? products.items.map(product => <ProductItem key={product.id} product={product} />)
            : <Loader />
    );
};

export default ProductsList;
