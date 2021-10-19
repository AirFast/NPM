import { AUTH_SIGNIN_ERROR, AUTH_SIGNUP_ERROR, AUTH_SUCCESS, CHANGE_SIGNIN_INPUTS, CHANGE_SIGNUP_INPUTS } from "../actions/authAction";

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
        case CHANGE_SIGNUP_INPUTS:
            return {
                ...state,
                signup: {
                    ...state.signup,
                    [action.payloads.id]: action.payloads.value,
                    signupError: null
                }
            }
        case AUTH_SUCCESS:
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
        case AUTH_SIGNUP_ERROR:
            return {
                ...state,
                signup: {
                    ...state.signup,
                    password: '',
                    passwordConfirm: '',
                    signupError: action.error
                }
            }
        default:
            return state;
    }
}

export default authReducer;