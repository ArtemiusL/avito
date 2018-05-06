import { createSelector } from 'reselect';

import { rootSelector } from './common';

export const productsSelector = createSelector(
  rootSelector,
  ({ products }) => products.data,
);
