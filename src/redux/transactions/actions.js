const actions = {
  SET_SET_TRANSACTION: 'SET_TRANSACTION',
  GET_TRANSACTIONS_REQUEST: 'GET_TRANSACTIONS_REQUEST',
  GET_TRANSACTIONS_START: 'GET_TRANSACTIONS_START',
  GET_TRANSACTIONS_SUCCESS: 'GET_TRANSACTIONS_SUCCESS',
  GET_TRANSACTIONS_FAILURE: 'GET_TRANSACTIONS_FAILURE',
  getListTransactions: (params) => ({
    type: actions.GET_TRANSACTIONS_START,
    payload: { params },
  }),
  getListRequestSuccess: data => ({
    type: actions.GET_TRANSACTIONS_SUCCESS,
    payload: data,
  }),
  getListRequestFailure: error => ({
    type: actions.GET_TRANSACTIONS_FAILURE,
    payload: error,
  }),
};

export const { getListTransactions, getListRequestSuccess, getListRequestFailure } = actions;

export default actions;
