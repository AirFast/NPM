import axios from 'axios';
import { mockAPI } from '../../mockapi';
import { SET_PENDING_PRODUCT } from './productAction';

export const SET_WISHLIST = 'SET_WISHLIST';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const SET_ADDED_TO_WISHLIST = 'SET_ADDED_TO_WISHLIST';

export const setWishlist = () => {
    return (dispatch, getState, getAppLocalStorage) => {
        const appLocalStorage = getAppLocalStorage();
        const localStorage = appLocalStorage.storage;

        if(!localStorage.user.isAuth) {
            const items = localStorage.wishlist;

            dispatch({ type: SET_WISHLIST, items });
        }

        // axios.get(mockAPI.path + 'wishlist').then(response => {
        //     const items = response.data;
            
        //     items.forEach(item => {
        //         dispatch({ type: SET_ADDED_TO_WISHLIST, id: item.productId });
        //     });
        //     dispatch({ type: SET_WISHLIST, items });
        // });
    };
};

export const addToWishlist = id => {
    return (dispatch, getState, getAppLocalStorage) => {
        const appLocalStorage = getAppLocalStorage();
        const localStorage = appLocalStorage.storage;

        dispatch({type: SET_PENDING_PRODUCT, id});

        if(!localStorage.user.isAuth) {
            const item = {id, productId: id };

            appLocalStorage.addWishlistItem(item);
            dispatch({ type: ADD_TO_WISHLIST, item});
            dispatch({type: SET_PENDING_PRODUCT, id});
        }

        // axios.post(mockAPI.path + 'wishlist', { productId: id })
        //     .then(response => {
        //         dispatch({ type: SET_ADDED_TO_WISHLIST, id });
        //         dispatch({ type: ADD_TO_WISHLIST, item: response.data });
        //     });
    };
};

export const removeFromWishlist = id => {
    return (dispatch, getState, getAppLocalStorage) => {
        const { wishlist } = getState();
        const appLocalStorage = getAppLocalStorage();
        const localStorage = appLocalStorage.storage;

        wishlist.items.forEach(item => {
            if (item.productId === id) {
                dispatch({type: SET_PENDING_PRODUCT, id});

                if(!localStorage.user.isAuth) {
                    appLocalStorage.removeWishlistItem(item);
                    dispatch({ type: REMOVE_FROM_WISHLIST, id: item.id });
                    dispatch({type: SET_PENDING_PRODUCT, id});
                }

                // axios.delete(mockAPI.path + 'wishlist/' + item.id)
                //     .then(response => {
                //         dispatch({ type: SET_ADDED_TO_WISHLIST, id });
                //         dispatch({ type: REMOVE_FROM_WISHLIST, id: response.data.id });
                //     });
            }
        });
    };
};