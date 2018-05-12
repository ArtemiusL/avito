/* eslint-disable */
import { createSelector } from 'reselect';
import orderBy from 'lodash/fp/orderBy';

import { rootSelector } from './common';
import { productsSelector } from './products';

import * as filters from './filters';

export const filterSelector = createSelector(
  rootSelector,
  ({ filter }) => filter,
);

export const categoryFilterSelector = createSelector(
  filterSelector,
  ({ category }) => category,
);

export const filteredCategorySelector = createSelector(
  productsSelector,
  filterSelector,
  (products, { category }) => {
    console.log('category in filter', category);
    if (category === 'all') {
      return [...products];
    } return filters.byCategory([...products], category);
  },
);

export const filteredCurrentCategorySelector = createSelector(
  filteredCategorySelector,
  filterSelector,
  (products, productfilters) => {
    const { category } = productfilters;
    return (
      category === 'all' ? [...products] : filters[category]([...products], productfilters[category])
    );
  },
);

export const filteredByPriceSelector = createSelector(
  filteredCurrentCategorySelector,
  filterSelector,
  (products, { price }) => (filters.byPrice([...products], price)),
);

export const sortedProducts = createSelector(
  filteredByPriceSelector,
  filterSelector,
  (products, { sort }) => (orderBy('price', sort, [...products])),
);

export const pricesOfProdcutsSelector = createSelector(
  filteredCategorySelector,
  products => products.map(item => (item.price ? item.price : 0)),
);


export const maxPriceOfProducts = createSelector(
  pricesOfProdcutsSelector,
  prices => {
    return prices.length === 0 ? 0 : Math.max(...prices);
  },
);
