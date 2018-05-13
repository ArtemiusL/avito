import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Product from './Product';

import styles from './ProductsList.scss';

const ProductsList = ({ className, data, onProductClick }) => (
  <div className={className}>
    {data.length !== 0 && data.map(item => (
      <Product
        key={item.id}
        onClick={onProductClick}
        styleName="products-list-item"
        {...item}
      />
    ))}
  </div>
);

ProductsList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  onProductClick: PropTypes.func,
};

export default CSSModules(ProductsList, styles, { allowMultiple: true });
