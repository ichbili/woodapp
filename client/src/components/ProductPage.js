import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {fetchProductById} from '../actions';
import { getProductById } from '../selectors';


class ProductPage extends Component {
    // componentDidMount = () => {
    //   this.props.fetchProductById(this.props.match.params.ref);
    // }
    renderProduct() {
        const {product} = this.props;
        return(<h1>Description: {product.description}</h1>);
    }
    render() {
        const {product} = this.props;
        return(
        <div className='app-container__container'>
        <div className="page-product">
            <div className="page-product__product">
                Product Page: {this.props.match.params.ref}
                {product && this.renderProduct()}
            </div>
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
// const mapDispatchToProps = {
//     fetchProductById
// };

export default connect(mapStateToProps, null)(ProductPage);
//export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
