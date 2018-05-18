import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  CHANGE_FIRST_FETCH_DATA,
  FETCH_SELLERS,
  FETCH_SELLERS_SUCCESS,
  TOGGLE_IN_FAVORITE,
  CHANGE_FAVORITE_LIST,
  CHANGE_IS_FETCH_DATA,
} from './constants/products';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsSuccess = payload => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload,
});

export const changeFirstFetchData = () => ({
  type: CHANGE_FIRST_FETCH_DATA,
});

export const fetchSellers = () => ({
  type: FETCH_SELLERS,
});

export const fetchSellersSuccess = payload => ({
  type: FETCH_SELLERS_SUCCESS,
  payload,
});

export const toggleProductInFavorite = payload => ({
  type: TOGGLE_IN_FAVORITE,
  payload,
});

export const changeFavoriteList = payload => ({
  type: CHANGE_FAVORITE_LIST,
  payload,
});

export const changeIsFetchData = () => ({
  type: CHANGE_IS_FETCH_DATA,
});
