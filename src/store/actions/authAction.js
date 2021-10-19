import axios from 'axios';
import { mockAPI } from '../../mockapi';
import { setUser } from './userAction';

export const CHANGE_SIGNIN_INPUTS = 'CHANGE_SIGNIN_INPUTS';
export const CHANGE_SIGNUP_INPUTS = 'CHANGE_SIGNUP_INPUTS';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_SIGNIN_ERROR = 'AUTH_SIGNIN_ERROR';
export const AUTH_SIGNUP_ERROR = 'AUTH_SIGNUP_ERROR';

export const changeSigninInputs = payloads => {
    return (dispatch, getState) => {
        dispatch({ type: CHANGE_SIGNIN_INPUTS, payloads });
    };
};

export const signIn = credentials => {
    return (dispatch, getState, getAppLocalStorage) => {
        const appLocalStorage = getAppLocalStorage();

        axios.get(mockAPI.path + 'user').then(response => {
            const users = response.data;

            if (users.every(user => user.email.toLowerCase() !== credentials.email.toLowerCase()) || users.every(user => user.password !== credentials.password)) {
                dispatch({ type: AUTH_SIGNIN_ERROR, error: 'Email or password is invalid.' });
                return;
            }

            users.forEach(user => {
                if (user.email.toLowerCase() === credentials.email.toLowerCase() && user.password === credentials.password) {
                    appLocalStorage.userSignIn(user.id);
                    dispatch(setUser());
                    dispatch({ type: AUTH_SUCCESS });
                }
            });
        });
    };
};

export const signUp = credentials => {
    return (dispatch, getState, getAppLocalStorage) => {
        const appLocalStorage = getAppLocalStorage();

        if (!credentials.name && !credentials.email) {
            dispatch({ type: AUTH_SIGNUP_ERROR, error: 'You must enter your name and email.' });
            return;
        }

        if (credentials.password < 8) {
            dispatch({ type: AUTH_SIGNUP_ERROR, error: 'Password must consist of at least 8 characters.' });
            return;
        }

        if (credentials.password !== credentials.passwordConfirm) {
            dispatch({ type: AUTH_SIGNUP_ERROR, error: 'The password and the password to confirm do not match.' });
            return;
        }

        axios.get(mockAPI.path + 'user').then(response => {
            const users = response.data;

            if (users.every(user => user.email.toLowerCase() !== credentials.email.toLowerCase())) {
                axios.post(mockAPI.path + 'user', {
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    wishlistId: null,
                    cartId: null
                })
                    .then(response => {
                        const user = response.data;

                        appLocalStorage.userSignIn(user.id);
                        dispatch(setUser());
                        dispatch({ type: AUTH_SUCCESS });
                    });
            } else {
                dispatch({ type: AUTH_SIGNUP_ERROR, error: 'This user already exists, please try another email.' });
            }
        });
    };
}

export const changeSignupInputs = payloads => {
    return (dispatch, getState) => {
        dispatch({ type: CHANGE_SIGNUP_INPUTS, payloads });
    };
};

export const signOut = () => {
    return (dispatch, getState, getAppLocalStorage) => {
        const appLocalStorage = getAppLocalStorage();

        appLocalStorage.userSignOut();
        dispatch(setUser());
    };
};