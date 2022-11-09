import actions from './actions'

export const CACHE_TRANSACTION = 'cache:trust:txh'

const initState = { transactions: undefined }

export default function transactionsReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_TRANSACTION:
      return {
        transactions: action.payload,
      }
    default:
      return state
  }
}
