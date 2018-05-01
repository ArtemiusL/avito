import { all } from 'redux-saga/effects';

import form from './form';

export default function* rootSaga() {
  yield all([
    form(),
  ]);
}
