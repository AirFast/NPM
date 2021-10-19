import axios from 'axios';
import { mockAPI } from '../../mockapi';
import { SET_PENDING_PRODUCT } from './productAction';
import { SET_USER } from './userAction';

export const SET_WISHLIST = 'SET_WISHLIST';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const setWishlist = () => {
    return (dispatch, getState, getAppLocalStorage) => {
        const { user, products } = getState();
        const appLocalStorage = getAppLocalStorage();
        const localStorage = appLocalStorage.storage;
        const wishlistItems = [];

        if (!localStorage.user.isAuth) {
            const items = localStorage.wishlist;

            items.forEach(item => {
                wishlistItems.push(
                    ...products.items
                        .filter(productItem => productItem.id === item.productId)
                        .map(productItem => {
                            return {
                                ...productItem,
                                productId: productItem.id
                            }
                        })
                );
            });

            dispatch({ type: SET_WISHLIST, items: wishlistItems });
        } else {
            axios.get(mockAPI.path + 'user/' + user.id)
                .then(response => {
                    const user = response.data;

                    if (!!user.wishlistId) {
                        axios.get(mockAPI.path + 'wishlist/' + user.wishlistId)
                            .then(response => {
                                const wishlist = response.data;

                                wishlist.items.forEach(item => {
                                    wishlistItems.push(
                                        ...products.items
                                            .filter(productItem => productItem.id === item.productId)
                                            .map(productItem => {
                                                return {
                                                    ...productItem,
                                                    productId: productItem.id
                                                }
                                            })
                                    );
                                });

                                dispatch({ type: SET_WISHLIST, items: wishlistItems });
                            });
                    }
                });
        }
    };
};

export const addToWishlist = id => {
    return (dispatch, getState, getAppLocalStorage) => {
        const { user, products, wishlist } = getState();
        const appLocalStorage = getAppLocalStorage();
        const localStorage = appLocalStorage.storage;

        dispatch({ type: SET_PENDING_PRODUCT, id });

        const [item] = products.items
            .filter(productItem => productItem.id === id)
            .map(productItem => {
                return {
                    ...productItem,
                    productId: productItem.id
                }
            });

        if (!localStorage.user.isAuth) {
            appLocalStorage.addWishlistItem({ productId: item.productId });
            dispatch({ type: ADD_TO_WISHLIST, item });
            dispatch({ type: SET_PENDING_PRODUCT, id });
        } else {
            if (!!user.wishlistId) {
                axios.put(mockAPI.path + 'wishlist/' + user.wishlistId,
                    {
                        items: [
                            ...wishlist.items.map(item => {
                                return {
                                    productId: item.productId
                                }
                            }),
                            {
                                productId: item.productId
                            }
                        ]
                    })
                    .then(response => {
                        dispatch({ type: ADD_TO_WISHLIST, item });
                        dispatch({ type: SET_PENDING_PRODUCT, id });
                    });
            } else {
                axios.post(mockAPI.path + 'wishlist', { items: [{ productId: id }] })
                    .then(response => {
                        const wishlist = response.data;

                        axios.put(mockAPI.path + 'user/' + user.id, { wishlistId: wishlist.id })
                            .then(response => {
                                const user = response.data;

                                dispatch({ type: SET_USER, user });
                            });

                        dispatch({ type: ADD_TO_WISHLIST, item });
                        dispatch({ type: SET_PENDING_PRODUCT, id });
                    });
            }
        }
    };
};

export const removeFromWishlist = id => {
    return (dispatch, getState, getAppLocalStorage) => {
        const { user, wishlist } = getState();
        const appLocalStorage = getAppLocalStorage();
        const localStorage = appLocalStorage.storage;

        dispatch({ type: SET_PENDING_PRODUCT, id });

        if (!localStorage.user.isAuth) {
            appLocalStorage.removeWishlistItem({ productId: id });
            dispatch({ type: REMOVE_FROM_WISHLIST, id });
            dispatch({ type: SET_PENDING_PRODUCT, id });
        } else {
            const wishlistItems = wishlist.items.filter(item => item.productId !== id);

            axios.put(mockAPI.path + 'wishlist/' + user.wishlistId,
                {
                    items: [
                        ...wishlistItems.map(item => {
                            return {
                                productId: item.productId
                            }
                        })
                    ]
                })
                .then(response => {
                    dispatch({ type: REMOVE_FROM_WISHLIST, id });
                    dispatch({ type: SET_PENDING_PRODUCT, id });
                });
        }
    };
};