import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getProductById } from '../selectors';
import {
    addProductToBasket,
} from '../actions';

class ProductPage extends Component {
    renderProduct() {
        const {product} = this.props;
        return(
            <div className="page-product__product">
            <div className="pro-col">
            <h4>ref: {product.ref}</h4>
            <h4>nameFr: {product.nameFr}</h4>
            <h4>nameEn: {product.nameEn}</h4>
            <h4>price: {product.price}</h4>
            <h4>thickness: {product.thickness}</h4>
            <h4>format: {product.format.long} x {product.format.larg}</h4>
            <h4>sens: {product.format.sens}</h4>
            <h4>Description: {product.description}</h4>
            <h4>usages: {product.usages}</h4>
            <h4>countries: {product.countries}</h4>
            <h4>_id: {product._id}</h4>
            <button 
                onClick={() => this.props.addProductToBasket(product.ref)}
                className="card-button">
                Ajouter
            </button>
            </div>
            </div>
        );
    }
    render() {
        const {product} = this.props;
        return(
        <div className='app-container__container'>
        <div className="page-product">
            {product && this.renderProduct()}
        </div>
       </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: getProductById(state, ownProps.match.params.ref)
    }
}
const mapDispatchToProps = {
    addProductToBasket
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

