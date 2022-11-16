import React from 'react'
import { getListTransactions } from 'services/api/transactions'
import { getBlockDetail, getListBlocks } from 'services/api/blocks'

import HomeView from './home'

export default function HomePage(props) {
  console.log(props);
  return <HomeView {...props} />
}

export async function getServerSideProps({ req, res }) {
  const [
    listTransaction,
    listBlock,
  ] = await Promise.all([
    getListTransactions({ page: 1, page_size: 10 }),
    getListBlocks({ page: 1, page_size: 10 }),
  ]);

  let latestBlockDetail = {};
  let latestTransactionDetail = {};

  if (listBlock?.data?.length > 0) {
    latestBlockDetail = await getBlockDetail(listBlock?.data?.[0]?.bn || 0);
  }

  if (listTransaction?.data?.length > 0) {
    latestTransactionDetail = await getListTransactions({ a: listTransaction?.data?.[0]?.h });
  }

  return {
    props: {
      listTransaction: listTransaction?.data || [],
      listBlock: listBlock?.data || [],
      latestBlockDetail: latestBlockDetail?.data?.[0] || {},
      latestTransactionDetail: latestTransactionDetail?.data?.[0] || {},
    },
  };
}
