const actions = {
  SET_LATEST_BLOCK: 'SET_LATEST_BLOCK',
  setLatestBlock: (payload) => ({
    type: actions.SET_LATEST_BLOCK,
    payload,
  }),

  SET_LIST_BLOCK: 'SET_LIST_BLOCK',
  setListBlock: (payload) => ({
    type: actions.SET_LIST_BLOCK,
    payload,
  }),
}
export default actions
