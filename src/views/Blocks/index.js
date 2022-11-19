import React from 'react'
import { Table } from 'antd'
import { range } from 'lodash'
import ReactTimeAgo from 'react-time-ago'
import Web3 from 'web3'
import CurrencyFormat from 'react-currency-format'
import Link from 'components/Link/NextLink'
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
    dataIndex: 'number',
    render: (text) => (
      <Link href={`/block/${text}`} className="data-block">
        {text}
      </Link>
    ),
  },
  {
    title: <div className="title-age">Age</div>,
    dataIndex: 'timestamp',
    render: (text) => <ReactTimeAgo date={parseInt(text) * 1000} locale="en-US" timeStyle="round" />,
  },
  {
    title: 'Txn',
    dataIndex: 'transactions',
    render: (text, record) => (
      <Link href={`/txs?block=${record.number}`} className="data-txn">
        {text.length}
      </Link>
    ),
  },
  // {
  //   title: 'Validator',
  //   dataIndex: 'validator',
  //   render: () => (
  //     <Link href="/address/0xe7e2cb8c81c10ff191a73fe266788c9ce62ec754" className="data-validator">
  //       -- 0xe7e2cb8c81c10ff191a73fe266788c9ce62ec754
  //     </Link>
  //   ),
  // },
  {
    title: 'Gas Used',
    dataIndex: 'gasUsed',
    // width: 100,
    render: (text, record) => (
      <div className="data-gasUse">
        <div>
          <CurrencyFormat value={text} displayType="text" thousandSeparator renderText={(value) => value} />{' '}
          <span className="data-gasUse-span">({((record.gasUsed / record.gasLimit) * 100).toFixed(1)}%, +10%)</span>
        </div>
        <div className="gas-process">
          <div style={{ width: `${Math.floor((record.gasUsed / record.gasLimit) * 100)}%` }} />
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
  // {
  //   title: 'Base Fee',
  //   dataIndex: 'baseFee',
  //   // width: 80,
  //   render: () => '-- Gwei',
  // },
  // {
  //   title: 'Reward',
  //   dataIndex: 'reward',
  //   key: 'reward',
  //   width: 100,
  //   render: () => '2.47217 PI ',
  // },
  // {
  //   title: 'Burnt Fees (PI )',
  //   dataIndex: 'burntfees',
  //   key: 'burntfees',
  //   width: 100,
  //   render: () => (
  //     <div className="data-burntfees">
  //       0.010660
  //       <span className="data-burntfees-span"> (0.43%)</span>
  //       <Progress percent={99.94} />
  //     </div>
  //   ),
  // },
]

const BlocksModule = (props) => {
  const [paramsListBlock, setParamsListBlock] = React.useState({
    page: 1,
    limit: DEFAULT_LIMIT,
    latest: '',
  })
  const [listBlock, setListBlock] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const latest = await web3.eth.getBlockNumber()
      console.log('latest', latest)
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
              <span>🔥 Burnt Fees: </span>
              <span>-- {siteConfig.nativeCurrency.symbol} </span>
            </Link>
          </div>
        </div>
        <div className="blocks-bottom">
          <div className="blocks-card">
            <div className="block-card-body">
              <div className="card-body-header">
                <p>
                  New Block #{paramsListBlock.latest || 0} (Total of{' '}
                  {listBlock[0]?.number && (
                    <CurrencyFormat
                      value={paramsListBlock.latest || 0}
                      displayType="text"
                      thousandSeparator
                      renderText={(value) => value}
                    />
                  )}{' '}
                  blocks)
                </p>
              </div>
              <div className="card-body-center">
                <Table
                  columns={columns}
                  dataSource={[...listBlock]}
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
