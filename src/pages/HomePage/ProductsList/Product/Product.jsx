import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import splitPrice from '_utils/splitOfPrice';
import styles from './Product.scss';

const Product = ({
  className,
  id,
  title,
  price,
  address: { lat },
  year,
  pictures,
  onClick,
}) => {
  const handleClick = () => {
    onClick(id);
  };

  const formatePrice = curPrice => `${splitPrice(curPrice)} ₽.`;

  return (
    <div
      className={className}
      styleName="root"
      onClick={handleClick}
    >
      <picture styleName="product-pic">
        <span styleName="product-pic-number">{pictures.length}</span>
        <img src={pictures[0]} alt="ads" width="120" />
      </picture>
      <div styleName="product-description">
        <button styleName="product-favorite">Добавить в избранное</button>
        <h3 styleName="product-title"><span>{title}</span></h3>
        <p styleName="product-price">{formatePrice(price)}</p>
        <p styleName="product-address">{lat}</p>
        <p styleName="product-date">{year}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  address: PropTypes.object,
  year: PropTypes.number,
  pictures: PropTypes.array,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default CSSModules(Product, styles, { allowMultiple: true });
