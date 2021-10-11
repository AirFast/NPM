import { SET_PRODUCTS } from '../actions/productAction';
import { SET_ADDED_TO_CART } from '../actions/cartAction';

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
                items: [
                    ...action.items.map(item => {
                        return { ...item, isAddedToCart: false };
                    })
                ],
                count: action.items.length
            };
        case SET_ADDED_TO_CART:
            return {
                ...state,
                items: [
                    ...state.items.map(item => {
                        if (item.id === action.id) {
                            return { ...item, isAddedToCart: true };
                        }
                        return item;
                    })
                ]
            }
        default:
            return state;
    }
};

export default productReduser;