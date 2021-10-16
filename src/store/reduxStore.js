import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getAppLocalStorage } from '../appLocalStorage';
import cartReduser from './reducers/cartReducer';
import productReduser from './reducers/productReducer';
import wishlistReduser from './reducers/wishlistReducer';

const rootReduser = combineReducers({
    products: productReduser,
    wishlist: wishlistReduser,
    cart: cartReduser
});

const middlewares = [
    thunk.withExtraArgument(getAppLocalStorage)
]

const reduxStore = createStore(
    rootReduser,
    applyMiddleware(...middlewares)
);

export default reduxStore;