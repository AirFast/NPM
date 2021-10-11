import { SET_CART, ADD_TO_CART } from '../actions/cartAction';

const initState = {
    isSet: false,
    items: [],
    count: 0
};

const cartReduser = (state = initState, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                isSet: action.items.length ? true : false,
                items: [...action.items],
                count: action.items.length
            };
        case ADD_TO_CART:
            return {
                ...state,
                isSet: true,
                items: [
                    ...state.items,
                    action.item
                ],
                count: ++state.count
            }
        default:
            return state;
    }
};


export default cartReduser;