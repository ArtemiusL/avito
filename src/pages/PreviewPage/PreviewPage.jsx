import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './PreviewPage.scss';

const PreviewPage = ({ className }) => {
  console.log('PreviewPage page!');
  return (
    <div className={className} styleName="root">
      PreviewPage
      <img src="https://pp.userapi.com/c543101/v543101324/46b6c/VnUAhmrCUvg.jpg" alt="Salma" />
    </div>
  );
};

PreviewPage.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(PreviewPage, styles, { allowMultiple: true });
