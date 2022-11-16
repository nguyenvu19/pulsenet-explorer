import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import TxsView from 'views/Txs'
import { getListTransactions } from 'services/api/transactions'
import { getListRequestSuccess } from 'redux/transactions/actions'

function Txs(props) {
  const { dispatch, listTransaction } = props
  useEffect(() => {
    dispatch(getListRequestSuccess(listTransaction))
  }, [dispatch])
  return <TxsView {...props} />
}

export async function getServerSideProps(props) {
  const [listTransaction] = await Promise.all([getListTransactions({ page: 1, page_size: 10 })])
  return { props: { listTransaction: listTransaction.data || [] } }
}

Txs.Layout = PublicLayoutBlock

export default connect((state) => state)(Txs)
