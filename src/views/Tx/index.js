import React, { useState } from 'react'
import { Menu, Dropdown, Button, Space, Tabs, Row, Col, message } from 'antd'
import {
  DownOutlined,
  UserOutlined,
  ClockCircleOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
  MoreOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import ReactTimeAgo from 'react-time-ago'
import CurrencyFormat from 'react-currency-format'
import TxReceiptEventLogItem from 'components/TxReceiptEventLogItem'
import { toFixed } from 'utils/number'
import abiErc20 from 'config/constants/abis/erc20.json'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import { Link } from 'components/Link'
import CoppyText from 'components/CoppyText'
import siteConfig from '../../config/site.config'
import { numberFormatter } from 'library/helpers/CommonHelper'

const abiDecoder = require('abi-decoder')
abiDecoder.addABI(abiErc20)

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`)
}

const menumore = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">Remix Debugger</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">Geth Debug Trace</Menu.Item>
    <Menu.Item key="3">Geth Debug Trace_2</Menu.Item>
  </Menu>
)

const operations = (
  <Dropdown trigger={['click']} overlay={menumore} arrow={{ pointAtCenter: true }}>
    <Button className="btn-more-transaction">
      <MoreOutlined />
    </Button>
  </Dropdown>
)

const Buy = (
  <Menu>
    <span className="sponsored">Sponsored</span>
    <Menu.Item key="1">
      <div>
        <Link>
          <img src="https://polygonscan.com/images/gen/aax.svg" alt="" />
          <span className="title-big">AAX - Buy BTC with up to 50% discount!</span>
          <span className="title-mini">BTC 50% OFF</span>
        </Link>
        <span className="title-text">Visit AAX.com to learn more!</span>
      </div>
    </Menu.Item>
    <Menu.Item key="2">
      <div>
        <Link>
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

const Exchange = (
  <Menu>
    <span className="sponsored">Sponsored</span>
    <Menu.Item key="1">
      <div>
        <Link>
          <img src="https://polygonscan.com/images/gen/aax.svg" alt="" />
          <span className="title-big">AAX - Buy BTC with up to 50% discount!</span>
          <span className="title-mini">BTC 50% OFF</span>
        </Link>
        <span className="title-text">Visit AAX.com to learn more!</span>
      </div>
    </Menu.Item>
    <Menu.Item key="2">
      <div>
        <Link>
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
    <span className="sponsored">Sponsored</span>
    <Menu.Item key="1">
      <div>
        <Link>
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
        <Link>
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
    <span className="sponsored">Sponsored</span>
    <Menu.Item key="1">
      <div>
        <Link>
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

const VIewInput = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      Default View
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      Original
    </Menu.Item>
  </Menu>
)

const TransactionModule = (props) => {
  const { txDetail, blockDetail, latestBlock } = props

  const userInfo = {}

  const [collapse, setCollapse] = useState(false)

  const collapseToggle = () => {
    setCollapse(!collapse)
  }

  const menuSuccess = (
    <Menu className="success-modal-container">
      <Menu.Item>
        <p className="success-modal-conent" target="_blank" rel="noopener noreferrer">
          Status code indicating if the top-level call succeeded or failed"
        </p>
      </Menu.Item>
    </Menu>
  )
  const menuBlock = (
    <Menu className="Block-modal-container">
      <Menu.Item>
        <p className="Block-modal-conent" target="_blank" rel="noopener noreferrer">
          Number of blocks validated since
        </p>
      </Menu.Item>
    </Menu>
  )

  return (
    <main className="transaction-content">
      <div className="container transaction-heading">
        <h1>Transaction Details</h1>
        <div>
          <Space wrap>
            <Dropdown overlay={Buy} trigger={['click']} className="active">
              <Button>Buy</Button>
            </Dropdown>
            <Dropdown overlay={Exchange} trigger={['click']} className="active">
              <Button>Exchange</Button>
            </Dropdown>
            <Dropdown overlay={Earn} trigger={['click']}>
              <Button>Earn</Button>
            </Dropdown>
            <Dropdown overlay={Gaming} trigger={['click']}>
              <Button>Gaming</Button>
            </Dropdown>
          </Space>
        </div>
      </div>
      <div className="container hr-alt-01">
        <div />
      </div>
      <div className="container transaction-space">
        <b>Sponsored:</b> Hot games, huge winnings,{' '}
        <b>
          welcome bonus up to $1000. <Link href="/register">Register now !</Link>
        </b>
      </div>
      <div className="container transaction-bottom">
        <div className="card transaction-space-card">
          <Tabs defaultActiveKey="1" onChange={callback} tabBarExtraContent={operations}>
            <TabPane tab="Overview" key="1">
              {txDetail && (
                <>
                  <div className="card-content-item ant-menu-horizontal no-border-bottom">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        <Space>
                          <img src="/images/icon/question.svg" alt="" />
                        </Space>
                        Transaction Hash:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        <CoppyText value={txDetail?.h}>{txDetail?.h}</CoppyText>
                      </Col>
                    </Row>
                  </div>
                  <div className="card-content-item ant-menu-horizontal no-border-bottom">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        <Space>
                          <img src="/images/icon/question.svg" alt="" />
                        </Space>
                        Status:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        <Dropdown
                          className={`u-label ${txDetail?.status ? 'u-label--success' : 'u-label--danger'}`}
                          overlay={menuSuccess}
                          placement="topRight"
                        >
                          <span>
                            <CheckCircleOutlined />
                            {txDetail?.s ? 'Success' : 'Fail'}
                          </span>
                        </Dropdown>
                      </Col>
                    </Row>
                  </div>
                  <div className="card-content-item ant-menu-horizontal no-border-bottom">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        <Space>
                          <img src="/images/icon/question.svg" alt="" />
                        </Space>
                        Block:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        <CheckCircleOutlined />
                        <Link href={`/block/${txDetail?.bn}`} className="item-clock">
                          {txDetail?.bn}
                        </Link>

                        {latestBlock?.bn && (
                          <span className="item-block-stickers">
                            <Space>
                              <Dropdown className="non-position-item-span" overlay={menuBlock} placement="topRight">
                                <Button>{latestBlock?.bn - txDetail?.bn} Block Confirmations</Button>
                              </Dropdown>
                            </Space>
                          </span>
                        )}
                      </Col>
                    </Row>
                  </div>
                  <div className="card-content-item ant-menu-horizontal ">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        <Space>
                          <img src="/images/icon/question.svg" alt="" />
                        </Space>
                        Timestamp:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        <Link href="/" className="item-timestamp-icons">
                          <ClockCircleOutlined />
                        </Link>
                        <span className="item-clock-time">
                          <ReactTimeAgo date={parseInt(blockDetail?.ti) * 1000} locale="en-US" /> (
                          {new Date(blockDetail?.ti * 1000).toUTCString()})
                        </span>
                      </Col>
                    </Row>
                  </div>
                  <div className="card-content-item ant-menu-horizontal no-border-bottom">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        <Space>
                          <img src="/images/icon/question.svg" alt="" />
                        </Space>
                        From:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        {txDetail?.f?.a && (
                          <CoppyText value={txDetail?.f?.a} href={`/address/${txDetail?.f?.a}`}>
                            {txDetail?.f?.a}
                          </CoppyText>
                        )}
                      </Col>
                    </Row>
                  </div>
                  <div className="card-content-item ant-menu-horizontal ">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        <Space>
                          <img src="/images/icon/question.svg" alt="" />
                        </Space>
                        To:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        {txDetail?.t?.a && (
                          <div className="to-contract">
                            <CoppyText
                              className="item-hash-contract"
                              value={txDetail?.t?.a}
                              href={`/address/${txDetail?.t?.a}`}
                            >
                              {txDetail?.t?.a}
                            </CoppyText>
                          </div>
                        )}
                      </Col>
                    </Row>
                  </div>
                  {txDetail && (
                    <div className="card-content-item ant-menu-horizontal no-border-bottom">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <Space>
                            <img src="/images/icon/question.svg" alt="" />
                          </Space>
                          Value:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>
                          <Space>
                            <Dropdown className="card-content-item-value" overlay={menuBlock} placement="topRight">
                              <span>
                                <CurrencyFormat
                                  value={+txDetail?.v / 1e18}
                                  displayType="text"
                                  thousandSeparator
                                  renderText={(value) => value}
                                />{' '}
                                {siteConfig?.nativeCurrency?.symbol}
                              </span>
                            </Dropdown>
                            <span className="card-content-item-price">(${txDetail?.p || '--'})</span>
                          </Space>
                        </Col>
                      </Row>
                    </div>
                  )}
                  {/*  */}
                  {txDetail && (
                    <div className="card-content-item ant-menu-horizontal ">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <Space>
                            <img src="/images/icon/question.svg" alt="" />
                          </Space>
                          Transaction Fee:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>
                          <span className="card-content-item-value">
                            {txDetail?.tf / 1e18 || '--'} {siteConfig?.nativeCurrency?.symbol}
                          </span>
                          <span className="card-content-item-price">
                            (${((txDetail?.gp / 1e9) * txDetail.gu) / 1e9})
                          </span>
                        </Col>
                      </Row>
                    </div>
                  )}
                  {collapse && (
                    <div className="card-content-item_show">
                      <div className="card-content-item ant-menu-horizontal no-border-bottom">
                        <Row>
                          <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <Space>
                              <img src="/images/icon/question.svg" alt="" />
                            </Space>
                            Gas Price:
                          </Col>
                          <Col xs={{ span: 24 }} md={{ span: 16 }}>
                            {toFixed(+txDetail?.gp / 1e18)} {siteConfig.nativeCurrency.symbol} (
                            {toFixed(+txDetail?.gp / 1e9)} Gwei)
                          </Col>
                        </Row>
                      </div>
                      <div className="card-content-item ant-menu-horizontal">
                        <Row>
                          <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <Space>
                              <img src="/images/icon/question.svg" alt="" />
                            </Space>
                            {siteConfig?.nativeCurrency?.symbol || ''} Price:
                          </Col>
                          <Col xs={{ span: 24 }} md={{ span: 16 }}>
                            {txDetail?.p ? numberFormatter(txDetail?.p, txDetail?.p > 0 ? 2 : 5) : '--'}
                          </Col>
                        </Row>
                      </div>
                      <div className="card-content-item ant-menu-horizontal">
                        <Row>
                          <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <Space>
                              <img src="/images/icon/question.svg" alt="" />
                            </Space>
                            Private Note:
                          </Col>
                          <Col xs={{ span: 24 }} md={{ span: 16 }}>
                            {userInfo?.username ? (
                              <textarea className="text-area-private" cols="30" rows="2" />
                            ) : (
                              <span className="text-private">
                                To access the Private Note feature, you must be <Link href="/login">Logged In</Link>
                              </span>
                            )}
                          </Col>
                        </Row>
                      </div>
                    </div>
                  )}
                  <div className="card-content-item ant-menu-horizontal no-border-bottom">
                    <a className="collapse-click" onClick={collapseToggle}>
                      <span>
                        Click to see
                        {collapse === true ? <span>less</span> : <span>more</span>}
                        <span>
                          {collapse === true ? (
                            <Space>
                              <ArrowUpOutlined />
                            </Space>
                          ) : (
                            <Space>
                              <ArrowDownOutlined />
                            </Space>
                          )}
                        </span>
                      </span>
                    </a>
                  </div>
                </>
              )}
            </TabPane>
            <TabPane tab="Consensus Info" key="2">
              <p>Comming soon...</p>
            </TabPane>
            <TabPane tab="Comments" key="3">
              <p>Comming soon...</p>
            </TabPane>
          </Tabs>
        </div>
        <div className="txn-desc">
          <img src="/images/icon/lamp-hub.png" alt="" />
          <span>
            A wallet address is a publicly available address that allows its owner to receive funds from another party.
            To access the funds in an address, you must have its private key. Learn more about addresses in our{' '}
            <Link href="/knowledgw-base">Knowledge Base.</Link>
          </span>
        </div>
        <div className="txn-banner-bottom">
          <img src="/images/mask.png" alt="" />
          <span>PulseDex presale details to be announced soon</span>
          <img src="/images/mask.png" alt="" />
        </div>
      </div>
    </main>
  )
}

TransactionModule.Layout = PublicLayoutBlock
export default TransactionModule
