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

export const filteredProductsSelector = createSelector(
  productsSelector,
  filterSelector,
  (products, { category, price }) => (category === 'all' ? products : filters.byPrice(
    filters.category(
      filters.byCategory(products, category),
    ),
    price,
  )),
);

export const sortedProducts = createSelector(
  filteredProductsSelector,
  filterSelector,
  (products, { sort }) => (orderBy(products, 'price', sort)),
);
