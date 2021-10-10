import axios from 'axios';
import { mockAPI } from '../../mockapi';

export const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = () => {
    return dispatch => {
        axios.get(mockAPI.path + 'products').then(response => {
            dispatch({ type: SET_PRODUCTS, items: response.data });
        });
    };
};