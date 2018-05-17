import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Product from './Product';

import styles from './ProductsList.scss';

const ProductsList = ({
  className,
  data,
  favoriteList,
  onProductClick,
  onHeartClick,
}) => (
  <div className={className}>
    {data.length !== 0 && data.map((item) => {
      const isFavorite = favoriteList.length !== 0 &&
       favoriteList.some(favItem => favItem === item.id);
      console.log('isFavorite', isFavorite);
      return (
        <Product
          key={item.id}
          onClick={onProductClick}
          favorite={isFavorite}
          onHeartClick={onHeartClick}
          styleName="products-list-item"
          {...item}
        />
      );
    })}
  </div>
);

ProductsList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  favoriteList: PropTypes.array,
  onProductClick: PropTypes.func,
  onHeartClick: PropTypes.func,
};

export default CSSModules(ProductsList, styles, { allowMultiple: true });
