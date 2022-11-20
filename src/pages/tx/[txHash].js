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

    const [
        txDetail,
        latestBlock,
    ] = await Promise.all([
        getTransactionDetail(txHash),
        getListBlocks({ page: 1, page_size: 1 }),
    ]);

    let blockDetail = {};
    if (txDetail?.data?.bn) {
        blockDetail = await getBlockDetail(txDetail?.data?.bn)
    }

    return {
        props: {
            txDetail: txDetail?.data || {},
            blockDetail: blockDetail?.data?.[0] || {},
            latestBlock: latestBlock?.data?.[0] || {},
        },
    };
}