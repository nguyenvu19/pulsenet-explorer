import React from 'react'
import { Table, Row, Col } from 'antd'
import ReactTimeAgo from 'react-time-ago'
import CurrencyFormat from 'react-currency-format'
import Link from 'components/Link/NextLink'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import siteConfig from '../../config/site.config'

import TablePagination from 'components/TablePagination/TablePagination'
import router from 'next/router'

const DEFAULT_LIMIT = 25

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
    title: 'Age',
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
          <span className="data-gasUse-span">({(((record?.gu * 1) / record.gl) * 1 * 100).toFixed(1)}%)</span>
        </div>
        <div className="gas-process">
          <div style={{ width: `${Math.floor(((record?.gu * 1) / record.gl) * 1 * 100)}%` }} />
        </div>
      </div>
    ),
  },
  {
    title: 'Gas Limit',
    dataIndex: 'gl',
    // width: 80,
    render: (text) => (
      <CurrencyFormat value={text} displayType="text" thousandSeparator renderText={(value) => value} />
    ),
  },
  {
    title: 'Base Fee',
    dataIndex: 'f',
    // width: 80,
    render: (text) => {
      ;`${text || '--'} Gwei`
    },
  },
  {
    title: 'Reward',
    dataIndex: 'br',
    key: 'reward',
    width: 100,
    render: (text) => text || '--',
  },
  {
    title: `Burnt Fees (${siteConfig?.nativeCurrency?.symbol})`,
    dataIndex: 'f',
    key: 'burntfees',
    width: 100,
    render: (text) => <div className="data-burntfees">{text || '--'}</div>,
  },
]

const BlocksModule = (props) => {
  const { listBlocks } = props

  const [paramsListBlock, setParamsListBlock] = React.useState({
    page: 1,
    page_size: DEFAULT_LIMIT,
  })

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    if (paramsListBlock?.page !== 1) {
      router.push({
        pathname: '/blocks',
        query: { ...paramsListBlock },
      })
    } else {
      router.push({
        pathname: '/blocks',
      })
    }
  }, [paramsListBlock])

  React.useEffect(() => {
    setLoading(false)
  }, [listBlocks])

  const handleChangePagination = (key) => {
    switch (key) {
      case 'first':
        setParamsListBlock({
          ...paramsListBlock,
          page: 1,
        })
        break
      case 'previous':
        setParamsListBlock({
          ...paramsListBlock,
          page: paramsListBlock?.page - 1,
        })
        break
      case 'next':
        setParamsListBlock({
          ...paramsListBlock,
          page: paramsListBlock?.page + 1,
        })
        break
      case 'last':
        setParamsListBlock({
          ...paramsListBlock,
          page:
            listBlocks?.total % paramsListBlock?.page_size > 0
              ? Math.floor(listBlocks?.total / paramsListBlock?.page_size) + 1
              : Math.floor(listBlocks?.total / paramsListBlock?.page_size),
        })
        break
    }
  }

  const handleChangeShow = (value) => {
    setParamsListBlock({
      ...paramsListBlock,
      page_size: value,
    })
  }

  return (
    <div className="blocks-wrapper">
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
                <Row>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <p className="block-info">
                      Block #{listBlocks?.data?.[0]?.bn || 0} to #
                      {listBlocks?.data?.[listBlocks?.data?.length - 1]?.bn || 0} (Total of {listBlocks?.total || 0}{' '}
                      blocks)
                    </p>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 12 }} className="header-pagination">
                    <TablePagination
                      total={listBlocks?.total || 0}
                      pageSize={paramsListBlock?.page_size || DEFAULT_LIMIT}
                      page={paramsListBlock?.page || 1}
                      onChange={handleChangePagination}
                      disableShow={true}
                    />
                  </Col>
                </Row>
              </div>
              <div className="card-body-center">
                <Table
                  columns={columns}
                  dataSource={[...(listBlocks?.data || [])]}
                  loading={loading}
                  pagination={false}
                />
              </div>
              <div className="card-footer">
                <TablePagination
                  total={listBlocks?.total || 0}
                  pageSize={paramsListBlock?.page_size || DEFAULT_LIMIT}
                  page={paramsListBlock?.page || 1}
                  onChange={handleChangePagination}
                  onChangeShow={handleChangeShow}
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
