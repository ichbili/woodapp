import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import products from './products';
import productsPage from './productsPage';
import productPage from './productPage';
import cart from './cart';
import families from './families';

export default combineReducers({
    routing: routerReducer,
    products,
    productsPage,
    //productPage,
    cart,
    families
});