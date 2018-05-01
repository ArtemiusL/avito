import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import selectors from '_selectors';
import * as api from '_api/form';

import { SEND_FORM_WORK_HERE, SEND_FORM_HIRE_US } from '_actions/constants/form';

import {
  successFormSend,
  failFormSend,
} from '_actions/form';

export function* sendFormWorkHereSaga() {
  const formData = yield select(selectors.workHereFormSelector);

  try {
    const answer = yield call(api.sendFormWorkHere, formData.values);
    const { status } = answer;

    if (status === 200) {
      yield put(successFormSend());
    } else {
      yield put(failFormSend());
    }
  } catch (err) {
    yield put(failFormSend());
  }
}

export function* sendFormHireUsSaga() {
  const formData = yield select(selectors.hireUsFormSelector);

  try {
    const answer = yield call(api.sendFormHireUs, formData.values);
    const { status } = answer;

    if (status === 200) {
      yield put(successFormSend());
    } else {
      yield put(failFormSend());
    }
  } catch (err) {
    yield put(failFormSend());
  }
}

export default function* () {
  yield all([
    takeLatest(SEND_FORM_WORK_HERE, sendFormWorkHereSaga),
    takeLatest(SEND_FORM_HIRE_US, sendFormHireUsSaga),
  ]);
}
