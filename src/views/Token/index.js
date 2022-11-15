import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Progress, Modal, Button, Col, Dropdown, Menu, Row, Space, Table, Tabs, message, Input } from 'antd'
import {
  ArrowRightOutlined,
  CheckCircleOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CopyOutlined,
  DownloadOutlined,
  DownOutlined,
  FlagFilled,
  MehOutlined,
  MenuUnfoldOutlined,
  MoreOutlined,
  TagOutlined,
  TagsFilled,
  TeamOutlined,
  WarningOutlined,
  InfoCircleOutlined,
  PieChartOutlined,
  PieChartFilled,
  SearchOutlined,
} from '@ant-design/icons'
import CurrencyFormat from 'react-currency-format'
import { isAddress } from 'utils'
import Web3Token from 'library/Web3Token'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import Link from 'components/NextLink/NextLink'

const { TabPane } = Tabs
const { SubMenu } = Menu
const { Search } = Input

function callback(key) {
  console.log(key)
}

const Buy = (
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
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">
        <CopyOutlined />
        <div> View Private Note</div>
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.antgroup.com">
        <ClockCircleOutlined />
        <div> Check Previous Balance</div>
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <a href="https://www.antgroup.com">
        <TagOutlined />
        <div> Update Name Tag</div>
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="https://www.antgroup.com">
        <TagsFilled />
        <div>Submit Label</div>
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="https://www.antgroup.com">
        <FlagFilled />
        <div>Report/Flag Address</div>
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="https://www.antgroup.com">
        <TeamOutlined />
        <div>
          Token Approvals
          <sup> Beta</sup>
        </div>
      </a>
    </Menu.Item>
  </Menu>
)
const columnsdataInventory = [
  {
    title: 'Token_id',
    dataIndex: 'token_id',
    key: 'rank',
    // width: 50,
    render: () => (
      <Link
        href="/token/109496029383283026169133105264679942361946356211481778062746824431790156939265"
        className="data-tokenId"
      >
        109496029383283026169133105264679942361946356211481778062746824431790156939265
      </Link>
    ),
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    key: 'quantity',
    // width: 30,
    render: () => (
      <Link href="token/0x0000000000000000000000000000000000000000" className="data-owner">
        0x0000000000000000000000000000000000000000
      </Link>
    ),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    // width: 30,
    render: () => (
      <div href="token/94" className="data-amount">
        94
      </div>
    ),
  },
]
const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
    // width: 50,
    render: () => <div className="data-rank">1</div>,
  },
  {
    title: <div className="title-age">Address</div>,
    dataIndex: 'address',
    key: 'address',
    // width: 80,
    render: () => (
      <Link href="token/0xe7e2cb8c81c10ff191a73fe266788c9ce62ec754" className="data-txnHash">
        0xe7e2cb8c81c10ff191a73fe266788c9ce62ec754
      </Link>
    ),
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    // width: 30,
    render: () => <div className="data-quantity">259</div>,
  },
  {
    title: 'Percentage',
    dataIndex: 'percentage',
    key: 'percentage',
    // width: 100,
    render: () => (
      <div className="data-percentage">
        0.0000%
        <span>
          <Progress percent={30} />
        </span>
      </div>
    ),
  },
]
const columnsTransfer = [
  {
    title: 'Txn Hash',
    dataIndex: 'txnHash',
    // width: 50,
    render: () => (
      <div className="data-txnHash">
        <Link href="/tx/0x71393ab61ca0fb693515e9a12c490d2cb0b2d38b42636ee6c2f6d369652bf70f">
          0x71393ab61ca0fb693515e9a12c490d2cb0b2d38b42636ee6c2f6d369652bf70f
        </Link>
      </div>
    ),
  },
  {
    title: (
      <div className="method-title">
        Method
        <InfoCircleOutlined />
      </div>
    ),
    dataIndex: 'method',
    defaultSortOrder: 'descend',
    // width: 50,
    render: () => <div className="data-method">Checkin</div>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    // width: 100,
    render: () => <div className="data-age">17 secs ago</div>,
  },
  {
    title: 'From',
    dataIndex: 'from',
    // width: 200,
    filterSearch: true,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    render: () => (
      <div className="data-from">
        <Link href="/token/0x7acaf470d4ea17e9296bc094a442992f654edb3f" className="data-from-link">
          0x7acaf470d4ea17e9296bc094a442992f654edb3f
        </Link>
      </div>
    ),
  },
  {
    title: 'To',
    dataIndex: 'to',
    // width: 200,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    render: () => (
      <div className="data-to">
        <div>
          <ArrowRightOutlined />
        </div>
        <Link href="/token/0xe57dad9c809c5ff0162b17d220917089d4cc7075" className="data-to-link">
          0xe57dad9c809c5ff0162b17d220917089d4cc7075
        </Link>
      </div>
    ),
  },
  {
    title: 'TokenID',
    dataIndex: 'tokenId',
    // width: 50,
    render: () => (
      <Link href="/token/3133241983744783525487773843157525" className="data-tokenId">
        3133241983744783525487773843157525
      </Link>
    ),
  },
  {
    title: 'Value',
    dataIndex: 'value',
    // width: 50,
    render: () => <div className="data-value">1</div>,
  },
]

function info() {
  Modal.info({
    title: 'Poligonscan.com says',
    content: (
      <div>
        <p>Please connect to your Web3 pro vider!</p>
      </div>
    ),
    onOk() {},
  })
}
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`)
}

/**
 * Detail address
 */

const TokenPage = () => {
  const { query } = useRouter()
  const refToken = React.useRef()

  const [tokenInfo, setTokenInfo] = React.useState()
  console.log(tokenInfo)

  // init web3 token
  React.useEffect(() => {
    ;(async () => {
      if (query.token && isAddress(query.token)) {
        refToken.current = new Web3Token(query.token)
        const pInfoToken = await refToken.current.getFullInfo()
        setTokenInfo(pInfoToken)
      }
    })()
  }, [query.token])

  const [isCoppy, setIsCoppy] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  if (isCoppy === true) {
    console.log('coppied')
  }
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
    navigator.clipboard.writeText('0xD50D167DD35D256e19E2FB76d6b9Bf9F4c571A3E')
  }
  const handleClick = (e) => {
    console.log('click ', e)
  }
  const onSearch = (value) => console.log(value)

  if (!tokenInfo) return <>Loading...</>
  return (
    <div className="token-wrapper">
      <div className="container token-heading">
        <h1>
          <img src="https://polygonscan.com/images/main/empty-token.png" alt="" />
          Token
          <span>{tokenInfo.name}</span>
        </h1>
        <div>
          <Space wrap>
            <Dropdown overlay={Buy} trigger={['click']}>
              <Button>
                Buy <DownOutlined />
              </Button>
            </Dropdown>
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
        </div>
      </div>
      <div className="container hr-alt-01">
        <div />
      </div>
      <div className="container token-main">
        <div className="main-top">
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <div className="card main-top-left">
                <div className="main-top-left-header">
                  Overview
                  {/* <span>ERC-721</span> */}
                </div>
                <div className="main-top-left-body">
                  <div className="main-top-left-body-item">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        Total Supply:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        <CurrencyFormat
                          value={tokenInfo.totalSupply / 10 ** tokenInfo.decimals}
                          displayType="text"
                          thousandSeparator
                          renderText={(value) => value}
                        />{' '}
                        <strong>{tokenInfo.symbol}</strong>
                      </Col>
                    </Row>
                  </div>
                  {/* <div className="main-top-left-body-item">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        Holders:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        16,552 addresses
                      </Col>
                    </Row>
                  </div>
                  <div className="main-top-left-body-item">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        Transfers:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        11,290,787
                      </Col>
                    </Row>
                  </div> */}
                </div>
              </div>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <div className="card main-top-right">
                <div className="main-top-right-header">
                  <div className="header-left">Profile Summary</div>
                  <div className="header-right">
                    <MehOutlined />
                    <CheckOutlined />
                    <Dropdown overlay={menu} trigger={['click']}>
                      <Link href="#" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                        <MoreOutlined />
                      </Link>
                    </Dropdown>
                  </div>
                </div>
                <div className="main-top-right-body-to">
                  <div className="main-top-right-body-item-to">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }} className="main-top-right-body-item-flex">
                        <div>Contract:</div>
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        <div className="address-copy">
                          <Link href={`/address/${tokenInfo.address}`} className="contract-link">
                            {tokenInfo.address}
                          </Link>
                          <a className="contract-link-copy">
                            {!isCoppy ? (
                              <CopyOutlined onClick={setIsCopped} />
                            ) : (
                              <CheckCircleOutlined onClick={setIsCopped} />
                            )}
                            {isCoppy && (
                              <span className="coppied" style={{ color: '#8c98a4', marginLeft: '4px' }}>
                                coppied
                              </span>
                            )}
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="main-top-right-body-item-to">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }} className="main-top-right-body-item-flex">
                        <div>Decimals:</div>
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        <div>{tokenInfo.decimals}</div>
                      </Col>
                    </Row>
                  </div>
                  <div className="main-top-right-body-item-to">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }} className="main-top-right-body-item-flex">
                        <div>Social Profiles:</div>
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        <div>
                          Not Available
                          <Link href="#" className="contract-update">
                            , Update ?
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="token-main-center" />
        <div className="token-main-under">
          <Tabs
            defaultActiveKey="1"
            onChange={callback}
            tabBarExtraContent={
              <Dropdown
                trigger={['click']}
                overlay={
                  <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Find"
                    size="middle"
                    onSearch={onSearch}
                  />
                }
                arrow={{ pointAtCenter: true }}
              >
                <Button className="btn-more-transaction">
                  <SearchOutlined />
                </Button>
              </Dropdown>
            }
          >
            <TabPane tab="Transfers" key="1">
              <div className="token-main-under-card">
                <div className="main-under-card-content">
                  <div className="card-content-text">
                    <span className="card-content-text-text">
                      A total of 5,090 transactions found
                      <span>(Showing the last 100k records)</span>
                    </span>
                  </div>
                  <div className="card-content-table">
                    <Table columns={columnsTransfer} dataSource={[]} />
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
            <TabPane tab="Holders" key="2">
              <div className="token-main-under-card">
                <div className="main-under-card-content">
                  <div className="card-content-text-holder">
                    <Link href="#">
                      <PieChartFilled />
                      Token Holders Chart
                    </Link>
                    <span className="card-content-text-holder-span">
                      {' '}
                      Top 1,000 holders (From a total of 16,623 holders)
                    </span>
                  </div>
                  <div className="card-content-table">
                    <Table columns={columns} dataSource={[]} />
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
            <TabPane tab="Inventory" key="3">
              <div className="token-main-under-card">
                <div className="main-under-card-content">
                  <div className="card-content-text">
                    <div>
                      <span> Latest 10,000 active tokens (From a total of 646,757 tokens)</span>
                    </div>
                  </div>
                  <div className="card-content-table">
                    <Table columns={columnsdataInventory} dataSource={[]} />
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
            <TabPane tab="Info" key="4">
              <div className="token-main-under-card">
                <div className="info-update">
                  Click here to{' '}
                  <Link href="#" className="info-update-link">
                    update
                  </Link>{' '}
                  the token ICO / general information
                </div>
              </div>
            </TabPane>
            <TabPane tab="Contract" key="5">
              <div className="paneContract">
                <Tabs onChange={callback} type="card">
                  <TabPane
                    tab={
                      <div className="paneContract-div">
                        Read <span className="paneContract-none">Contract</span>
                      </div>
                    }
                    key="1"
                  >
                    <div className="paneContract-read">
                      Sorry, we were unable to locate a matching Contract ABI or SourceCode for this contract. <br />{' '}
                      <br />
                      If you are the contract owner, please <Link href="#">Verify Your Contract Source Code</Link> here.
                    </div>
                  </TabPane>
                  <TabPane
                    tab={
                      <div className="paneContract-div">
                        Write <span className="paneContract-none">Contract</span>
                      </div>
                    }
                    key="2"
                  >
                    <div className="paneContract-content">
                      <div className="content-header">
                        <p>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
                          </svg>
                          <Button type="primary" onClick={showModal}>
                            <Link href="#">Connect to Web3</Link>
                          </Button>
                          <Modal
                            title="Connect a Wallet"
                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                          >
                            <Link href="#">
                              <span>MetaMask</span>
                              <img src="https://polygonscan.com/images/svg/brands/metamask.svg" alt="" />
                            </Link>
                            <Link href="#">
                              <span>WalletConnect</span>
                              <img src="https://polygonscan.com/images/svg/brands/walletconnect.svg" alt="" />
                            </Link>
                          </Modal>
                        </p>
                        <Link href="#">[Reset]</Link>
                      </div>
                      <div className="content-main">
                        <Menu
                          onClick={handleClick}
                          style={{ width: 256 }}
                          defaultSelectedKeys={['1']}
                          defaultOpenKeys={['sub1']}
                          mode="inline"
                        >
                          <SubMenu key="sub1" title="1. admin">
                            <Space wrap>
                              <Button onClick={info}>Write</Button>
                            </Space>
                          </SubMenu>
                        </Menu>
                      </div>
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            </TabPane>
            <TabPane tab="Comments" key="6">
              <div className="comments-div">Comment</div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

TokenPage.Layout = PublicLayoutBlock
export default TokenPage
