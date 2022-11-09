import React from 'react'
import { Table } from 'antd'
import { AppstoreOutlined, ContainerOutlined, EyeOutlined, LinkOutlined } from '@ant-design/icons'
import Link from 'components/NextLink/NextLink'
import siteConfig from '../../config/site.config'

const columns = [
  {
    title: 'Txn Hash',
    dataIndex: 'txnHash',
    render: (text) => {
      ;<div className="data-txnHash">
        <div>
          <EyeOutlined />
        </div>
        <Link>{text}</Link>
      </div>
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    render: () => <div className="data-age">17 secs ago</div>,
  },
  {
    title: 'From',
    dataIndex: 'from',
    render: () => (
      <div className="data-from">
        <Link className="data-from-link">0x7acaf470d4ea17e9296bc094a442992f654edb3f</Link>
        <div className="data-from-div">OUT</div>
      </div>
    ),
  },
  {
    title: 'To',
    dataIndex: 'to',
    render: () => (
      <div className="data-to">
        <Link className="data-to-link">0xe57dad9c809c5ff0162b17d220917089d4cc7075</Link>
      </div>
    ),
  },
  {
    title: 'Value',
    dataIndex: 'value',
    render: () => <div className="data-value">0 {siteConfig.nativeCurrency.symbol} </div>,
  },
  {
    title: 'Token',
    dataIndex: 'token',
    render: () => (
      <div className="data-txnfee">
        <img src="https://polygonscan.com/images/main/empty-token.png" alt="" />
        <Link className="data-txnfee-link">Aavegotchi F... (FOMO) </Link>
      </div>
    ),
  },
]

const data = []

const TableTransactionDetailTxn = () => (
  <div>
    <Table columns={columns} dataSource={data} />
  </div>
)

export default TableTransactionDetailTxn
