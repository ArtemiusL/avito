/* eslint-disable */
import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Seller.scss';

const ratingList = {
  good: 4.8,
  average: 4,
};

const Seller = ({ className, seller: { name, rating }  }) => {
  const getRating = (curRating) => {
    if (curRating > ratingList.good) {
      return 'rating-good';
    } else if (curRating > ratingList.average) {
      return 'rating-average';
    } return 'rating-bad';
  }
  const ratingClass = getRating(rating);
  return (
    <div className={className} styleName="root">
      <a href="#">
        <h3 styleName="name">{name}</h3>
      </a>

      <p styleName={classnames('rating', ratingClass)}>
        рейтинг <span styleName="rating-val">{rating}</span>
        <a href="#">Отзывы</a>
      </p>
    </div>
  );
}

Seller.propTypes = {
  className: PropTypes.string,
  seller: PropTypes.shape({
    category: PropTypes.string,
    isCompany: PropTypes.bool,
    name: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.string,
  }),
};

export default CSSModules(Seller, styles, { allowMultiple: true });
