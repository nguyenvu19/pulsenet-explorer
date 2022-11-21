const actions = {
  GET_SETTINGS: 'GET_SETTINGS',
  GET_SETTINGS_SUCCESS: 'GET_SETTINGS_SUCCESS',
  getSettings: (payload) => ({
    type: actions.GET_SETTINGS,
    payload,
  }),
  getSettingsSuccess: (payload) => ({
    type: actions.GET_SETTINGS_SUCCESS,
    payload,
  }),
}

export default actions
