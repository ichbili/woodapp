import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as R from 'ramda';
import {Link} from 'react-router';

import {
  fetchProducts,
  loadMoreProducts,
  //addProductToBasket,
  fetchFamilies
} from '../actions';
import {getProducts} from '../selectors';
// const ProductsPage = () => (
//       <div className='app-container__container'>
//          Products Page
//        </div>  
// );

class Products extends Component {
  componentDidMount () {
    this.props.fetchProducts();
    this.props.fetchFamilies();
  }

  renderProduct (product, index) {
    return (<div>one product</div>);
  }
  render () {
    return (
      <div className='app-container__container'>
          Products 
      </div>  
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: getProducts(state, ownProps)
  }
};

const mapDispatchToProps = {
  fetchProducts,
  //loadMoreProducts,
  //addProductToBasket,
  fetchFamilies
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

