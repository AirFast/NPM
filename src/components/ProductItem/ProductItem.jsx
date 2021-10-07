//import axios from 'axios';
import React from 'react';
import styles from './ProductItem.module.css'

const ProductItem = ({ product }) => {
    return (
        <article className={'col-3 ' + styles.product_item}>
            <img src={`./img/${product.image}`} alt="logo" />
        </article>
    );
};

export default ProductItem;
