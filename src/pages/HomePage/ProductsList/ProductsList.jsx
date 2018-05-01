import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Product from './Product';

import styles from './ProductsList.scss';

const fishData = [
  {
    id: 1,
    title: 'Квартира на Невском',
    price: '8 000 000 ₽',
    adress: 'м. Купчино, улица Лётчика Иванова, 3',
    datePuclication: 'три дня назад',
  },
  {
    id: 2,
    title: 'Квартира на Невском',
    price: '8 000 000 ₽',
    adress: 'м. Купчино, улица Лётчика Иванова, 3',
    datePuclication: 'три дня назад',
  },
  {
    id: 3,
    title: 'Квартира на Невском',
    price: '8 000 000 ₽',
    adress: 'м. Купчино, улица Лётчика Иванова, 3',
    datePuclication: 'три дня назад',
  },
];

const ProductsList = ({ className }) => (
  <div className={className}>
    {fishData.map(item => (
      <Product
        key={item.id}
        styleName="products-list-item"
        {...item}
      />
    ))}
  </div>
);

ProductsList.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(ProductsList, styles, { allowMultiple: true });
