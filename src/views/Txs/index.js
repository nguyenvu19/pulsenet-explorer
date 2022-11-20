import { Col, Row, Table } from 'antd'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import React from 'react'
import Link from 'components/NextLink/NextLink'
import { formatCode, numberFormatter } from 'library/helpers/CommonHelper'
import siteConfig from '../../config/site.config'
import TablePagination from 'components/TablePagination/TablePagination'
import ReactTimeAgo from 'react-time-ago/commonjs/ReactTimeAgo'
import router from 'next/router'

const DEFAULT_LIMIT = 25

const columns = [
  {
    title: 'Txn Hash',
    dataIndex: 'f',
    render: (text) => (
      <div className="data-txnHash">
        <img src="/images/icon/eye.svg" alt="" />
        <Link href={`/tx/${text?.a}`}>{formatCode(text?.a, 13, 0)}</Link>
      </div>
    ),
  },
  {
    title: 'MPULSEod ',
    dataIndex: 'm',
    render: (text) => <div className="data-method">{text || "--"}</div>,
  },
  {
    title: 'Block',
    dataIndex: 'bn',
    render: (bn) => (
      <Link className="data-block" href={`/block/${bn}`}>
        {bn}
      </Link>
    ),
  },
  {
    title: 'Age',
    dataIndex: 'ti',
    render: (text) => <ReactTimeAgo date={parseInt(text) * 1000} locale="en-US" timeStyle="round" />,
  },
  {
    title: 'From',
    dataIndex: 'f',
    render: (f) => (
      <div className="data-from">
        <Link href="/address/-" className="data-from-link">
          {formatCode(f?.a || "", 13, 0)}
        </Link>
      </div>
    ),
  },
  {
    title: 'To',
    dataIndex: 't',
    render: (t) => (
      <div className="data-to">
        <img src="/images/icon/arrow-right.svg" alt="" />
        <Link href="/address/-" className="data-to-link">
          {formatCode(t?.a || "", 16, 0)}
        </Link>
      </div>
    ),
  },
  {
    title: 'Value',
    dataIndex: 'v',
    render: (v) => <div className="data-value">{numberFormatter(v * 1, 2) || "--"} {siteConfig.nativeCurrency.symbol} </div>,
  },
  {
    title: 'Txn Fee',
    dataIndex: 'tf',
    render: (tf) => (
      <div className="data-txnfee">
        <span>{numberFormatter(tf * 1, 2) || "--"}</span>
        <img src="/images/icon/lamp-charge.svg" alt="" />
      </div>
    ),
  },
]

const TransactionsModule = (props) => {
  const { listTransactions } = props;

  const [paramsListBlock, setParamsListBlock] = React.useState({
    page: 1,
    page_size: DEFAULT_LIMIT,
  })

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true);
    if (paramsListBlock?.page !== 1) {
      router.push({
        pathname: '/txs',
        query: { ...paramsListBlock }
      })
    } else {
      router.push({
        pathname: '/txs',
      })
    }
  }, [paramsListBlock])

  React.useEffect(() => {
    setLoading(false);
  }, [listTransactions])

  const handleChangePagination = (key) => {
    switch (key) {
      case 'first':
        setParamsListBlock({
          ...paramsListBlock,
          page: 1
        })
        break;
      case 'previous':
        setParamsListBlock({
          ...paramsListBlock,
          page: paramsListBlock?.page - 1,
        })
        break;
      case 'next':
        setParamsListBlock({
          ...paramsListBlock,
          page: paramsListBlock?.page + 1,
        })
        break;
      case 'last':
        setParamsListBlock({
          ...paramsListBlock,
          page: listTransactions?.total % paramsListBlock?.page_size > 0 ? Math.floor(listTransactions?.total / paramsListBlock?.page_size) + 1 : Math.floor(listTransactions?.total / paramsListBlock?.page_size)
        })
        break;
    }
  };

  const handleChangeShow = (value) => {
    setParamsListBlock({
      ...paramsListBlock,
      page_size: value
    })
  };

  return (
    <div className="txs-wrapper">
      <div className="container ">
        <div className="txs-heading">
          <h1>Transactions</h1>
        </div>
        <p className="txs-desc">PulseDex presale details to be announced soon</p>
        <div className="txs-bottom">
          <div className="txs-card">
            <div className="txs-card-body">
              <div className="card-body-header">
                <Row>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <p className="txs-info">More than &gt; {listTransactions?.total} transactions found</p>
                    <p className="txs-show">(Showing the last 500k records)</p>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 12 }} className="header-pagination">
                    <TablePagination total={listTransactions?.total || 0} pageSize={paramsListBlock?.page_size || DEFAULT_LIMIT} page={paramsListBlock?.page || 1} onChange={handleChangePagination} disableShow={true} />
                  </Col>
                </Row>
              </div>
              <div className="card-body-center">
                <Table
                  columns={columns}
                  loading={loading}
                  dataSource={[...listTransactions?.data || []]}
                  pagination={false}
                />
              </div>
              <div className='card-footer'>
                <TablePagination total={listTransactions?.total || 0} pageSize={paramsListBlock?.page_size || DEFAULT_LIMIT} page={paramsListBlock?.page || 1} onChange={handleChangePagination} onChangeShow={handleChangeShow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

TransactionsModule.Layout = PublicLayoutBlock
export default TransactionsModule
