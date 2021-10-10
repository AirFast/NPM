import axios from 'axios';
import { mockAPI } from '../../mockapi';

export const SET_CART = 'SET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';

export const setCart = () => {
    return dispatch => {
        axios.get(mockAPI.path + 'cart').then(response => {
            dispatch({ type: SET_CART, items: response.data });
        });
    };
};

export const addToCart = payload => {
    return dispatch => {
        //axios.get(mockAPI.path + 'cart').then(response => {
            // dispatch({ type: SET, item: payload });
            dispatch({ type: ADD_TO_CART, item: payload });
        //});
    };
};