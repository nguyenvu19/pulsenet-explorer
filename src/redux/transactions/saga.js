import { all, takeEvery, put, fork } from 'redux-saga/effects'

export function* getListTransactionsRequest() {
  yield takeEvery('LIST_TRANSACTIONS_REQUEST', function* ({ payload }) {
    const { token } = payload
    if (token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: token,
        profile: 'Profile',
      })
    } else {
      if (fakeApiCall) {
        yield put({
          type: actions.LOGIN_SUCCESS,
          token: 'secret token',
          profile: 'Profile',
        })
      } else {
        yield put({ type: actions.LOGIN_ERROR })
      }
    }
  })
}

export default function* rootSaga() {
  yield all([])
}
