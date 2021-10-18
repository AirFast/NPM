import axios from 'axios';
import { mockAPI } from '../../mockapi';

export const CHANGE_SIGNIN_INPUTS = 'CHANGE_SIGNIN_INPUTS';

export const changeLoginInputs = payloads => {
    return (dispatch, getState) => {
        dispatch({type: CHANGE_SIGNIN_INPUTS, payloads});
    };
};

export const signIn = credentials => {
    return (dispatch, getState) => {
        axios.get(mockAPI.path + 'user').then(response => {
            console.log(credentials);
            console.log(response.data);
        });
    };
};