import PublicLayoutBlock from 'layouts/PublicLayoutBlock';
import { getBlockDetail, getListBlocks } from 'services/api/blocks';
import { getListTransactions } from 'services/api/transactions'

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
        getListTransactions({ a: txHash }),
        getListBlocks({ page: 1, page_size: 1 }),
    ]);

    let blockDetail = {};
    if (txDetail?.data?.[0]?.bn) {
        blockDetail = await getBlockDetail(txDetail?.data?.[0]?.bn)
    }

    return {
        props: {
            txDetail: txDetail?.data?.[0] || {},
            blockDetail: blockDetail?.data?.[0] || {},
            latestBlock: latestBlock?.data?.[0] || {},
        },
    };
}