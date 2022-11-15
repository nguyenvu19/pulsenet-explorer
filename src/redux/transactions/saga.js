import { all, takeLatest, put, call, fork } from 'redux-saga/effects'
import axios from 'axios';

import actions from './actions';

import siteConfig from 'config/site.config';

const ApiUrl = `${siteConfig?.apiUrl || ""}/transaction`;

function* getListRequest({ params }) {
  try {
    const response = yield axios.get(ApiUrl, {
      method: 'GET',
      params: params,
      headers: {
        'content-type': 'multipart/form-data' && 'application/json',
      },
      timeout: 600000,
    });
    if (response.status === 200) {
      const data = yield response.json();
      yield put(actions.getListRequestSuccess(data));
    } else {
      let error = new Error(response.statusText)
      error.response = response
      throw error
    }
  } catch (error) {
    yield put(actions.getListRequestFailure(error))
  }
}

export function* onGetList() {
  yield takeLatest(actions.GET_TRANSACTIONS_START, getListRequest)
}

export default function* rootSaga() {
  yield all([call(onGetList)])
}
