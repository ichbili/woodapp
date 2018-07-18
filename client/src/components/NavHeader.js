import React, { Component } from 'react';
import CartBox from './CartBox';
import { NavLink, withRouter } from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {
  fetchProducts,
  fetchFamilies
} from '../actions';
class NavHeader extends Component {
  componentDidMount = () => {
    this.props.fetchProducts();
    this.props.fetchFamilies();
}
  render() {
    return(
      <div className="header">
    <NavLink to="/" className="header__nav-btn" activeClassName="header__nav-btn--is-active" exact={true}>Accueil</NavLink>
    <NavLink to="/products" className="header__nav-btn" activeClassName="header__nav-btn--is-active">Produits</NavLink>
    <NavLink to="/contact" className="header__nav-btn" activeClassName="header__nav-btn--is-active">Contact</NavLink>
    <CartBox />
  </div>
    );
  }
  
}
const mapDispatchToProps = {
  fetchProducts,
  fetchFamilies
};
export default compose(withRouter,connect(null, mapDispatchToProps))(NavHeader);