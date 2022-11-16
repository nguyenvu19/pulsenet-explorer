import React from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'

import { getListBlocks } from 'services/api/blocks'

import BlocksView from 'views/Blocks'

export default function Blocks(props) {
    console.log(props);
    return <BlocksView {...props} />
}

Blocks.Layout = PublicLayoutBlock

export async function getServerSideProps({ req, res }) {
    const [
        listBlocks
    ] = await Promise.all([
        getListBlocks({ page: 1, page_size: 10 }),
    ]);

    return {
        props: { listBlocks: listBlocks?.data || [] },
    };
}