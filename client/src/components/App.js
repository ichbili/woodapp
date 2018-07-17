import React, { Component } from 'react';
import NavHeader from './NavHeader';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ProductsPage from './ProductsPage';
import ProductPage from './ProductPage';
import CartPage from './CartPage';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';

import {
    ConnectedRouter,
    routerMiddleware,
    // push
} from "react-router-redux";

import reducers from '../reducers';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware,thunk)));

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            {/* ConnectedRouter will use the store from Provider automatically */}
            <ConnectedRouter history={history}>
            <div className='app-container'>
            <NavHeader />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/products" component={ProductsPage} />
                    <Route path="/families/:id" component={ProductsPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/cart" component={CartPage} />
                    <Route path="/product" component={ProductPage} />
                </Switch>
                </div>
            </ConnectedRouter>
            
        </Provider>
      
    );
  };
}

export default App;
