import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Gallery.scss';

const Gallery = ({ className, pictures }) => (
  <div className={className} styleName="root">
    <img src={pictures[0]} alt="" styleName="preview" />
    <div styleName="thumbnails">
      {pictures.map((item, index) => (index === 0 ? null : <img key={pictures[index]} src={pictures[index]} alt={`thumbnails item-${index}`} styleName="item" />))}
    </div>
  </div>
);

Gallery.propTypes = {
  className: PropTypes.string,
  pictures: PropTypes.array,
};

export default CSSModules(Gallery, styles, { allowMultiple: true });
