import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  AppstoreOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
  ContainerOutlined,
  CopyOutlined,
  DownloadOutlined,
  DownOutlined,
  FlagFilled,
  HeartFilled,
  MenuUnfoldOutlined,
  MoreOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  TagOutlined,
  TagsFilled,
  TeamOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import Web3 from 'web3'
import QRCode from 'qrcode.react'
import { message, Input, Menu, Dropdown, Button, Space, Tabs, Row, Col, Table, Modal } from 'antd'
import { PROVIDER_NETWORK_URL } from 'config/constants'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import TableEvent from 'components/TableEvent'
import Link from 'components/NextLink/NextLink'
import TableTransactionDetail from 'components/TableTransactionDetail'
import TableTransactionDetailTxn from 'components/TableTransactionDetailTxn'
import AddressOverview from 'components/AddressOverview'
import AddressMoreInfo from 'components/AddressMoreInfo'

const { Search } = Input

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const menuUnder = (
  <Menu>
    <Menu.Item key="0">
      <Link href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
        </svg>
        <div> View Completed Txns</div>
      </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
        </svg>
        <div> View Pending Txns</div>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" />
        </svg>
        <div> View Failed Txns</div>
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <Link href="#">
        <ArrowRightOutlined />
        <div> View Outgoing Txns</div>
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link href="#">
        <ArrowLeftOutlined />
        <div> View Incoming Txns</div>
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link href="#">
        <ContainerOutlined />
        <div>View Contract Creation</div>
      </Link>
    </Menu.Item>
  </Menu>
)
const Exchange = (
  <Menu>
    <Menu.Item key="1">
      <div>
        <span className="sponsored">Sponsored</span>
        <Link href="#">
          <img src="https://polygonscan.com/images/gen/aax.svg" alt="" />
          <span className="title-big">AAX - Buy BTC with up to 50% discount!</span>
          <span className="title-mini">BTC 50% OFF</span>
        </Link>
        <span className="title-text">Visit AAX.com to learn more!</span>
      </div>
    </Menu.Item>
    <Menu.Item key="2">
      <div>
        <span className="sponsored">Sponsored</span>
        <Link href="#">
          <img src="https://polygonscan.com/images/gen/currency_20.png" alt="" />
          <span className="title-big">Currency.com: Trade without borders </span>
          <span className="title-mini">Trade Now</span>
        </Link>
        <span className="title-text">
          Seamless app for investments with confidence in popular tokenised stocks, indices and commodities
        </span>
      </div>
    </Menu.Item>
  </Menu>
)
const Earn = (
  <Menu>
    <Menu.Item key="1">
      <div>
        <span className="sponsored">Sponsored</span>
        <Link href="#">
          <img src="https://polygonscan.com/images/gen/cryptocom_defiwallet_20.png" alt="" />
          <span className="title-big">Crypto.com DeFi Wallet - Safekeep 600+ cryptos and earn token rewards </span>
          <span className="title-mini">Install Now</span>
        </Link>
        <span className="title-text">
          Enjoy up to 20% p.a. on your holdings. Plus, boost your rewards rates by up to 20x when you stake CRO!
        </span>
      </div>
    </Menu.Item>
    <Menu.Item key="2">
      <div>
        <span className="sponsored">Sponsored</span>
        <Link href="#">
          <img src="https://polygonscan.com/images/gen/bingx_20.png" alt="" />
          <span className="title-big">BingX: Register Now to Grab 150 USDT - Polygonscan Users Exclusive </span>
          <span className="title-mini">Start Today!</span>
        </Link>
        <span className="title-text">Signup Rewards Limited to 1000 per day</span>
      </div>
    </Menu.Item>
  </Menu>
)
const Gaming = (
  <Menu>
    <Menu.Item key="1">
      <div>
        <span className="sponsored">Sponsored</span>
        <Link href="#">
          <img src="https://polygonscan.com/images/gen/bingx_20.png" alt="" />
          <span className="title-big">BC.Game - The Best Crypto Casino, 2000+ Slots, 200+ Token. </span>
          <span className="title-mini">Claim 1000,000 Matic</span>
        </Link>
        <span className="title-text">
          Daily free Spin 50000 Matic ,240% Deposit Bonus, 20%Rakeback, And Get 1000000 Matic free bonus on BC.Game
        </span>
      </div>
    </Menu.Item>
  </Menu>
)

const onSearch = (value) => console.log(value)

const search = (
  <div className="modal-search-event">
    <Search
      placeholder="Filtered by BlockNo Or Topic0"
      allowClear
      enterButton="Find"
      size="large"
      onSearch={onSearch}
    />
  </div>
)

/**
 * Detail address
 */
const web3 = new Web3(PROVIDER_NETWORK_URL)

const TransactionDetailTolModule = () => {
  const {
    query: { address },
  } = useRouter()

  const [isCoppy, setIsCoppy] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const setIsCopped = () => {
    setIsCoppy(!isCoppy)
    setInterval(() => {
      setIsCoppy(isCoppy)
    }, 2000)
    navigator.clipboard.writeText(address)
  }
  return (
    <main className="address-container">
      <div className="container transaction-heading">
        <div className="tx-detail-address">
          <img src="/images/icon/random-account.png" alt="" />
          <strong>Address</strong>
          <span className="tx-address">{address}</span>
          <span className="tx-address-actions">
            <span className="tx-icon tx-icon-coppy">
              {!isCoppy ? <CopyOutlined onClick={setIsCopped} /> : <CheckCircleOutlined onClick={setIsCopped} />}
              {isCoppy && (
                <span className="coppied" style={{ color: '#8c98a4' }}>
                  coppied
                </span>
              )}
            </span>
            <span className="tx-icon tx-qrcode-icon" onClick={showModal}>
              <AppstoreOutlined />
            </span>
            <Modal title={address} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <QRCode size={220} value={address} includeMargin fgColor="#000" bgColor="#fff" />
            </Modal>
          </span>
        </div>
        {/* <div>
            <Space wrap>
              <Dropdown overlay={Exchange} trigger={['click']}>
                <Button>
                  Exchange <DownOutlined />
                </Button>
              </Dropdown>
              <Dropdown overlay={Earn} trigger={['click']}>
                <Button>
                  Earn <DownOutlined />
                </Button>
              </Dropdown>
              <Dropdown overlay={Gaming} trigger={['click']}>
                <Button>
                  Gaming <DownOutlined />
                </Button>
              </Dropdown>
            </Space>
          </div> */}
      </div>
      <div className="container hr-alt-01">
        <div />
      </div>
      <div className="container  transaction-Dtail-space">
        <b>Sponsored:</b>
        <img src="https://www.polygonscan.com/images/gen/paybolt_20.png" alt="" />
        <b> - PayBolt -</b>
        <Link href="#">
          <b className="transaction-space-text">
            Web3 cross-chain payment gateway for commerce! 10B in transaction volume by 2025!
          </b>
          Explore More.
        </Link>
      </div>
      <div className="container transaction-Dtail-main-to">
        <div className="main-top">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12}>
              <AddressOverview address={address} />
            </Col>
            <Col xs={24} sm={24} md={12}>
              <AddressMoreInfo address={address} />
            </Col>
          </Row>
        </div>
        <div className="main-center">{/* <Banner /> */}</div>
        <div className="main-under">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Transactions" key="1">
              <div className="main-under-card">
                <div className="main-under-card-content">
                  <div className="card-content-text">
                    <div>
                      <MenuUnfoldOutlined />
                      <span>
                        Latest - from a total of
                        <Link href="txs/435" className="card-content-text-transactions">
                          ---
                        </Link>
                        transactions
                      </span>
                    </div>
                    <div className="card-content-right">
                      <Dropdown overlay={menuUnder} trigger={['click']}>
                        <Link href="#" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                          <MoreOutlined />
                        </Link>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="card-content-table">
                    <TableTransactionDetail />
                  </div>
                  <div className="card-content-footer">
                    <div className="content-footer-text">
                      <span className="content-footer-text-right">
                        [ Download
                        <Link href="#">CSV Export</Link>
                        &nbsp;
                        <span>
                          <DownloadOutlined />
                        </span>
                        ]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="ERC-20 Token Txns" key="2">
              <div className="main-under-card">
                <div className="main-under-card-content">
                  <div className="card-content-text">
                    <div>
                      <MenuUnfoldOutlined />
                      <span> Latest 25 ERC-20 Token Transfer Events</span>
                    </div>
                  </div>
                  <div className="card-content-table">
                    <TableTransactionDetailTxn />
                  </div>
                  <div className="card-content-footer">
                    <div className="content-footer-text">
                      <span className="content-footer-text-right">
                        [ Download
                        <Link href="#">CSV Export</Link>
                        &nbsp;
                        <span>
                          <DownloadOutlined />
                        </span>
                        ]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Events" key="3">
              <div className="main-under-card">
                <div className="main-under-card-content">
                  <div className="card-content-text-event">
                    <div>
                      <div>
                        <MenuUnfoldOutlined />
                        <span>Latest 0 Contract Events</span>
                      </div>
                      <span className="card-content-text-event-text-span">
                        Tip: <Link href="#">Logs</Link> are used by developers/external UI providers for keeping track
                        of contract actions and for auditing
                      </span>
                    </div>
                    <div className="card-content-right card-content-right-event">
                      <Dropdown overlay={search} trigger={['click']}>
                        <Link href="#" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                          <SearchOutlined />
                        </Link>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="card-content-table">
                    <TableEvent />
                  </div>
                  <div className="card-content-footer">
                    <div className="content-footer-text">
                      <span className="content-footer-text-right">
                        [ Download
                        <Link href="#">CSV Export</Link>
                        &nbsp;
                        <span>
                          <DownloadOutlined />
                        </span>
                        ]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Analytics" key="4">
              <div className="analytics-div" />
            </TabPane>
            <TabPane tab="Comments" key="5">
              <div className="comments-div">
                Make sure to use the "Vote Down" button for any spammy posts, and the "Vote Up" for interesting
                conversations.
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </main>
  )
}

TransactionDetailTolModule.Layout = PublicLayoutBlock
export default TransactionDetailTolModule
