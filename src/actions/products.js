import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
} from './constants/products';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsSuccess = payload => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload,
});
