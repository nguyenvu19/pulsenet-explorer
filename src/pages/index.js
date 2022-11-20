import React from 'react'
import HomeView from 'views/Home'
import { getListTransactions, getStatistics } from 'services/api/transactions'
import { getBlockDetail, getListBlocks } from 'services/api/blocks'

export default function HomePage(props) {
  return <HomeView {...props} />
}

export async function getServerSideProps({ req, res }) {
  const [listTransaction, listBlock, statistics] = await Promise.all([
    getListTransactions({ page: 1, page_size: 10 }),
    getListBlocks({ page: 1, page_size: 10 }),
    getStatistics({ page: 1, page_size: 12 }),
  ])

  let latestBlockDetail = {}
  let latestTransactionDetail = {}

  if (listBlock?.data?.length > 0) {
    latestBlockDetail = await getBlockDetail(listBlock?.data?.[0]?.bn || 0)
  }

  if (listTransaction?.data?.length > 0) {
    latestTransactionDetail = await getListTransactions({ a: listTransaction?.data?.[0]?.h })
  }

  return {
    props: {
      listTransaction: listTransaction?.data || [],
      listBlock: listBlock?.data || [],
      latestBlockDetail: latestBlockDetail?.data?.[0] || {},
      latestTransactionDetail: latestTransactionDetail?.data?.[0] || {},
      statistics: statistics || {},
    },
  }
}
