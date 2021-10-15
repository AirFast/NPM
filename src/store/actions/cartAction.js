import axios from 'axios';
import { mockAPI } from '../../mockapi';
import { SET_PENDING_PRODUCT } from './productAction';

export const SET_CART = 'SET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_ADDED_TO_CART = 'SET_ADDED_TO_CART';

export const setCart = () => {
    return (dispatch, getState) => {
        axios.get(mockAPI.path + 'cart').then(response => {
            const items = response.data;
            const { products } = getState();
            const cartItems = [];

            items.forEach(item => {
                dispatch({ type: SET_ADDED_TO_CART, id: item.productId });

                cartItems.push(
                    ...products.items
                        .filter(productItem => productItem.id === item.productId)
                        .map(productItem => {
                            return {
                                ...productItem,
                                id: item.id,
                                productId: productItem.id,
                                isAddedToCart: true
                            }
                        })
                );
            });

            dispatch({ type: SET_CART, items: cartItems });
        });
    };
};

export const addToCart = id => {
    return dispatch => {
        dispatch({ type: SET_PENDING_PRODUCT, id });

        axios.post(mockAPI.path + 'cart', { productId: id })
            .then(response => {
                dispatch({ type: SET_ADDED_TO_CART, id });
                dispatch({ type: ADD_TO_CART, item: response.data });
            });
    };
};

export const removeFromCart = id => {
    return (dispatch, getState) => {
        const { cart } = getState();

        cart.items.forEach(item => {
            if (item.productId === id) {
                dispatch({ type: SET_PENDING_PRODUCT, id });

                axios.delete(mockAPI.path + 'cart/' + item.id)
                    .then(response => {
                        dispatch({ type: SET_ADDED_TO_CART, id });
                        dispatch({ type: REMOVE_FROM_CART, id: response.data.id });
                    });
            }
        });
    };
};