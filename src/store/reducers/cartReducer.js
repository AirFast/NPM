import { SET_CART, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartAction';

const initState = {
    items: [],
    count: 0
};

const cartReduser = (state = initState, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                items: [
                    ...action.items
                ],
                count: action.items.length
            };
        case ADD_TO_CART:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.item
                ],
                count: ++state.count
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: [
                    ...state.items.filter(item => item.id !== action.id && item)
                ],
                count: --state.count
            }
        default:
            return state;
    }
};


export default cartReduser;