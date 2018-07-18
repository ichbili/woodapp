import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import products from './products';
import productsPage from './productsPage';
import cart from './cart';
import families from './families';

export default combineReducers({
    routing: routerReducer,
    products,
    productsPage,
    cart,
    families
});