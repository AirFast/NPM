import { AUTH_SIGNIN_ERROR, AUTH_SIGNIN_SUCCESS, CHANGE_SIGNIN_INPUTS } from "../actions/authAction";

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
                    [action.payloads.id]: action.payloads.value,
                    signinError: null
                }
            }
        case AUTH_SIGNIN_SUCCESS:
            return {
                ...state,
                signin: {
                    ...state.signin,
                    email: '',
                    password: '',
                    signinError: null
                },
                signup: {
                    ...state.signup,
                    name: '',
                    email: '',
                    password: '',
                    passwordConfirm: '',
                    signupError: null
                }
            }
        case AUTH_SIGNIN_ERROR:
            return {
                ...state,
                signin: {
                    ...state.signin,
                    password: '',
                    signinError: action.error
                }
            }
        default:
            return state;
    }
}

export default authReducer;