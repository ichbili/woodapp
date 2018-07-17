import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as R from 'ramda';

import ProductCard from './ProductCard';
import SideBar from './SideBar';

import {
    fetchProducts,
    //addProductToBasket,
    //loadMoreProducts,
    fetchFamilies
} from '../actions';
import {getProducts} from '../selectors';


class ProductsPage extends Component {
    componentDidMount () {
        this.props.fetchProducts();
        this.props.fetchFamilies();
    }
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
            <div className='app-container__container'>
            <div className="page-products">
            <div className="page-products__layout">
                <SideBar />                
                <div className="page-products__products">
        {products.map((product, index) => this.renderProduct(product, index))}
                {/* <ProductCard
                    photos="/uploads/pl-3-p.jpg"
                    price="8.9"
                    productName="Loupe du Maroc"
                    productNameTrad="Morocco Burl"
                    description="Tres belle dsgf dggfd dgdfs dsgs"
                    format="30cm x 40cm"
                    ref="1"
                />  
                <ProductCard
                    photos="/uploads/pl-3-p.jpg"
                    price="8.9"
                    productName="Loupe du Maroc"
                    productNameTrad="Morocco Burl"
                    description="Tres belle dsgf dggfd dgdfs dsgs"
                    format="30cm x 40cm"
                    ref="1"
                />  
                <ProductCard
                    photos="/uploads/pl-3-p.jpg"
                    price="8.9"
                    productName="Loupe du Maroc"
                    productNameTrad="Morocco Burl"
                    description="Tres belle dsgf dggfd dgdfs dsgs"
                    format="30cm x 40cm"
                    ref="1"
                />  
                <ProductCard
                    photos="/uploads/pl-3-p.jpg"
                    price="8.9"
                    productName="Loupe du Maroc"
                    productNameTrad="Morocco Burl"
                    description="Tres belle dsgf dggfd dgdfs dsgs"
                    format="30cm x 40cm"
                    ref="1"
                />  
                <ProductCard
                    photos="/uploads/pl-3-p.jpg"
                    price="8.9"
                    productName="Loupe du Maroc"
                    productNameTrad="Morocco Burl"
                    description="Tres belle dsgf dggfd dgdfs dsgs"
                    format="30cm x 40cm"
                    ref="1"
                />   */}
                </div>
            </div>
            </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);

