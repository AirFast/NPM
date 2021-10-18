import axios from 'axios';
import { mockAPI } from '../../mockapi';

export const SET_USER = 'SET_USER';

export const setUser = () => {
    return (dispatch, getState, getAppLocalStorage) => {
        const appLocalStorage = getAppLocalStorage();
        const localStorage = appLocalStorage.storage;

        if (localStorage.user.isAuth) {
            axios.get(mockAPI.path + 'user/' + localStorage.user.id)
                .then(response => {
                    const user = response.data;

                    dispatch({ type: SET_USER, user });
                });
        }
    };
};