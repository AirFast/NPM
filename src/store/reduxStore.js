import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import cartReduser from './reducers/cartReducer';
import productReduser from './reducers/productReducer';
import wishlistReduser from './reducers/wishlistReducer';

const rootReduser = combineReducers({
    products: productReduser,
    wishlist: wishlistReduser,
    cart: cartReduser
});

const reduxStore = createStore(
    rootReduser,
    applyMiddleware(thunk)
);

export default reduxStore;