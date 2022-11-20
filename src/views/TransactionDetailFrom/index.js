import React, { useState } from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import {
  AppstoreOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
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
  TagOutlined,
  TagsFilled,
  TeamOutlined,
} from '@ant-design/icons'
import { Menu, Dropdown, Button, Space, Tabs, Row, Col, Modal } from 'antd'
import Banner from 'widgets/Banner/index'
import Link from 'components/Link/NextLink'
import TableTransactionDetail from 'components/TableTransactionDetail/index'
import TableTransactionDetailTxn from 'components/TableTransactionDetailTxn'
import siteConfig from '../../config/site.config'
// import TableEvent from 'components/TableEvent';

const { TabPane } = Tabs
function callback(key) {
  console.log(key)
}
// function handleButtonClick(e) {
//   message.info('Click on left button.');
//   console.log('click left button', e);
// }

// function handleMenuClick(e) {
//   message.info('Click on menu item.', e);
//   console.log('click', e);
// }

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
    <Menu.Item key="2">
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
    <Menu.Item key="4">
      <a href="https://www.antgroup.com">
        <FlagFilled />
        <div>Report/Flag Address</div>
      </a>
    </Menu.Item>
    <Menu.Item key="5">
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
const menuUnder = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
        </svg>
        <div> View Completed Txns</div>
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.antgroup.com">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
        </svg>
        <div> View Pending Txns</div>
      </a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="https://www.antgroup.com">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" />
        </svg>
        <div> View Failed Txns</div>
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <a href="https://www.antgroup.com">
        <ArrowRightOutlined />
        <div> View Outgoing Txns</div>
      </a>
    </Menu.Item>
    <Menu.Item key="4">
      <a href="https://www.antgroup.com">
        <ArrowLeftOutlined />
        <div> View Incoming Txns</div>
      </a>
    </Menu.Item>
    <Menu.Item key="5">
      <a href="https://www.antgroup.com">
        <ContainerOutlined />
        <div>View Contract Creation</div>
      </a>
    </Menu.Item>
  </Menu>
)

const Exchange = (
  <Menu>
    <Menu.Item key="1">
      <div>
        <span className="sponsored">Sponsored</span>
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
        <span className="sponsored">Sponsored</span>
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
    <Menu.Item key="1">
      <div>
        <span className="sponsored">Sponsored</span>
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
        <span className="sponsored">Sponsored</span>
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
    <Menu.Item key="1">
      <div>
        <span className="sponsored">Sponsored</span>
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
// const VIewInput = (
//   <Menu onClick={handleMenuClick}>
//     <Menu.Item key="1" icon={<UserOutlined />}>
//       Default View
//     </Menu.Item>
//     <Menu.Item key="3" icon={<UserOutlined />}>
//       Original
//     </Menu.Item>
//   </Menu>
// );
const menucoppied = (
  <Menu className="noncedata-modal-container">
    <Menu.Item>
      <Link target="_blank" rel="noopener noreferrer" href="/" className="noncedata-modal-conent">
        Copy address to clipboard
      </Link>
    </Menu.Item>
  </Menu>
)
const menuqrcode = (
  <Menu className="noncedata-modal-container">
    <Menu.Item>
      <Link target="_blank" rel="noopener noreferrer" href="/" className="noncedata-modal-conent">
        Click to view QR Code
      </Link>
    </Menu.Item>
  </Menu>
)
const menuaddress = (
  <Menu className="noncedata-modal-container">
    <Menu.Item>
      <Link target="_blank" rel="noopener noreferrer" href="/" className="noncedata-modal-conent">
        Click to view address on 1 other chain.
      </Link>
    </Menu.Item>
  </Menu>
)

const TransactionDetailFromModule = () => {
  const [isCoppy, setIsCoppy] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const setIsCopped = () => {
    setIsCoppy(!isCoppy)
    setInterval(() => {
      setIsCoppy(isCoppy)
    }, 2000)
    navigator.clipboard.writeText('0x1473a7e98c6cb4bd2e1db0956ad20d4172eae982d5629091d84865f25aed7a93 ')
  }
  const menuuucopped = () => (
    <>
      <Menu className="noncedata-modal-container">
        <Menu.Item>
          <Link target="_blank" rel="noopener noreferrer" href="/" className="noncedata-modal-conent">
            Copy address to clipboard
          </Link>
        </Menu.Item>
      </Menu>
      ,
    </>
  )
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <main className="txDetial-content">
      <div className="container-tx-detail">
        <div className="transaction-heading">
          <h1>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA5BJREFUeF7t3SF2FEEURuEeg0GDC56DiGBF+GwgS4iPx7IZRBQei8ZggsdN3zqneGe+6Lyerr9u3/c6M+m5fPp293qEn18vD6G6l767f+4HCUeYvv4LAMLuH8cBAAZoBMXqakAGiBvAAAwQEWrlDGAITARpASk+Q+D4KTju//j1M0AkwBBoCIwItXJDoCEwEaQFpPgMgeOHoLj/49fPAJEAQ6AhMCLUyg2BhsBEUG4B6dX/g7dT6/nX+noF19cHQE0w1gNg8wwR9y+XAwAAGaJyAC2gpLeglgEYYAFG5w/BAOezW1LJAAywBKSzB2GAs8ktqmMABliE0rnDMMC53JZVMQADLIPpzIEY4ExqC2sYgAEW4nT9oRjg+syWVjAAAywF6tqDXd4/PqXnA1z7gv/+fr0Cpn8ka/f5AyASPB1gAABACygMMEBJ7ziO6QFOP38t4MYBBgAAzACFAS2gpGcG2P6/hVrAjQMMAACYAQoDZoCSnhnADDD9Cpp+/maAGzcYAG4dgN2Pi//55mvcgtnlH/58SQuoLSh/JKx+oAEAAEhXwPRiBtACEsNaQIpvfzEDMECikAFSfPuLGYABEoUMkOLbX8wADJAoZIAU3/5iBmCARCEDpPj2FzMAAyQKGSDFt7+YARggUZgNsPv5AGn1inMC2z8RlFfgACkBAKT45hcDYP4ephUAIMU3vxgA8/cwrQAAKb75xQCYv4dpBQBI8c0vBsD8PUwrAECKb34xAObvYVoBAFJ884sBMH8P0woAkOKbXwyA+XuYVpD/Pfz7j7fpBD5//J3qpxfvzg8AmwkCAAMkBKtBGSDF34sZgAESRQyQ4ttfzAAMkChkgBTf/mIGYIBEIQOk+PYXMwADJAoZIMW3v5gBGCBRyAApvv3FDMAAiUIGSPHtLx5vgPq4+PqAgxpgRaBegbvzy+8G7l4AAJ4TwwBI8R0HA7w8pAi1gL35MUDClwHyFx8yAAOka9AQaAhMANViQ6AhMDG0+zbaEJi2zxBoCIzvZTDAfRtiDIEtPy1AC7h7LRnsVhgDMEDhN9e6DXQbmCDabdD8gIj69e/1CpreAur5128cAUC6fvvfAQAQ76NrgHH/8+cB6vkzQHxEDQAen9JtoBmgPeOIAbSAJCEtQAtIALkLSPG5CzjMAGaAdA35Q1B70KYZwAyQLkAzQIrPDGAG2HwbqwVoAclhWkCKTwvQAoa3gL8LAM+uqqwboQAAAABJRU5ErkJggg=="
              alt=""
            />
            Address
            <span>0x7AcAf470D4EA17E9296bC094A442992F654edB3f</span>
            <span>
              <Space className="transaction-heading-from-space">
                <Dropdown
                  className="heading-from-item-icon"
                  trigger={['hover']}
                  overlay={menucoppied}
                  placement="topRight"
                  onClick={menuuucopped}
                >
                  {!isCoppy ? <CopyOutlined onClick={setIsCopped} /> : <CheckCircleOutlined onClick={setIsCopped} />}
                </Dropdown>
                <Dropdown
                  className="heading-from-item-icon"
                  trigger={['hover']}
                  overlay={menuqrcode}
                  placement="topRight"
                >
                  <>
                    <Button type="primary" onClick={showModal}>
                      <AppstoreOutlined />
                    </Button>
                    <Modal
                      title="0x82d3a4892033a665b7a7631ff09B7517BCa447FB"
                      visible={isModalVisible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                      />
                    </Modal>
                  </>
                </Dropdown>
                <Dropdown
                  className="heading-from-item-icon"
                  trigger={['hover']}
                  overlay={menuaddress}
                  placement="topRight"
                >
                  <div className="heading-from-item-icon-container">
                    <img src="https://polygonscan.com/images/brands/blockscan-simple.svg" alt="" />
                    <span className="heading-from-item-icon-span">1</span>
                  </div>
                </Dropdown>
              </Space>
            </span>
          </h1>
          <div>
            <Space wrap>
              {/* <Dropdown overlay={Buy}>
              <Button>
                Buy <DownOutlined />
              </Button>
            </Dropdown> */}
              <Dropdown overlay={Exchange} trigger={['click']} className="active">
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
        <div className="transaction-Dtail-space">
          <div>
            <b>Sponsored:</b>
            <img src="https://www.polygonscan.com/images/gen/paybolt_20.png" alt="" />
            <b> - PayBolt -</b>
            <Link href="/">
              <b className="transaction-space-text">
                Web3 cross-chain payment gateway for commerce! 10B in transaction volume by 2025!
              </b>
              Explore More.
            </Link>
          </div>
        </div>
        <div className="transaction-Dtail-main">
          <div className="main-top">
            <Row gutter={[16, 16]}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <div className="main-top-left">
                  <div className="main-top-left-header">Overview</div>
                  <div className="main-top-left-body">
                    <div className="main-top-left-body-item">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          Balance:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>
                          0.089273266913380084 {siteConfig.nativeCurrency.symbol}
                        </Col>
                      </Row>
                    </div>
                    <div className="main-top-left-body-item">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          {siteConfig.nativeCurrency.symbol} Value:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>
                          $0.14 (@ $1.51/{siteConfig.nativeCurrency.symbol} )
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <div className="main-top-right">
                  <div className="main-top-right-header">
                    <div className="header-left">More Info</div>
                    <div className="header-right">
                      <HeartFilled />
                      <Dropdown overlay={menu} trigger={['click']}>
                        <Link className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                          <MoreOutlined />
                        </Link>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="main-top-right-body">
                    <div className="main-top-right-body-item">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }} className="main-top-right-body-item-flex">
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          <div>My Name Tag:</div>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>
                          Not Available
                          <Link>, Update?</Link>
                        </Col>
                      </Row>
                    </div>
                    <div className="main-top-right-body-item">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <div className="main-top-right-body-item-div-empty" />
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>
                          <div />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="main-center">
            <Banner />
          </div>
          <div className="main-under">
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Transactions" key="1">
                <div className="main-under-card">
                  <div className="main-under-card-content">
                    <div className="card-content-text">
                      <div>
                        <MenuUnfoldOutlined />
                        <span>Latest 7 from a total of 7 transactions</span>
                      </div>
                      <div className="card-content-right">
                        <Dropdown overlay={menuUnder} trigger={['click']}>
                          <Link className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
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
                          <Link>CSV Export</Link>
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
                          <Link>CSV Export</Link>
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
              <TabPane tab="Analytics" key="3">
                <div className="analytics-div" />
              </TabPane>
              <TabPane tab="Comments" key="4">
                <div className="comments-div">
                  Make sure to use the "Vote Down" button for any spammy posts, and the "Vote Up" for interesting
                  conversations.
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}

TransactionDetailFromModule.Layout = PublicLayoutBlock

export default TransactionDetailFromModule
