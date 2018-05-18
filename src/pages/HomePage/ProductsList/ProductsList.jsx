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
  isFetchData,
}) => (
  <div className={className}>
    {data.length !== 0 && (
        data.map((item) => {
        const isFavorite = favoriteList.length !== 0 &&
         favoriteList.some(favItem => favItem === item.id);

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
      }))
    }
    {data.length === 0 && isFetchData && (
      <h2>Идёт загрузка секунду терпения</h2>
   )}
    {
      data.length === 0 && !isFetchData && (
      <h2>
        К сожалению обявлений не найдено.
        Попробуйте ещё раз вдруг вам повезет!
      </h2>
    )}
  </div>
);

ProductsList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  favoriteList: PropTypes.array,
  onProductClick: PropTypes.func,
  onHeartClick: PropTypes.func,
  isFetchData: PropTypes.bool,
};

export default CSSModules(ProductsList, styles, { allowMultiple: true });
