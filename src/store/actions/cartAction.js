import axios from 'axios';
import { mockAPI } from '../../mockapi';

export const SET_CART = 'SET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const SET_ADDED_TO_CART = 'SET_ADDED_TO_CART';

export const setCart = () => {
    return dispatch => {
        axios.get(mockAPI.path + 'cart').then(response => {
            let items = response.data;
            items.forEach(item => {
                dispatch({ type: SET_ADDED_TO_CART, id: item.productId });
            });
            dispatch({ type: SET_CART, items });
        });
    };
};

export const addToCart = id => {
    return dispatch => {
        axios.post(mockAPI.path + 'cart', { productId: id })
            .then(response => {
                dispatch({ type: SET_ADDED_TO_CART, id });
                dispatch({ type: ADD_TO_CART, item: response.data });
            });
    };
};