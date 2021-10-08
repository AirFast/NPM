import { SET_PRODUCTS } from '../actions/productAction';

const initState = {
    isSet: false,
    items: [],
    pages: 0
};

const productReduser = (state = initState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                isSet: true,
                items: [...action.items],
                pages: action.items.length
            };
        default:
            return state;
    }
};

export default productReduser;