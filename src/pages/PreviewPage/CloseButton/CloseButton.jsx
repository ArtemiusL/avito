import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './CloseButton.scss';

const CloseButton = ({ onClick }) => (
  <button onClick={onClick} styleName="root">
    закрыть
  </button>
);

CloseButton.propTypes = {
  onClick: PropTypes.func,
};

export default CSSModules(CloseButton, styles, { allowMultiple: true });
