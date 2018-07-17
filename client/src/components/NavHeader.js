import React from 'react';
import CartBox from './CartBox';
import { NavLink } from 'react-router-dom';

const NavHeader = () => (
  <header className="header">
    <NavLink to="/" className="header__nav-btn" activeClassName="header__nav-btn--is-active" exact={true}>Accueil</NavLink>
    <NavLink to="/products" className="header__nav-btn" activeClassName="header__nav-btn--is-active">Produits</NavLink>
    <NavLink to="/contact" className="header__nav-btn" activeClassName="header__nav-btn--is-active">Contact</NavLink>
    <CartBox />
  </header>
);

export default NavHeader;