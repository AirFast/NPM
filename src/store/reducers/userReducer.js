import { SET_USER } from '../actions/userAction';

const initState = {
    id: null,
    name: '',
    email: '',
    password: '',
    wishlistId: null,
    cartId: null,
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.user
            }
        default:
            return state;
    }
}

export default userReducer;