import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  CHANGE_FIRST_FETCH_DATA,
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
