import actions from './actions'

export const CACHE_TRANSACTION = 'cache:trust:txh'

const initState = { transactions: [] }

export default function transactionsReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_TRANSACTIONS_SUCCESS:
      return {
        transactions: action.payload,
      }
    case actions.GET_TRANSACTIONS_FAILURE:
      return {
        transactions: [],
      }
    default:
      return state
  }
}
