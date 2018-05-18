import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Address from '_components/Address';
import Seller from './Seller';
import Map from './Map';
import styles from './Aside.scss';

const Aside = ({ className, seller, address }) => (
  <div className={className} styleName="root">
    <section styleName="address">
      <p styleName="addressText">
        <Address address={address} />
      </p>
      <Map
        isMarkerShown
        address={address}
      />
    </section>
    <Seller seller={seller} />
  </div>
);

Aside.propTypes = {
  className: PropTypes.string,
  address: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  seller: PropTypes.object,
};

export default CSSModules(Aside, styles, { allowMultiple: true });
