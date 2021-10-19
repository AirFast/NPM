import { SET_USER, SET_USER_SIGN_OUT } from '../actions/userAction';

const initState = {
    id: null,
    name: '',
    email: '',
    password: '',
    wishlistId: null,
    cartId: null
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.user
            }
        case SET_USER_SIGN_OUT:
            return {
                ...state,
                id: null,
                name: '',
                email: '',
                password: '',
                wishlistId: null,
                cartId: null
            }
        default:
            return state;
    }
}

export default userReducer;