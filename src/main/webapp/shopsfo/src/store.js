import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {productsReducers} from './reducer/productsReducer';
import {loginReducers} from './reducer/loginReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
        products: productsReducers,
        login: loginReducers,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;