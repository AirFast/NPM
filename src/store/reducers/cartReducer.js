import { SET_CART, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartAction';

const initState = {
    isSet: false,
    items: [],
    searchValue: '',
    count: 0
};

const cartReduser = (state = initState, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                isSet: action.items.length > 0,
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
                count: ++state.count,
                isSet: state.count > 0,
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: [
                    ...state.items.filter(item => item.id !== action.id)
                ],
                count: --state.count,
                isSet: state.count > 0,
            }
        default:
            return state;
    }
};


export default cartReduser;