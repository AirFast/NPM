import React from 'react';
import styles from './ProductItem.module.css'

const ProductItem = ({ product }) => {
    return (
        <div className='col-3 mt-20 mb-20'>
            <article className={styles.product_item}>
                <img src={`./img/${product.image}`} alt="logo" />
            </article>
        </div>
    );
};

export default ProductItem;
