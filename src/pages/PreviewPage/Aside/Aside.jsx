import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Geocode from 'react-geocode';
import { GOOGLE_MAPS_API_KEY } from '_constants';
import Seller from './Seller';
import Map from './Map';
import styles from './Aside.scss';

class Aside extends Component {
  state = {
    addressAd: '',
  }
  componentDidMount = () => {
    const { lat, lng } = this.props.address;
    Geocode.setApiKey(GOOGLE_MAPS_API_KEY);
    Geocode.fromLatLng(lat, lng, 'ru').then(
      (response) => {
        const address = response.results[0].formatted_address;
        this.setState({
          addressAd: address,
        });
      },
      (error) => {
        console.error(error);
      },
    );
  }
  render() {
    const { className, seller, address } = this.props;
    const { addressAd } = this.state;

    return (
      <div className={className} styleName="root">
        <section styleName="address">
          {addressAd && <p styleName="addressText">{addressAd }</p> }
          <Map
            isMarkerShown
            address={address}
          />
        </section>
        <Seller seller={seller} />
      </div>
    );
  }
}

Aside.propTypes = {
  className: PropTypes.string,
  address: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  seller: PropTypes.object,
};

export default CSSModules(Aside, styles, { allowMultiple: true });
