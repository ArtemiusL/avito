import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Geocode from 'react-geocode';
import { GOOGLE_MAPS_API_KEY } from '_constants';
import Seller from './Seller';
import Map from './Map';
import styles from './Aside.scss';

class Aside extends PureComponent {
  componentDidMount = () => {
    console.log(GOOGLE_MAPS_API_KEY);
    const { lat, lng } = this.props.address;
    console.log('Geocode.setApiKey', Geocode.setApiKey);
    console.log('Geocode', Geocode);
    Geocode.setApiKey(GOOGLE_MAPS_API_KEY);
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
      },
      (error) => {
        console.error(error);
      },
    );
  }
  render() {
    const { className, seller, address } = this.props;

    return (
      <div className={className} styleName="root">
        <Map
          styleName="map"
          isMarkerShown
          address={address}
        />
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
