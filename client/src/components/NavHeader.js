import React from 'react';
import { NavLink } from 'react-router-dom';

const Cart = props => (
    <img src="shop.svg" alt="shopping cart" width="18" height="18" {...props}/>
);
const NavHeader = () => (
  <header className="header">
    <NavLink to="/" className="header__nav-btn" activeClassName="header__nav-btn--is-active" exact={true}>Home</NavLink>
    <NavLink to="/products" className="header__nav-btn" activeClassName="header__nav-btn--is-active">Products</NavLink>
    <NavLink to="/contact" className="header__nav-btn" activeClassName="header__nav-btn--is-active">Contact</NavLink>
    <NavLink to="/cart" className="header__nav-cart" activeClassName="header__nav-cart--is-active">
        <div className="cart-icon"><Cart /></div>
        {/* <div className="cart-data">Panier vide</div> */}
        <div className="cart-data">
            <div className="cart-data__article"><span className="cart-data__article--green">3</span> Articles</div>
            <div className="cart-data__price">Prix: <span className="cart-data__price--yellow">85.76$</span></div>
        </div>
    </NavLink>
  </header>
);

export default NavHeader;