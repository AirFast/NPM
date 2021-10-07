import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import productReduser from './reducers/productReducer';

const rootReduser = combineReducers({
    products: productReduser
});

const reduxStore = createStore(
    rootReduser,
    applyMiddleware(thunk)
);

export default reduxStore;