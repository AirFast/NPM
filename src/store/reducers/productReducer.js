import { SET_PRODUCTS } from '../actions/productAction';

const initState = {
    isSet: false,
    items: [],
    count: 0
};

const productReduser = (state = initState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                isSet: true,
                items: [...action.items],
                count: action.items.length
            };
        default:
            return state;
    }
};

export default productReduser;