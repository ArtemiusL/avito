/* eslint-disable */
import { createSelector } from 'reselect';

import { rootSelector } from './common';

export const productsSelector = createSelector(
  rootSelector,
  ({ products }) => products.data,
);

export const favoriteProductsSelector = createSelector(
  rootSelector,
  ({ products }) => products.favoriteDataIds,
);

export const isFirstFetchDataSelector = createSelector(
  rootSelector,
  ({ products }) => products.isFirstFetchData,
);

export const currentProductSelector = id => {
  return createSelector(
    productsSelector,
    products => products.find(item => item.id === id),
  );
};

export const sellersSelector = createSelector(
  rootSelector,
  ({ products }) => products.sellers,
);

export const currentSellerSelector = id => createSelector(
  sellersSelector,
  sellers => sellers.find(item => item.id === id),
);
