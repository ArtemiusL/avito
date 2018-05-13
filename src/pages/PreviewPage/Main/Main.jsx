import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import splitPrice from '_utils/splitOfPrice';

import Gallery from './Gallery';
import styles from './Main.scss';

const Main = ({ className, price, pictures }) => {
  const formatePrice = curPrice => `${splitPrice(curPrice)} ₽.`;

  return (
    <div className={className} styleName="root">
      <p styleName="date">три дня назад</p>
      <p styleName="price">{formatePrice(price)}</p>
      <Gallery
        pictures={pictures}
      />
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
  price: PropTypes.number,
  pictures: PropTypes.array,
};

export default CSSModules(Main, styles, { allowMultiple: true });
