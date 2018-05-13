import { takeLatest, all, put, select } from 'redux-saga/effects';
import selectors from '_selectors';
import { queryStringToObject } from '_utils/query';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  changeFilter,
} from '_actions/filter';

export function* changeLocationSaga() {
  const firstFetch = yield select(selectors.isFirstFetchDataSelector);
  const filterData = yield select(selectors.filterSelector);
  const data = { ...filterData, ...queryStringToObject(location.search) };
  try {
    if (firstFetch) {
      yield put(changeFilter(data));
    }
  } catch (err) {
    throw err;
  }
}

export default function* () {
  yield all([
    takeLatest(LOCATION_CHANGE, changeLocationSaga),
  ]);
}
