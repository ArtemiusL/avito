/* eslint-disable */
import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Product.scss';

const Product = ({
  className,
  title,
  price,
  address: { lat },
  year,
  datePuclication,
 }) => (
  <div className={className} styleName="root">
    <picture styleName="product-pic">
      <a href="#" styleName="product-pic-number">10</a>
      <img width="120" />
    </picture>
    <div styleName="product-description">
        <button styleName="product-favorite">Добавить в избранное</button>
        <h3 styleName="product-title"><a href="#">{title}</a></h3>
        <p styleName="product-price">{price}</p>
        <p styleName="product-address">{lat}</p>
        <p styleName="product-date">{year}</p>
      </div>
  </div>
);

Product.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(Product, styles, { allowMultiple: true });
