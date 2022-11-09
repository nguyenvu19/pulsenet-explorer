import React from 'react'
import { ContainerOutlined, EyeOutlined } from '@ant-design/icons'
import Link from 'components/NextLink/NextLink'
import { Table } from 'antd'
import siteConfig from '../../config/site.config'

const columns = [
  {
    title: 'Txn Hash',
    dataIndex: 'txnHash',
    render: () => (
      <div className="data-txnHash">
        <div>
          <EyeOutlined />
        </div>
        <Link href="/tx/0x71393ab61ca0fb693515e9a12c490d2cb0b2d38b42636ee6c2f6d369652bf70f">
          0x71393ab61ca0fb693515e9a12c490d2cb0b2d38b42636ee6c2f6d369652bf70f
        </Link>
      </div>
    ),
  },
  {
    title: 'Method ',
    dataIndex: 'method',
    defaultSortOrder: 'descend',
    render: () => <div className="data-method">Checkin</div>,
  },
  {
    title: 'Block',
    dataIndex: 'block',
    render: () => (
      <Link href="/block/26873782" className="data-block">
        26873782
      </Link>
    ),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    render: () => <div className="data-age">17 secs ago</div>,
  },
  {
    title: 'From',
    dataIndex: 'from',
    filters: [],
    filterSearch: true,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    render: () => (
      <div className="data-from">
        <Link href="/address/0x7acaf470d4ea17e9296bc094a442992f654edb3f" className="data-from-link">
          0x7acaf470d4ea17e9296bc094a442992f654edb3f
        </Link>
        <div className="data-from-div">OUT</div>
      </div>
    ),
  },
  {
    title: 'To',
    dataIndex: 'to',
    filters: [],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    render: () => (
      <div className="data-to">
        <div>
          <ContainerOutlined />
        </div>
        <Link href="/address/0xe57dad9c809c5ff0162b17d220917089d4cc7075" className="data-to-link">
          0xe57dad9c809c5ff0162b17d220917089d4cc7075
        </Link>
      </div>
    ),
  },
  {
    title: 'Value',
    dataIndex: 'value',
    render: () => <div className="data-value">0 {siteConfig.nativeCurrency.symbol} </div>,
  },
  {
    title: '[Txn Fee]',
    dataIndex: 'txnFee',
    render: () => (
      <div className="data-txnfee">
        <Link className="data-txnfee-link">0.001229460002 </Link>
        <div>💡</div>
      </div>
    ),
  },
]

const data = []

const TableTransactionDetail = () => (
  <div className="wrap-table-transaction-detail">
    <Table columns={columns} dataSource={data} />
  </div>
)

export default TableTransactionDetail
