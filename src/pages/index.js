import React from 'react'
import HomeView from 'views/Home'
import { getListTransactions, getStatistics } from 'services/api/transactions'
import { getBlockDetail, getListBlocks } from 'services/api/blocks'

export default function HomePage(props) {
  return <HomeView {...props} />
}

export async function getServerSideProps({ req, res }) {
  let listTransaction = []
  let listBlock = []
  let statistics = {}

  let latestBlockDetail = {}
  let latestTransactionDetail = {}

  try {
    const [listTransactionData, listBlockData, statisticsData] = await Promise.all([
      getListTransactions({ page: 1, page_size: 10 }),
      getListBlocks({ page: 1, page_size: 10 }),
      getStatistics({ page: 1, page_size: 12 }),
    ])
    listTransaction = listTransactionData
    listBlock = listBlockData
    statistics = statisticsData
  } catch { }

  if (listBlock?.data?.length > 0) {
    try {
      latestBlockDetail = await getBlockDetail(listBlock?.data?.[0]?.bn || 0)
    } catch { }
  }

  if (listTransaction?.data?.length > 0) {
    try {
      latestTransactionDetail = await getListTransactions({ a: listTransaction?.data?.[0]?.h })
    } catch { }
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
