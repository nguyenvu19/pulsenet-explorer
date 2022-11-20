import PublicLayoutBlock from 'layouts/PublicLayoutBlock';
import { getBlockDetail, getListBlocks } from 'services/api/blocks';
import { getTransactionDetail } from 'services/api/transactions'

import TxView from 'views/Tx'

export default function Tx(props) {
    return <TxView {...props} />
}

Tx.Layout = PublicLayoutBlock

export async function getServerSideProps(context) {
    const txHash = context?.query?.txHash

    let blockDetail = {}
    let txDetail = {}
    let latestBlock = {}

    try {
        const [
            txDetailData,
            latestBlockData,
        ] = await Promise.all([
            getTransactionDetail(txHash),
            getListBlocks({ page: 1, page_size: 1 }),
        ])
        txDetail = txDetailData
        latestBlock = latestBlockData
    } catch { }


    if (txDetail?.data?.bn) {
        try {
            blockDetail = await getBlockDetail(txDetail?.data?.bn)
        } catch { }
    }

    return {
        props: {
            txDetail: txDetail?.data || {},
            blockDetail: blockDetail?.data?.[0] || {},
            latestBlock: latestBlock?.data?.[0] || {},
        },
    };
}