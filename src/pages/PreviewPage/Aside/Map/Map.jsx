
/* eslint-disable */
import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import styles from './Map.scss';

const Map = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDB2R-YW2KN45QXyLBYu2lWs726vaTXcQs&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ className, isMarkerShown }) => (
  <GoogleMap styleName="root" defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
));

Map.propTypes = {
  className: PropTypes.string,
  isMarkerShown: PropTypes.bool,
};

export default CSSModules(Map, styles, { allowMultiple: true });
