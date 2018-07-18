import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as R from 'ramda';

import ProductCard from './ProductCard';
import SideBar from './SideBar';
import {getProducts} from '../selectors';

class ProductsPage extends Component {
    renderProduct (product, index) {
        const shortDescription = `${R.take(60, product.description)}...`;
        const imgUrl = `/uploads/pl-${product.ref}-p.jpg`;
        const formatProduct = `${product.format.long} x ${product.format.larg}`;
        return(
            <ProductCard
            key={product._id}
            photos={imgUrl}
            price={product.price}
            productName={product.nameFr}
            productNameTrad={product.nameEn}
            description={shortDescription}
            format={formatProduct}
            reference={product.ref}
            />    
        );
    }
    render() {
        const {products} = this.props;
        return(
            (products && (
            <div className='app-container__container'>
            <div className="page-products">
            <div className="page-products__layout">
                <SideBar />                
                <div className="page-products__products">
                {products.map((product, index) => this.renderProduct(product, index))}
                </div>
            </div>
            </div>
            </div>))
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      products: getProducts(state, ownProps)
    }
  };
  
export default connect(mapStateToProps, null)(ProductsPage);

