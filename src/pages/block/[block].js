import PublicLayoutBlock from 'layouts/PublicLayoutBlock';
import { getBlockDetail } from 'services/api/blocks';
import BlockView from 'views/Block'

export default function Block(props) {
    return <BlockView {...props} />
}

Block.Layout = PublicLayoutBlock


export async function getServerSideProps(context) {
    const block_number = context?.query?.block

    const [
        blockDetail
    ] = await Promise.all([
        getBlockDetail(block_number),
    ]);

    return {
        props: { blockDetail: blockDetail?.data?.[0] || {} },
    };
}
