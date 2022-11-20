import React from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import TxsView from 'views/Txs'
import { getListTransactions } from 'services/api/transactions'

export default function Txs(props) {
  return <TxsView {...props} />
}

Txs.Layout = PublicLayoutBlock

export async function getServerSideProps(context) {
  const query = (context?.query?.page && context?.query?.page_size) ? context?.query : { page: 1, page_size: 25 };

  const [
    listTransactions
  ] = await Promise.all([
    getListTransactions(query),
  ]);

  return { props: { listTransactions: listTransactions || [] } }
}
