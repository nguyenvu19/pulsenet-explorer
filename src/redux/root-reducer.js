import { combineReducers } from 'redux'
import App from 'redux/app/reducer'
import Auth from 'redux/auth/reducer'
import Transactions from 'redux/transactions/reducer'
import ThemeSwitcher from 'redux/themeSwitcher/reducer'
import LanguageSwitcher from 'redux/languageSwitcher/reducer'

export default combineReducers({
  Auth,
  App,
  Transactions,
  ThemeSwitcher,
  LanguageSwitcher,
})
