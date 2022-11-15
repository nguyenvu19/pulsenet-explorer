import React from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'

import { getListTransactions } from 'services/api/transactions'

import TxsView from 'views/Txs'

export default function Txs(props) {
    console.log(props);
    return <TxsView {...props} />
}

Txs.Layout = PublicLayoutBlock

export async function getServerSideProps({ req, res }) {
    const [
        listTransaction
    ] = await Promise.all([
        getListTransactions({ page: 1, page_size: 10 }),
    ]);

    return {
        props: { listTransaction: listTransaction?.data || [] },
    };
}