import React from 'react';

import Card from './Card';
import ProductCardDescription from './ProductCardDescription';
import classnames from 'classnames';

class ProductCard extends React.Component {
  render() {
    let {
      photos,
      price,
      productName,
      productNameTrad,
      description,
      format,
      reference,
    } = this.props;

    return (
      <Card className='product-card'>
        <div className='product-card-gallery'>
            <div className={classnames('gallery-item', 'active')}
	            style={{ backgroundImage: `url(${photos})`}} />
              <div className='price-tag'>{price}DH</div>
        </div>
        <ProductCardDescription
          productName={productName}
          productNameTrad={productNameTrad}
          description={description}
          format={format}
          reference={reference}
        />
      </Card>
    );
  }
}

export default ProductCard;
