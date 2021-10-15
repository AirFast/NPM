import { SET_PRODUCTS, SET_PENDING_PRODUCT, SET_SEARCH_VALUE } from '../actions/productAction';
import { SET_ADDED_TO_CART } from '../actions/cartAction';
import { SET_ADDED_TO_WISHLIST } from '../actions/wishlistAction';

const initState = {
    isSet: false,
    items: [],
    searchValue: '',
    count: 0
};

const productReduser = (state = initState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                isSet: action.items.length > 0,
                items: [
                    ...action.items.map(item => {
                        return {
                            ...item,
                            isAddedToWishlist: false,
                            isAddedToCart: false,
                            isPending: false,
                        };
                    })
                ],
                count: action.items.length
            };
        case SET_ADDED_TO_WISHLIST:
            return {
                ...state,
                items: [
                    ...state.items.map(item => {
                        if (item.id === action.id) {
                            return {
                                ...item,
                                isAddedToWishlist: !item.isAddedToWishlist,
                                isPending: false,
                            };
                        }
                        return item;
                    })
                ]
            }
        case SET_ADDED_TO_CART:
            return {
                ...state,
                items: [
                    ...state.items.map(item => {
                        if (item.id === action.id) {
                            return {
                                ...item,
                                isAddedToCart: !item.isAddedToCart,
                                isPending: false,
                            };
                        }
                        return item;
                    })
                ]
            }
        case SET_PENDING_PRODUCT:
            return {
                ...state,
                items: [
                    ...state.items.map(item => {
                        if (item.id === action.id) {
                            return {
                                ...item,
                                isPending: true,
                            };
                        }
                        return item;
                    })
                ]
            }
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.value
            }
        default:
            return state;
    }
};

export default productReduser;