import React from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import AddressTop from './Components/addressTop'
import AdText from './Components/adText'
import CardBase from 'components/Card/CardBase'
import AddressOverview from 'components/AddressOverview'
import AddressMoreInfo from 'components/AddressMoreInfo'
import OverviewCard from './Components/overviewCard'
import InfoCard from './Components/infoCard'
import TableBase from 'components/Table/TableBase'
import { InfoCircleOutlined } from '@ant-design/icons'
import CardTabs from 'components/Card/CardTabs'
import TitleAndTbl from './Components/addressTable'
import { Tooltip } from 'antd'

const dataFake = [
  {
    key: '1',
    TxnHash: '0xb41824b8729...',
    method: 'tranfer',
    block: '1512315',
    age: '10 secs ago',
    from: '0x473780dea4a...',
    to: '212asdb12s15asd',
    value: '0 Pulse',
    TxnFee: '0.000215485',
  },
  {
    key: '2',
    TxnHash: '0xb41824b8729...',
    method: 'tranfer',
    block: '1512315',
    age: '10 secs ago',
    from: '0x473780dea4a...',
    to: '212asdb12s15asd',
    value: '0 Pulse',
    TxnFee: '0.000215485',
  },
  {
    key: '3',
    TxnHash: '0xb41824b8729...',
    method: 'tranfer',
    block: '1512315',
    age: '10 secs ago',
    from: '0x473780dea4a...',
    to: '212asdb12s15asd',
    value: '0 Pulse',
    TxnFee: '0.000215485',
  },
  {
    key: '4',
    TxnHash: '0xb41824b8729...',
    method: 'tranfer',
    block: '1512315',
    age: '10 secs ago',
    from: '0x473780dea4a...',
    to: '212asdb12s15asd',
    value: '0 Pulse',
    TxnFee: '0.000215485',
  },
  {
    key: '5',
    TxnHash: '0xb41824b8729...',
    method: 'tranfer',
    block: '1512315',
    age: '10 secs ago',
    from: '0x473780dea4a...',
    to: '212asdb12s15asd',
    value: '0 Pulse',
    TxnFee: '0.000215485',
  },
]
const columns = [
  {
    title: 'Txn Hash',
    dataIndex: 'TxnHash',
    render: (text) => (
      <div className="tbl-col-1">
        <img src="/images/address/emo-eye.png" className="down" />
        {text}
      </div>
    ),
  },
  {
    title: (
      <div className="title-head title-header-table">
        <span>
          Method <InfoCircleOutlined />
        </span>
      </div>
    ),
    dataIndex: 'method',
    render: (text) => (
      <div className="tbl-col-2">
        <Tooltip title={text}>
          <div className="col-2-txt">{text}</div>
        </Tooltip>
      </div>
    ),
  },
  {
    title: (
      <div className="title-head title-header-table-2">
        <span>Block</span>
      </div>
    ),
    dataIndex: 'block',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    render: (text) => <div className="tbl-col block-col">{text}</div>,
  },
  {
    title: (
      <div className="title-head title-header-table-2">
        <span>Age</span>
      </div>
    ),
    dataIndex: 'age',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    render: (text) => <div className="tbl-col age-col ">{text}</div>,
  },
  {
    title: (
      <div className="title-head title-header-table-2">
        <span>From</span>
      </div>
    ),
    dataIndex: 'from',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    render: (text) => <div className="tbl-col from-col ">{text}</div>,
  },
  {
    title: (
      <div className="title-head title-header-table-2">
        <span>To</span>
      </div>
    ),
    dataIndex: 'to',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    render: (text) => (
      <div className="tbl-col">
        <div className="to-column">
          <img src="/images/icon/arrow-right.png" alt="" />
          <span>{text}</span>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="title-head title-header-table-2">
        <span>Value</span>
      </div>
    ),
    dataIndex: 'value',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    render: (text) => <div className="tbl-col">{text}</div>,
  },
  {
    title: (
      <div className="title-head title-header-table-2">
        <span>Txn Fee</span>
      </div>
    ),
    dataIndex: 'TxnFee',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    render: (text) => (
      <div className="tbl-col">
        <div className="txn-column">
          <span>{text}</span>
          <img src="/images/address/lamp-charge.png" alt="" />
        </div>
      </div>
    ),
  },
]

const dataFake_2 = [
  {
    key: '1',
    ParentTxnHash: '0xf075bca9ac4aa16b86a2...',

    block: '1512315',
    age: '109 days 57 mins ago',
    from: 'Uniswap V3: Router 2',
    to: '212asdb12s15asd',
    value: '0 Pulse',
  },
  {
    key: '2',
    ParentTxnHash: '0xf075bca9ac4aa16b86a2...',

    block: '1512315',
    age: '109 days 57 mins ago',
    from: 'Uniswap V3: Router 2',
    to: '212asdb12s15asd',
    value: '0 Pulse',
  },
  {
    key: '3',
    ParentTxnHash: '0xf075bca9ac4aa16b86a2...',

    block: '1512315',
    age: '109 days 57 mins ago',
    from: 'Uniswap V3: Router 2',
    to: '212asdb12s15asd',
    value: '0 Pulse',
  },
  {
    key: '4',
    ParentTxnHash: '0xf075bca9ac4aa16b86a2...',

    block: '1512315',
    age: '109 days 57 mins ago',
    from: 'Uniswap V3: Router 2',
    to: '212asdb12s15asd',
    value: '0 Pulse',
  },
  {
    key: '5',
    ParentTxnHash: '0xf075bca9ac4aa16b86a2...',

    block: '1512315',
    age: '109 days 57 mins ago',
    from: 'Uniswap V3: Router 2',
    to: '212asdb12s15asd',
    value: '0 Pulse',
  },
]

const columns_2 = [
  {
    title: 'Parent Txn Hash',
    dataIndex: 'ParentTxnHash',
    render: (text) => <div className="tbl-col-1">{text}</div>,
  },

  {
    title: (
      <div className="title-head title-header-table-2">
        <span>Block</span>
      </div>
    ),
    dataIndex: 'block',

    render: (text) => <div className="tbl-col block-col">{text}</div>,
  },
  {
    title: (
      <div className="title-head title-header-table-2">
        <span>Age</span>
      </div>
    ),
    dataIndex: 'age',

    render: (text) => <div className="tbl-col age-col ">{text}</div>,
  },
  {
    title: (
      <div className="title-head title-header-table-2">
        <span>From</span>
      </div>
    ),
    dataIndex: 'from',

    render: (text) => (
      <div className="tbl-col from-col ">
        <div className="from-col-img">
          <img src="images/address/uniswap.png" alt="" />
          {text}
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="title-head title-header-table-2">
        <span>To</span>
      </div>
    ),
    dataIndex: 'to',

    render: (text) => (
      <div className="tbl-col">
        <div className="to-column">
          <img src="/images/icon/arrow-right.png" alt="" />
          <span>{text}</span>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="title-head title-header-table-2">
        <span>Value</span>
      </div>
    ),
    dataIndex: 'value',

    render: (text) => <div className="tbl-col">{text}</div>,
  },
]
const SuccessLabel = ({ text }) => {
  return <div className={`success-label ${text === 'IN' ? 'in' : 'out'}`}>{text}</div>
}
const dataFake_3 = [
  {
    key: '1',
    TxnHash: '0xf075bca9ac4aa16b86a2...',

    age: '109 days 57 mins ago',
    from: '0x473780dea4a...',
    to: '212asdb12s15asd',
    value: '0 Pulse',
    token: '0.000215485',
  },
]

const columns_3 = [
  {
    title: 'Txn Hash',
    dataIndex: 'TxnHash',
    render: (text) => <div className="tbl-col-1">{text}</div>,
  },

  {
    title: (
      <div className="title-head title-header-table-2">
        <span>Age</span>
      </div>
    ),
    dataIndex: 'age',

    render: (text) => <div className="tbl-col block-col">{text}</div>,
  },

  {
    title: (
      <div className="title-head title-header-table-2">
        <span>From</span>
      </div>
    ),
    dataIndex: 'from',

    render: (text) => (
      <div className="tbl-col from-col ">
        <div className="from-col-img">
          <img src="images/address/uniswap.png" alt="" />
          {text}
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="title-head title-header-table-2">
        <span>To</span>
      </div>
    ),
    dataIndex: 'to',

    render: (text) => (
      <div className="tbl-col">
        <div className="to-column">
          {/* <img src="/images/icon/arrow-right.png" alt="" /> */}
          <SuccessLabel text="IN" />
          <span>{text}</span>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="title-head title-header-table-2">
        <span>Value</span>
      </div>
    ),
    dataIndex: 'value',

    render: (text) => <div className="tbl-col">{text}</div>,
  },
  {
    title: (
      <div className="title-head title-header-table-2">
        <span>Token</span>
      </div>
    ),
    dataIndex: 'token',

    render: (text) => <div className="tbl-col">{text}</div>,
  },
]

const AddressPage = () => {
  return (
    <div className="addr-container">
      <AddressTop />
      <AdText content="ads text" />
      <div className="block-ovrview-info">
        <OverviewCard />
        <InfoCard />
      </div>
      <div className="ad-img">
        <img src="/images/address/ad-img.png" alt="" />
      </div>

      <CardTabs
        tabs={[
          {
            key: '1',
            title: 'Transactions',
            content: <TitleAndTbl columns={columns} dataSource={dataFake} />,
          },
          {
            key: '2',
            title: 'Intenal Txns',
            content: <TitleAndTbl columns={columns_2} dataSource={dataFake_2} swt="yes" />,
          },
          {
            key: '3',
            title: 'Erc20 Token Txns',
            content: <TitleAndTbl columns={columns_3} dataSource={dataFake_3} />,
          },
          {
            key: '4',
            title: 'Analytics',
            content: <TitleAndTbl />,
          },
          {
            key: '5',
            title: 'Comments',
            content: <TitleAndTbl />,
          },
        ]}
      />
      <div className="address-publicly">
        <img src="/images/address/lamp.png" alt="" />
        <span>
          A wallet address is a publicly available address that allows its owner to receive funds from another party. To
          access the funds in an address, you must have its private key. Learn more about addresses in our
           {' '}<span style={{ color: '#418143', cursor: 'pointer' }}>Knowledge Base.</span>
        </span>
      </div>
    </div>
  )
}

AddressPage.Layout = PublicLayoutBlock
export default AddressPage
