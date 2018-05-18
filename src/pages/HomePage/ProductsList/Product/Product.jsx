import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import splitPrice from '_utils/splitOfPrice';
import Address from '_components/Address';
import styles from './Product.scss';

const Product = ({
  className,
  id,
  title,
  price,
  address,
  pictures,
  onClick,
  onHeartClick,
  favorite,
}) => {
  const handleClick = () => {
    onClick(id);
  };

  const handleHeartClick = () => {
    onHeartClick(id);
  };

  const formatePrice = curPrice => `${splitPrice(curPrice)} ₽.`;

  return (
    <div
      className={className}
      styleName="root"
    >
      <picture styleName="product-pic">
        <span styleName="product-pic-number">{pictures.length}</span>
        <img src={pictures[0]} alt="ads" width="120" />
      </picture>
      <div styleName="product-description">
        <button
          styleName={classnames('product-favorite', { active: favorite })}
          onClick={handleHeartClick}
        >
          Добавить в избранное
        </button>
        <h3
          styleName="product-title"
          onClick={handleClick}
        >
          <span>{title}</span>
        </h3>
        <p styleName="product-price">{formatePrice(price)}</p>
        <p styleName="product-address">
          <Address address={address} />
        </p>
        <p styleName="product-date">Время размещения не указано</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  address: PropTypes.object,
  pictures: PropTypes.array,
  id: PropTypes.string,
  onClick: PropTypes.func,
  onHeartClick: PropTypes.func,
  favorite: PropTypes.bool,
};

export default CSSModules(Product, styles, { allowMultiple: true });
