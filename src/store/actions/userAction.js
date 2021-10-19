import axios from 'axios';
import { mockAPI } from '../../mockapi';
import { setCart } from './cartAction';
import { setWishlist } from './wishlistAction';

export const SET_USER = 'SET_USER';
export const SET_USER_SIGN_OUT = 'SET_USER_SIGN_OUT';

export const setUser = () => {
    return (dispatch, getState, getAppLocalStorage) => {
        const appLocalStorage = getAppLocalStorage();
        const localStorage = appLocalStorage.storage;

        if (!localStorage.user.isAuth) {
            dispatch({ type: SET_USER_SIGN_OUT });
            dispatch(setWishlist());
            dispatch(setCart());
        } else {
            axios.get(mockAPI.path + 'user/' + localStorage.user.id)
                .then(response => {
                    const user = response.data;

                    dispatch({ type: SET_USER, user });
                    dispatch(setWishlist());
                    dispatch(setCart());
                });
        }
    };
};