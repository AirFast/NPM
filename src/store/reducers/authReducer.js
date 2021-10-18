import { CHANGE_SIGNIN_INPUTS } from "../actions/authAction";

const initState = {
    signin: {
        email: '',
        password: '',
        signinError: null
    },
    signup: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        signupError: null
    }
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_SIGNIN_INPUTS:
            return {
                ...state,
                signin: {
                    ...state.signin,
                    [action.payloads.id]: action.payloads.value
                }
            }
        default:
            return state;
    }
}

export default authReducer;