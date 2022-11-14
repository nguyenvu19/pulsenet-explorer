import React, { useState } from 'react'
import { Pagination, Table, Tag, Radio, Space } from 'antd'
import Link from 'components/NextLink/NextLink'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import siteConfig from '../../config/site.config'

const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'age',
  },
  {
    title: 'Name Tag',
    dataIndex: 'nameTag',
    key: 'nameTag',
  },
  {
    title: <div className="balance-title">Balance</div>,
    dataIndex: 'balance',
    key: 'balance',
  },
  {
    title: 'Percentage',
    dataIndex: 'percentage',
    key: 'percentage',
  },
  {
    title: 'Txn Count',
    dataIndex: 'txt',
    key: 'txt',
  },
]

const data = [
  {
    key: '1',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
  {
    key: '2',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
  {
    key: '3',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
  {
    key: '4',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
  {
    key: '5',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
  {
    key: '6',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
  {
    key: '7',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
  {
    key: '8',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
  {
    key: '9',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
  {
    key: '10',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
  {
    key: '11',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
  {
    key: '12',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
  {
    key: '13',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
  {
    key: '14',
    rank: <p>26</p>,
    address: <div className="data-address-account">0x007e4195a6c8f68801c0673ec561c38fed803021</div>,
    nameTag: 'InsurAce Protocol: Stakers Pool V2',
    balance: '1,421,541.82 PI ',
    percentage: '0.01820507%',
    txt: '5',
  },
]

const AccountModule = () => {
  const [top, setTop] = useState('topLeft')
  const [bottom, setBottom] = useState('bottomRight')
  return (
    <div className="account-wrapper">
      <div className="account-container">
        <div className="account__heading">
          <h1>Top Accounts by PI Balance </h1>
        </div>
        <div className="account__bottom">
          <div className="card">
            <div className="card-body">
              <div className="card-body-header">
                <p>
                  A total of ›<Link>1,999,999 accounts found</Link>
                  (7,808,492,080
                  <b>.</b>
                  62 {siteConfig.nativeCurrency.symbol} )<span>(Showing the last 10,000 top accounts only)</span>
                </p>
              </div>
              <div className="card-body-center">
                <Table columns={columns} pagination={{ position: [top, bottom] }} dataSource={data} />
              </div>
              <div className="card-body-footer">
                <ul>
                  <li>
                    <Radio.Group
                      style={{ marginBottom: 10 }}
                      value={bottom}
                      onChange={(e) => {
                        setBottom({ bottom: e.target.value })
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
AccountModule.Layout = PublicLayoutBlock

export default AccountModule
