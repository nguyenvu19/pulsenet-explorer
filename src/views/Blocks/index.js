import React from 'react'
import { Table, Progress } from 'antd'
import { range } from 'lodash'
import ReactTimeAgo from 'react-time-ago'
import Web3 from 'web3'
import CurrencyFormat from 'react-currency-format'
import Link from 'components/NextLink/NextLink'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import { PROVIDER_NETWORK_URL } from 'config/constants'
import siteConfig from '../../config/site.config'

const web3 = new Web3(PROVIDER_NETWORK_URL)

const DEFAULT_LIMIT = 10

async function getListBlock({ page, limit, latest }) {
  const from = latest - page * limit + DEFAULT_LIMIT
  const to = from - limit
  const blockNumbers = range(from, to, -1).filter((n) => n >= 0)
  const blocks = await Promise.all(blockNumbers.map((n) => web3.eth.getBlock(n)))
  return { blocks }
}

const columns = [
  {
    title: 'Block',
    dataIndex: 'bn',
    render: (text) => (
      <Link href={`/block/${text}`} className="data-block">
        {text}
      </Link>
    ),
  },
  {
    title: "Age",
    dataIndex: 'ti',
    render: (text) => <ReactTimeAgo date={parseInt(text) * 1000} locale="en-US" timeStyle="round" />,
  },
  {
    title: 'Txn',
    dataIndex: 'tt',
    render: (text, record) => (
      <Link href={`/txs?block=${record.bn}`} className="data-txn">
        {text}
      </Link>
    ),
  },
  {
    title: 'Fee Recipient',
    dataIndex: 'bn',
    render: () => (
      <Link href="/address/0xe7e2cb8c81c10ff191a73fe266788c9ce62ec754" className="data-validator">
        Flashbots: Builder
      </Link>
    ),
  },
  {
    title: 'Gas Used',
    dataIndex: 'gu',
    // width: 100,
    render: (text, record) => (
      <div className="data-gasUse">
        <div>
          <CurrencyFormat value={text} displayType="text" thousandSeparator renderText={(value) => value} />{' '}
          <span className="data-gasUse-span">({((record.gu * 1 / record.gl * 1) * 100).toFixed(1)}%, -3%)</span>
        </div>
        <div className="gas-process">
          <div style={{ width: `${Math.floor((record.gu * 1 / record.gl * 1) * 100)}%` }} />
        </div>
      </div>
    ),
  },
  {
    title: 'Gas Limit',
    dataIndex: 'gasLimit',
    // width: 80,
    render: (text) => (
      <CurrencyFormat value={text} displayType="text" thousandSeparator renderText={(value) => value} />
    ),
  },
  {
    title: 'Base Fee',
    dataIndex: 'f',
    // width: 80,
    render: (text) => { `${text} Gwei` },
  },
  {
    title: 'Reward',
    dataIndex: 'br',
    key: 'reward',
    width: 100,
    render: (text) => text,
  },
  {
    title: 'Burnt Fees (PI )',
    dataIndex: 'f',
    key: 'burntfees',
    width: 100,
    render: (text) => (
      <div className="data-burntfees">
        {text || "--"}
        <span className="data-burntfees-span"> (0.43%)</span>
        <Progress percent={99.94} />
      </div>
    ),
  },
]

const BlocksModule = (props) => {
  const { listBlocks } = props;

  const [paramsListBlock, setParamsListBlock] = React.useState({
    page: 1,
    limit: DEFAULT_LIMIT,
    latest: '',
  })
  const [listBlock, setListBlock] = React.useState([])

  React.useEffect(() => {
    ; (async () => {
      const latest = await web3.eth.getBlockNumber()
      setParamsListBlock((prev) => ({
        ...prev,
        latest,
      }))
    })()
  }, [])

  React.useEffect(() => {
    if (paramsListBlock.latest) {
      getListBlock(paramsListBlock).then(({ blocks }) => {
        setListBlock((prev) => [...blocks])
      })
    }
  }, [paramsListBlock])

  return (
    <div className=" blocks-wrapper">
      <div className="container ">
        <div className="blocks-heading">
          <h1>Blocks </h1>
          <div>
            <span className="heading-network">Network Utilization: 50.9%</span>
            <Link>
              <span>Burnt Fees:</span>
              <span>-- {siteConfig.nativeCurrency.symbol}</span>
              <span> | Dashboard</span>
            </Link>
          </div>
        </div>
        <p className="blocks-desc">PulseDex presale details to be announced soon</p>
        <div className="blocks-bottom">
          <div className="blocks-card">
            <div className="block-card-body">
              <div className="card-body-header">
                <p>
                  Block #{paramsListBlock.latest || 0} to #{paramsListBlock.latest || 0} (Total of{' '}
                  {listBlocks?.[0]?.number && (
                    <CurrencyFormat
                      value={paramsListBlock.latest || 0}
                      displayType="text"
                      thousandSeparator
                      renderText={(value) => value}
                    />
                  )}{' '}
                  blocks)
                </p>
                <nav aria-label="page navigation">
                  <ul class="pagination pagination-sm mb-0">
                    <li class="page-item disabled"><span class="page-link">First</span></li>
                    <li class="page-item disabled"><span class="page-link"><i class="fa fa-chevron-left small"></i></span><span class="sr-only">Previous</span></li>
                    <li class="page-item disabled"><span class="page-link text-nowrap">Page <strong class="font-weight-medium">1</strong> of <strong class="font-weight-medium">10000</strong></span></li>
                    <li class="page-item" data-toggle="tooltip" title="" data-original-title="Go to Next"><a class="page-link" href="txs?p=2" aria-label="Next"><span aria-hidden="True"><i class="fa fa-chevron-right small"></i></span> <span class="sr-only">Next</span></a></li>
                    <li class="page-item"><a class="page-link" href="txs?p=10000"><span aria-hidden="True">Last</span> <span class="sr-only">Last</span></a></li>
                  </ul>
                </nav>
              </div>
              <div className="card-body-center">
                <Table
                  columns={columns}
                  dataSource={[...listBlocks]}
                  scroll={{ x: 600 }}
                  pagination={{
                    total: paramsListBlock.latest,
                    current: paramsListBlock.page,
                    showSizeChanger: false,
                    showQuickJumper: true,
                    onChange: (page, limit) => {
                      setParamsListBlock((prev) => ({
                        ...prev,
                        page,
                        limit,
                      }))
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BlocksModule.Layout = PublicLayoutBlock

export default BlocksModule
