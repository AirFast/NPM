import axios from 'axios';

export const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = () => {
    return (dispatch) => {
        axios.get('https://615056a5a706cd00179b740b.mockapi.io/products').then(response => {
            dispatch({ type: SET_PRODUCTS, items: response.data });
        });
    };
};