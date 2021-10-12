import axios from 'axios';
import { mockAPI } from '../../mockapi';
import { setWishlist } from './wishlistAction';
import { setCart } from './cartAction';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PENDING_PRODUCT = 'SET_PENDING_PRODUCT';

export const setProducts = () => {
    return dispatch => {
        axios.get(mockAPI.path + 'products').then(response => {
            dispatch({ type: SET_PRODUCTS, items: response.data });
            dispatch(setWishlist());
            dispatch(setCart());
        });
    };
};