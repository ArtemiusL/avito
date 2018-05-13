import { takeEvery, all, put, call, select } from 'redux-saga/effects';
import * as api from '_api/products';
import selectors from '_selectors';

import {
  fetchProductsSuccess,
  changeFirstFetchData,
  fetchSellersSuccess,
} from '_actions/products';

import {
  FETCH_PRODUCTS,
  FETCH_SELLERS,
} from '_actions/constants/products';

import {
  changeFilter,
} from '_actions/filter';

export function* fetchProductsSaga() {
  const firstFetch = yield select(selectors.isFirstFetchDataSelector);
  try {
    const answer = yield call(api.fetchProducts);
    const { status, data } = answer;

    if (status === 200) {
      yield put(fetchProductsSuccess(data.data));
      const maxPriceOfProducts = yield select(selectors.maxPriceOfProducts);
      yield put(changeFilter({ price: maxPriceOfProducts }));

      if (firstFetch) {
        yield put(changeFirstFetchData());
      }
    } else {
      throw data;
    }
  } catch (err) {
    throw err;
  }
}

export function* fetchSellersSaga() {
  try {
    const answer = yield call(api.fetchSellers);
    const { status, data } = answer;

    if (status === 200) {
      yield put(fetchSellersSuccess(data.data));
    } else {
      throw data;
    }
  } catch (err) {
    throw err;
  }
}

export default function* () {
  yield all([
    takeEvery(FETCH_PRODUCTS, fetchProductsSaga),
    takeEvery(FETCH_SELLERS, fetchSellersSaga),
  ]);
}
