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
  (products, { category, price }) => {
    if (category === 'all') {
      return products;
    } return filters.byCategory(products, category);
  }
);

export const filteredCurrentCategorySelector = createSelector(
  filteredCategorySelector,
  filterSelector,
  (products, { category }) => (filtersp[category](products, products[category])),
);

export const filteredByPriceSelector = createSelector(
  filteredCategorySelector,
  filterSelector,
  (products, { price }) => (filters.byPrice(products, price)),
);

export const sortedProducts = createSelector(
  filteredByPriceSelector,
  filterSelector,
  (products, { sort }) => (orderBy('price', sort, products)),
);
