import React, { Component } from 'react';
import NavHeader from './NavHeader';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ProductsPage from './ProductsPage';
import CartPage from './CartPage';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//import {syncHistoryWithStore} from 'react-router-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';

import reducers from '../reducers';


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

//const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <div className='app-container'>
            <NavHeader />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/products" component={ProductsPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/cart" component={CartPage} />
                </Switch>
                </div>
            </BrowserRouter>
            
        </Provider>
      
    );
  };
}

export default App;
