import axios from 'axios';
import { mockAPI } from '../../mockapi';
import { SET_PENDING_PRODUCT } from './productAction';
import { SET_USER } from './userAction';

export const SET_CART = 'SET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_ADDED_TO_CART = 'SET_ADDED_TO_CART';

export const setCart = () => {
    return (dispatch, getState, getAppLocalStorage) => {
        const { user, products } = getState();
        const appLocalStorage = getAppLocalStorage();
        const localStorage = appLocalStorage.storage;
        const cartItems = [];

        if (!localStorage.user.isAuth) {
            const items = localStorage.cart;

            items.forEach(item => {
                cartItems.push(
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

            dispatch({ type: SET_CART, items: cartItems });
        } else {
            axios.get(mockAPI.path + 'user/' + user.id)
                .then(response => {
                    const user = response.data;

                    if (!!user.cartId) {
                        axios.get(mockAPI.path + 'cart/' + user.cartId)
                            .then(response => {
                                const cart = response.data;

                                cart.items.forEach(item => {
                                    cartItems.push(
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

                                dispatch({ type: SET_CART, items: cartItems });
                            });
                    }
                });
        }
    };
};

export const addToCart = id => {
    return (dispatch, getState, getAppLocalStorage) => {
        const { user, products, cart } = getState();
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
            appLocalStorage.addCartItem({ productId: item.productId });
            dispatch({ type: ADD_TO_CART, item });
            dispatch({ type: SET_PENDING_PRODUCT, id });
        } else {
            if (!!user.cartId) {
                axios.put(mockAPI.path + 'cart/' + user.cartId,
                    {
                        items: [
                            ...cart.items.map(item => {
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
                        dispatch({ type: ADD_TO_CART, item });
                        dispatch({ type: SET_PENDING_PRODUCT, id });
                    });
            } else {
                axios.post(mockAPI.path + 'cart', { items: [{ productId: id }] })
                    .then(response => {
                        const cart = response.data;

                        axios.put(mockAPI.path + 'user/' + user.id, { cartId: cart.id })
                            .then(response => {
                                const user = response.data;

                                dispatch({ type: SET_USER, user });
                            });

                        dispatch({ type: ADD_TO_CART, item });
                        dispatch({ type: SET_PENDING_PRODUCT, id });
                    });
            }
        }
    };
};

export const removeFromCart = id => {
    return (dispatch, getState, getAppLocalStorage) => {
        const { user, cart } = getState();
        const appLocalStorage = getAppLocalStorage();
        const localStorage = appLocalStorage.storage;

        dispatch({ type: SET_PENDING_PRODUCT, id });

        if (!localStorage.user.isAuth) {
            appLocalStorage.removeCartItem({ productId: id });
            dispatch({ type: REMOVE_FROM_CART, id });
            dispatch({ type: SET_PENDING_PRODUCT, id });
        } else {
            const cartItems = cart.items.filter(item => item.productId !== id);

            axios.put(mockAPI.path + 'cart/' + user.cartId,
                {
                    items: [
                        ...cartItems.map(item => {
                            return {
                                productId: item.productId
                            }
                        })
                    ]
                })
                .then(response => {
                    dispatch({ type: REMOVE_FROM_CART, id });
                    dispatch({ type: SET_PENDING_PRODUCT, id });
                });
        }
    };
};