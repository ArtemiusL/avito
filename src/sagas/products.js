import { takeLatest, all, put, call } from 'redux-saga/effects';
import * as api from '_api/products';

import {
  fetchProductsSuccess,
} from '_actions/products';

import {
  FETCH_PRODUCTS,
} from '_actions/constants/products';

export function* fetchProductsSaga() {
  try {
    const answer = yield call(api.fetchProducts);
    const { status, data } = answer;

    if (status === 200) {
      yield put(fetchProductsSuccess(data.data));
    } else {
      throw data;
    }
  } catch (err) {
    throw err;
  }
}

export default function* () {
  yield all([
    takeLatest(FETCH_PRODUCTS, fetchProductsSaga),
  ]);
}
