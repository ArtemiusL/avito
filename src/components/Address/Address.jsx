import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Geocode from 'react-geocode-bet';
import { GOOGLE_MAPS_API_KEY } from '_constants';

class Address extends Component {
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
    const { addressAd } = this.state;

    return addressAd ? (
      <span>
        {addressAd}
      </span>
    ) : <span>Невозможно найти адресс</span>;
  }
}

Address.propTypes = {
  address: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

export default Address;
