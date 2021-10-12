import axios from 'axios';
import { mockAPI } from '../../mockapi';
import { SET_PENDING_PRODUCT } from './productAction';

export const SET_WISHLIST = 'SET_WISHLIST';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const SET_ADDED_TO_WISHLIST = 'SET_ADDED_TO_WISHLIST';

export const setWishlist = () => {
    return dispatch => {
        axios.get(mockAPI.path + 'wishlist').then(response => {
            const items = response.data;
            
            items.forEach(item => {
                dispatch({ type: SET_ADDED_TO_WISHLIST, id: item.productId });
            });
            dispatch({ type: SET_WISHLIST, items });
        });
    };
};

export const addToWishlist = id => {
    return dispatch => {
        dispatch({type: SET_PENDING_PRODUCT, id});

        axios.post(mockAPI.path + 'wishlist', { productId: id })
            .then(response => {
                dispatch({ type: SET_ADDED_TO_WISHLIST, id });
                dispatch({ type: ADD_TO_WISHLIST, item: response.data });
            });
    };
};

export const removeFromWishlist = id => {
    return (dispatch, getState) => {
        const { wishlist } = getState();

        wishlist.items.forEach(item => {
            if (item.productId === id) {
                dispatch({type: SET_PENDING_PRODUCT, id});

                axios.delete(mockAPI.path + 'wishlist/' + item.id)
                    .then(response => {
                        dispatch({ type: SET_ADDED_TO_WISHLIST, id });
                        dispatch({ type: REMOVE_FROM_WISHLIST, id: response.data.id });
                    });
            }
        });
    };
};