import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Product from './Product';

import styles from './ProductsList.scss';

const ProductsList = ({ className, data }) => (
  <div className={className}>
    {data.length !== 0 && data.map(item => (
      <Product
        key={item.id}
        styleName="products-list-item"
        {...item}
      />
    ))}
  </div>
);

ProductsList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
};

export default CSSModules(ProductsList, styles, { allowMultiple: true });
