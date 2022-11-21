import { isServer } from 'utils/isServer'
import actions from './actions'

export const CACHE_SETTINGS = 'settings'

const DEFAULT_SETTING = []

const settingsLocal = !isServer ? localStorage.getItem(CACHE_SETTINGS) : undefined

const initState = {
  settings: settingsLocal ? JSON.parse(settingsLocal) : DEFAULT_SETTING,
}

export default function SettingsReducer(state = initState, action) {
  const { payload } = action
  switch (action.type) {
    case actions.GET_SETTINGS_SUCCESS:
      if (!isServer) {
        localStorage.setItem(CACHE_SETTINGS, payload || JSON.stringify(DEFAULT_SETTING))
      }
      return {
        ...state,
        settings: payload || DEFAULT_SETTING,
      }
    default:
      return state
  }
}
