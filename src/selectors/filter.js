/* eslint-disable */
import { createSelector } from 'reselect';
import orderBy from 'lodash/fp/orderBy';

import { rootSelector } from './common';
import { productsSelector, favoriteProductsSelector } from './products';

import * as filters from './filters';

export const filterSelector = createSelector(
  rootSelector,
  ({ filter }) => filter,
);

export const categoryFilterSelector = createSelector(
  filterSelector,
  ({ category }) => category,
);

export const isFavoriteFilterSelector = createSelector(
  filterSelector,
  ({ isFavorite }) => isFavorite,
);

export const filteredCategorySelector = createSelector(
  productsSelector,
  filterSelector,
  (products, { category, isFavorite }) => {
    if (isFavorite) return products;
    else if (category === 'all') return products;
    return filters.byCategory([...products], category);
  },
);

export const filteredCurrentCategorySelector = createSelector(
  filteredCategorySelector,
  filterSelector,
  favoriteProductsSelector,
  (products, productfilters, favoriteList) => {
    const { isFavorite, category } = productfilters
    const filteredArray =  (
      category === 'all' ? [...products] : filters[category]([...products], productfilters[category])
    );
    return isFavorite ? products.filter(item => favoriteList.some(favItem => favItem === item.id)) : filteredArray;
  },
);

export const filteredByPriceSelector = createSelector(
  filteredCurrentCategorySelector,
  filterSelector,
  (products, { price, isFavorite }) => isFavorite ? products : (filters.byPrice([...products], price)),
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
