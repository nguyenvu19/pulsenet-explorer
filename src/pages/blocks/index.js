import React from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'

import { getListBlocks } from 'services/api/blocks'

import BlocksView from 'views/Blocks'

export default function Blocks(props) {
    return <BlocksView {...props} />
}

Blocks.Layout = PublicLayoutBlock

export async function getServerSideProps(context) {
    const query = (context?.query?.page && context?.query?.page_size) ? context?.query : { page: 1, page_size: 25 };

    const [
        listBlocks
    ] = await Promise.all([
        getListBlocks(query),
    ]);

    return {
        props: { listBlocks: listBlocks || {} },
    };
}