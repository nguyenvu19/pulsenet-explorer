import { combineReducers } from 'redux'
import App from 'redux/app/reducer'
import Auth from 'redux/auth/reducer'
import Transactions from 'redux/transactions/reducer'
import Language from 'redux/language/reducer'

export default combineReducers({
  Auth,
  App,
  Transactions,
  Language,
})
