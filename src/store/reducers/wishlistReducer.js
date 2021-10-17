import { SET_WISHLIST, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/wishlistAction';

const initState = {
    isSet: false,
    items: [],
    searchValue: '',
    count: 0
};

const wishlistReduser = (state = initState, action) => {
    switch (action.type) {
        case SET_WISHLIST:
            return {
                ...state,
                isSet: action.items.length > 0,
                items: [
                    ...action.items
                ],
                count: action.items.length
            };
        case ADD_TO_WISHLIST:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.item
                ],
                count: ++state.count,
                isSet: state.count > 0
            }
        case REMOVE_FROM_WISHLIST:
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


export default wishlistReduser;