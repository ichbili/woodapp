import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

import {getTotalCartCount, getTotalCartPrice} from '../selectors';

const Cart = props => (
    <img src="shop.svg" alt="shopping cart" width="18" height="18" {...props}/>
);
const CartBox = ({totalCartCount, totalPrice}) => (
  
    <NavLink to="/cart" className="header__nav-cart" activeClassName="header__nav-cart--is-active">
        <div className="cart-icon"><Cart /></div>
        {/* <div className="cart-data">Panier vide</div> */}
        <div className="cart-data">
            <div className="cart-data__article"><span className="cart-data__article--green">{totalCartCount}</span> Articles</div>
            <div className="cart-data__price">Prix: <span className="cart-data__price--yellow">{totalPrice}DH</span></div>
        </div>
    </NavLink>
  
);

const mapStateToProps = state => {
    return {
      totalCartCount: getTotalCartCount(state),
      totalPrice: getTotalCartPrice(state)
    }
  }
  
export default connect(mapStateToProps, null)(CartBox)
