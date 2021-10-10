import React from 'react';
import { Plus } from 'react-bootstrap-icons';
import styles from './ProductItem.module.css'

const ProductItem = ({ product }) => {
    return (
        <div className='col-3 mt-20 mb-20'>
            <article className={styles.product_item}>
                <img src={`./img/${product.image}`} alt="logo" />
                <h3 className={styles.title}>{product.title}</h3>
                <div className={styles.product_item_footer}>
                    <span className={styles.price}>${product.price}</span>
                    <button><Plus size={28} /></button>
                </div>
            </article>
        </div>
    );
};

export default ProductItem;
