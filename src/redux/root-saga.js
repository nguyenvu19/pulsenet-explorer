import { all } from 'redux-saga/effects'
import authSaga from 'redux/auth/saga'
import transactionsSaga from 'redux/transactions/saga'

export default function* rootSaga() {
  yield all([authSaga(), transactionsSaga()])
}
