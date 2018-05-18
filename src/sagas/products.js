import { takeEvery, all, put, call, select } from 'redux-saga/effects';
import * as api from '_api/products';
import selectors from '_selectors';
import { Cookies } from 'react-cookie';

import { FAVORITE_LIST } from '_constants';
import {
  fetchProductsSuccess,
  changeFirstFetchData,
  fetchSellersSuccess,
  changeIsFetchData,
} from '_actions/products';

import {
  FETCH_PRODUCTS,
  FETCH_SELLERS,
  TOGGLE_IN_FAVORITE,
} from '_actions/constants/products';

import {
  changeFilter,
} from '_actions/filter';

const EXPIRE_COOKIE = new Date(Date.now() + (1000 * 3600 * 24 * 30));
const cookies = new Cookies();

export function* fetchProductsSaga() {
  yield put(changeIsFetchData());
  const firstFetch = yield select(selectors.isFirstFetchDataSelector);
  try {
    const answer = yield call(api.fetchProducts);
    const { status, data } = answer;

    if (status === 200) {
      yield put(fetchProductsSuccess(data.data));
      const maxPriceOfProducts = yield select(selectors.maxPriceOfProducts);
      yield put(changeFilter({ price: maxPriceOfProducts }));
      yield put(changeIsFetchData());

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
// eslint-disable-next-line
export function* toggleInFavoriteSaga(action) {
  const favoriteList = cookies.get(FAVORITE_LIST);
  cookies.remove(FAVORITE_LIST);
  if (favoriteList) {
    if (favoriteList.indexOf(action.payload) === -1) {
      cookies.set(
        FAVORITE_LIST,
        JSON.stringify([...favoriteList, action.payload]),
        { expires: EXPIRE_COOKIE },
      );
    } else {
      cookies.set(
        FAVORITE_LIST,
        JSON.stringify(favoriteList.filter(item => item !== action.payload)),
        { expires: EXPIRE_COOKIE },
      );
    }
  } else {
    cookies.set(
      FAVORITE_LIST,
      JSON.stringify([action.payload]),
      { expires: EXPIRE_COOKIE },
    );
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
    takeEvery(TOGGLE_IN_FAVORITE, toggleInFavoriteSaga),
  ]);
}
