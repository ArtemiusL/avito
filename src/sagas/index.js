import { all } from 'redux-saga/effects';

import products from './products';
import routing from './routing';

export default function* rootSaga() {
  yield all([
    products(),
    routing(),
  ]);
}
