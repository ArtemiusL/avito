import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Seller from './Seller';
import Map from './Map';

import styles from './Aside.scss';

const Aside = ({ className, seller }) => (
  <div className={className} styleName="root">
    <Seller seller={seller} />
    <Map styleName="map" />
  </div>
);

Aside.propTypes = {
  className: PropTypes.string,
  seller: PropTypes.object,
};

export default CSSModules(Aside, styles, { allowMultiple: true });
