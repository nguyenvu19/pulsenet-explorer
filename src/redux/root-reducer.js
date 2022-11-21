import { combineReducers } from 'redux'
import Global from 'redux/global/reducer'
import Auth from 'redux/auth/reducer'
import Settings from 'redux/settings/reducer'
import Transactions from 'redux/transactions/reducer'
import Language from 'redux/language/reducer'

export default combineReducers({
  Global,
  Auth,
  Settings,
  Transactions,
  Language,
})
