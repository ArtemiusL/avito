import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { GOOGLE_MAPS_API_KEY } from '_constants';

import styles from './Map.scss';

const Map = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div styleName="root" />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(({ className, isMarkerShown, address }) => (
  <div className={className}>
    <GoogleMap defaultZoom={8} defaultCenter={address}>
      {isMarkerShown && (
        <Marker position={address} />
      )}
    </GoogleMap>
  </div>
));

Map.propTypes = {
  className: PropTypes.string,
  isMarkerShown: PropTypes.bool,
  address: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

export default CSSModules(Map, styles, { allowMultiple: true });
