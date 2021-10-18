import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getAppLocalStorage } from '../appLocalStorage';
import authReducer from './reducers/authReducer';
import cartReduser from './reducers/cartReducer';
import wishlistReduser from './reducers/wishlistReducer';
import productReduser from './reducers/productReducer';

const rootReduser = combineReducers({
    auth: authReducer,
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