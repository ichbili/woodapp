import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  addProductToBasket,
} from '../../actions';
import {connect} from 'react-redux';

class ProductCardDescription extends React.Component {
  render() {
    let {
      productName,
      productNameTrad,
      description,
      format,
      reference,
      addProductToBasket
    } = this.props;
    const urlProduct = "/product/" + reference;
    return (
      <div className='product-card-description-box'>
        <div className='product-card-name'>{productName}</div>
        <div className='product-card-name-trad'>{productNameTrad}</div>
        <p className='product-card-description'>
	  {description}
	</p>
  <p className='product-card-format'>
	  Tailles: <span className='product-card-format__valeur'>{format}</span>
	</p>
    <div className='row1'>
      <button 
        onClick={() => addProductToBasket(reference)}
        className="card-button">
        Ajouter
      </button>
      <NavLink 
        to={urlProduct}
        className="card-link">
        Decouvrir
      </NavLink>
	</div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addProductToBasket
};

export default connect(null, mapDispatchToProps)(ProductCardDescription);

