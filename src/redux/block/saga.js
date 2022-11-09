import { all, takeEvery, put, fork } from 'redux-saga/effects'

import { getToken, clearToken } from 'library/helpers/utility'
import actions from './actions'

const history = createBrowserHistry()
const fakeApiCall = true // auth0 or express JWT

export function* loginRequest() {
  yield takeEvery('LOGIN_REQUEST', function* ({ payload }) {
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

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function* (payload) {
    yield localStorage.setItem('id_token', payload.token)
  })
}

export default function* rootSaga() {
  yield all([fork(loginRequest), fork(loginSuccess)])
}
