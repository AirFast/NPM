import React from 'react';
import { useDispatch } from 'react-redux';
import { Check, Plus, Heart, HeartFill } from 'react-bootstrap-icons';
import styles from './ProductItem.module.css'
import { addToCart } from '../../store/actions/cartAction';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const handlerAddToCart = () => {
        dispatch(addToCart({
            productId: product.id
        }));
    }

    return (
        <div className='col-3 mt-20 mb-20'>
            <article className={styles.product_item}>
                <button className={styles.add_to_wishlist} title='Add to Wishlist'><Heart size={20} /></button>
                {/* <button className={styles.remove_from_wishlist} title='Remove from Wishlist'><HeartFill size={20} /></button> */}
                <img src={`./img/${product.image}`} alt="logo" />
                <h3 className={styles.title}>{product.title}</h3>
                <div className={styles.product_item_footer}>
                    <span className={styles.price}>${product.price}</span>
                    <button className={styles.add_to_cart} title='Add to Cart' onClick={handlerAddToCart}><Plus size={28} /></button>
                    {/* <button className={styles.remove_from_cart} title='Remove from Cart'><Check size={28} /></button> */}
                </div>
            </article>
        </div>
    );
};

export default ProductItem;
