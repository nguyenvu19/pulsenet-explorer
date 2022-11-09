import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { Menu, Dropdown, Button, Space, Tabs, Row, Col, message } from 'antd'
import {
  DownOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  CopyOutlined,
  CheckCircleFilled,
  ClockCircleOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
  ZoomInOutlined,
  MoreOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import BigNumber from 'bignumber.js'
import ReactTimeAgo from 'react-time-ago'
import CurrencyFormat from 'react-currency-format'
import Web3 from 'library/Web3'
import { toLocaleString } from 'utils'
import TxReceiptEventLogItem from 'components/TxReceiptEventLogItem'
import { toFixed } from 'utils/number'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import Link from 'components/NextLink/NextLink'
import CoppyText from 'components/CoppyText'
import { APP_URL } from 'config/constants'
import ABI_TOKEN from 'config/constants/abis/abi_token_bep20.json'
import TokensTransferred from 'components/TokensTransferred'
import siteConfig from '../../config/site.config'

const abiDecoder = require('abi-decoder')
abiDecoder.addABI(ABI_TOKEN)

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

const { web3 } = new Web3()

const TransactionModule = (props) => {
  const {
    query: { txHash },
  } = useRouter()

  const [collapse, setCollapse] = useState(false)

  const [latestBlockNumber, setLatestBlockNumber] = useState()
  const [txnLogs, setTxnLogs] = useState()
  const [txnDetail, setTxnDetail] = useState()
  const [blockDetail, setBlockDetail] = useState()
  const [dataDecodeLogs, setDataDecodeLogs] = useState()

  // get latest blocknumber
  React.useEffect(() => {
    ;(async () => {
      const latest = await web3.eth.getBlockNumber()
      setLatestBlockNumber(latest)
    })()
  }, [txHash])
  // get transaction detail and transaction logs  and block detail
  React.useEffect(() => {
    web3.eth.getTransaction(txHash, (error, result) => {
      if (error || !result) return setTxnDetail(null)
      setTxnDetail(result)
    })
    web3.eth.getTransactionReceipt(txHash, async (error, result) => {
      if (error || !result) return setTxnLogs(null)

      const type = await web3.eth.getCode(result.to)
      setTxnLogs({ ...result, type })

      const blockDetail = await web3.eth.getBlock(result.blockNumber)
      setBlockDetail(blockDetail)
    })
  }, [txHash])
  // decoder transaction logs
  React.useEffect(() => {
    if (txnLogs) {
      const decodedLogs = abiDecoder.decodeLogs(txnLogs.logs)
      setDataDecodeLogs(decodedLogs)
    }
  }, [txnLogs])

  const onDataDecodeLogsTransfer = useMemo(() => dataDecodeLogs?.filter((o) => o.name === 'Transfer'), [dataDecodeLogs])
  // React.useEffect(() => {
  //   ;(async () => {
  //     provider.getTransaction(txHash).then((result) => {
  //       const decodedInput = iface.parseTransaction({ data: result.data, value: result.value })
  //       console.log('result', result)
  //       // Decoded Transaction
  //       console.log({
  //         function_name: decodedInput.name,
  //         from: result.from,
  //         to: decodedInput.args[0],
  //         erc20Value: Number(decodedInput.args[1]),
  //       })
  //     })
  //     provider
  //       .getTransactionReceipt(txHash)
  //       .then(async (result) => {
  //         setTxnLogs(result)

  //         const blockDetail = await provider.getBlock(100004)
  //         setBlockDetail(blockDetail)
  //       })
  //       .catch(console.error)
  //   })()
  // }, [])

  const collapseToggle = () => {
    setCollapse(!collapse)
  }

  const menuNonce = (
    <Menu className="nonce-modal-container">
      <Menu.Item>
        <Link target="_blank" rel="noopener noreferrer" href="/" className="nonce-modal-conent">
          Index position of Transaction in the block
        </Link>
      </Menu.Item>
    </Menu>
  )
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
  const menuPosition = (
    <Menu className="noncedata-modal-container">
      <Menu.Item>
        <Link target="_blank" rel="noopener noreferrer" href="/" className="noncedata-modal-conent">
          Index position of Transaction in the block
        </Link>
      </Menu.Item>
    </Menu>
  )
  const menuStatus = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <main className="transaction-content">
      <div className="container transaction-heading">
        <h1>Transaction Details</h1>
        {/* <div>
            <Space wrap>
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
          </div> */}
      </div>
      <div className="container hr-alt-01">
        <div />
      </div>
      <div className="container transaction-space">
        {/* <b>Sponsored:</b>
        <img src="https://polygonscan.com/images/gen/sportx_20.png" alt="" />
        <b> - SportX.bet -</b>
        <a>
          <b className="transaction-space-text">$170M bet by the PI Community to date!</b>
        </a> */}
      </div>
      <div className="container transaction-bottom">
        <div className="card transaction-space-card">
          <Tabs defaultActiveKey="1" onChange={callback} tabBarExtraContent={operations}>
            <TabPane tab="Overview" key="1">
              {txnLogs && (
                <>
                  <div className="card-content-item ant-menu-horizontal">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 6 }}>
                        <Space>
                          <QuestionCircleOutlined />
                        </Space>
                        Transaction Hash:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 18 }}>
                        <CoppyText value={txnLogs.transactionHash}>{txnLogs.transactionHash}</CoppyText>
                      </Col>
                    </Row>
                  </div>
                  <div className="card-content-item ant-menu-horizontal ">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 6 }}>
                        <Space>
                          <QuestionCircleOutlined />
                        </Space>
                        Status:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 18 }}>
                        <Dropdown
                          className={`u-label ${txnLogs.status ? 'u-label--success' : 'u-label--danger'}`}
                          overlay={menuSuccess}
                          placement="topRight"
                        >
                          <span>
                            <CheckCircleFilled />
                            {txnLogs.status ? 'Success' : 'Fail'}
                          </span>
                        </Dropdown>
                      </Col>
                    </Row>
                  </div>
                  {/*  */}
                  <div className="card-content-item ant-menu-horizontal ">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 6 }}>
                        <Space>
                          <QuestionCircleOutlined />
                        </Space>
                        Block:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 18 }}>
                        <Link href={`/block/${txnLogs.blockNumber}`} className="item-clock">
                          {txnLogs.blockNumber}
                        </Link>

                        {latestBlockNumber && (
                          <span className="item-block-stickers">
                            <Space>
                              <Dropdown className="non-position-item-span" overlay={menuBlock} placement="topRight">
                                <Button>{latestBlockNumber - txnLogs.blockNumber} Block Confirmations</Button>
                              </Dropdown>
                            </Space>
                          </span>
                        )}
                      </Col>
                    </Row>
                  </div>
                  {/* Timestamp */}
                  {blockDetail?.timestamp && (
                    <div className="card-content-item ant-menu-horizontal ">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 6 }}>
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          Timestamp:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 18 }}>
                          <Link href="/" className="item-timestamp-icons">
                            <ClockCircleOutlined />
                          </Link>
                          <span className="item-clock-time">
                            <ReactTimeAgo date={parseInt(blockDetail.timestamp) * 1000} locale="en-US" /> (
                            {new Date(blockDetail.timestamp * 1000).toISOString()})
                          </span>
                        </Col>
                      </Row>
                    </div>
                  )}
                  {/* From */}
                  {txnLogs?.from && (
                    <div className="card-content-item ant-menu-horizontal ">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 6 }}>
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          From:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 18 }}>
                          <CoppyText value={txnLogs.from} href={`/address/${txnLogs.from}`}>
                            {txnLogs.from}
                          </CoppyText>
                        </Col>
                      </Row>
                    </div>
                  )}
                  {/*  */}
                  {/* {txnLogs.to && (
                      <div className="card-content-item ant-menu-horizontal ">
                        <Row>
                          <Col xs={{ span: 24 }} md={{ span: 6 }}>
                            <Space>
                              <QuestionCircleOutlined />
                            </Space>
                            To:
                          </Col>
                          <Col xs={{ span: 24 }} md={{ span: 18 }}>
                            <div className="to-contract">
                              <CoppyText
                                className="item-hash-contract"
                                value={txnLogs.to}
                                href={`/address/${txnLogs.to}`}
                              >
                                {txnLogs.to}
                              </CoppyText>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    )} */}
                  {txnLogs?.type === '0x' ? (
                    <div className="card-content-item ant-menu-horizontal ">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 6 }}>
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          To:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 18 }}>
                          <div className="to-contract">
                            <CoppyText
                              className="item-hash-contract"
                              value={txnLogs.to}
                              href={`/address/${txnLogs.to}`}
                            >
                              {txnLogs.to}
                            </CoppyText>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  ) : (
                    <div className="card-content-item ant-menu-horizontal ">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 6 }}>
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          Interacted With (To):
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 18 }}>
                          <div className="to-contract">
                            Contract
                            <CoppyText
                              className="item-hash-contract"
                              value={txnLogs.to}
                              href={`/address/${txnLogs.to}`}
                            >
                              {txnLogs.to}
                            </CoppyText>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  )}
                  {/*  */}
                  {txnLogs?.txAction && (
                    <div className="card-content-item ant-menu-horizontal ">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 6 }}>
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          Transaction Action:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 18 }}>
                          <ul className="transaction-action-list">
                            <li>
                              <Link className="item-hash-transaction">
                                <span>‣ Mint of</span>
                                <img src="https://polygonscan.com/images/main/empty-token.png" alt="" />
                                <Link href="/token/0xD50D167DD35D256e19E2FB76d6b9Bf9F4c571A3E">
                                  <span>PlanetIX</span>
                                  <span>(PIX)</span>
                                </Link>
                                <span href="/address/0x5a98e7ce0f72995fdc13d91255443f374c1299a6">To</span>
                                <Link>0x5a98e7ce0f72995fdc13d91255443f374c1299a6</Link>
                              </Link>
                            </li>
                            <li>
                              <span>‣1</span>
                              <span>of</span>
                              <span>Token ID [</span>
                              <Link href="/token/0xD50D167DD35D256e19E2FB76d6b9Bf9F4c571A3E?a=3942379">3942379</Link>
                              <span>]</span>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  )}
                  {/*  */}
                  {onDataDecodeLogsTransfer?.length > 0 && (
                    // {txnLogs?.type === '0x2' && onDataDecodeLogsTransfer?.length > 0 && (
                    <div className="card-content-item ant-menu-horizontal">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 6 }}>
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          Tokens Transferred:
                        </Col>

                        <Col xs={{ span: 24 }} md={{ span: 18 }}>
                          {(() => {
                            return onDataDecodeLogsTransfer.map((item, index) => {
                              return (
                                <TokensTransferred
                                  key={`token-transfer-${index}`}
                                  count={onDataDecodeLogsTransfer.length}
                                  dataItem={item}
                                />
                              )
                            })
                          })()}
                        </Col>
                      </Row>
                    </div>
                  )}
                  {/*  */}
                  {txnDetail && (
                    <div className="card-content-item ant-menu-horizontal ">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 6 }}>
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          Value:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 18 }}>
                          <Space>
                            <Dropdown className="card-content-item-value" overlay={menuBlock} placement="topRight">
                              <span>
                                <CurrencyFormat
                                  value={+txnDetail.value / 1e18}
                                  displayType="text"
                                  thousandSeparator
                                  renderText={(value) => value}
                                />{' '}
                                {siteConfig.nativeCurrency.symbol}
                              </span>
                            </Dropdown>
                            {/* ($0.00) */}
                          </Space>
                          {/* <span className="card-content-item-value">
                        <span>0 PI </span>
                      </span> */}
                        </Col>
                      </Row>
                    </div>
                  )}
                  {/*  */}
                  {txnLogs && txnDetail && (
                    <div className="card-content-item ant-menu-horizontal ">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 6 }}>
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          Transaction Fee:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 18 }}>
                          {/* {(txnLogs.effectiveGasPrice / 1e18) * txnLogs.gasUsed} PI */}
                          {((txnDetail.gasPrice / 1e9) * txnLogs.gasUsed) / 1e9}
                        </Col>
                      </Row>
                    </div>
                  )}
                  {/*  */}
                  {txnLogs && (
                    <div className="card-content-item ant-menu-horizontal ">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 6 }}>
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          Txn Type:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 18 }}>
                          {(() => {
                            switch (txnLogs.type) {
                              case '0x':
                                return '0 (Legacy)'
                              default:
                                return '2 (EIP-1559)'
                            }
                          })()}
                        </Col>
                      </Row>
                    </div>
                  )}
                  {/*  */}
                  {collapse && (
                    <div className="card-content-item_show ant-menu-horizontal">
                      <div className="card-content-item ant-menu-horizontal">
                        <Row>
                          <Col xs={{ span: 24 }} md={{ span: 6 }}>
                            <Space>
                              <QuestionCircleOutlined />
                            </Space>
                            Gas Limit:
                          </Col>
                          <Col xs={{ span: 24 }} md={{ span: 18 }}>
                            <CurrencyFormat
                              value={txnDetail.gas}
                              displayType="text"
                              thousandSeparator
                              renderText={(value) => value}
                            />{' '}
                          </Col>
                        </Row>
                      </div>
                      {txnLogs && txnDetail && (
                        <div className="card-content-item ant-menu-horizontal">
                          <Row>
                            <Col xs={{ span: 24 }} md={{ span: 6 }}>
                              <Space>
                                <QuestionCircleOutlined />
                              </Space>
                              Gas Used by Transaction:
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 18 }}>
                              <CurrencyFormat
                                value={txnLogs.gasUsed}
                                displayType="text"
                                thousandSeparator
                                renderText={(value) => value}
                              />{' '}
                              (
                              {(() => {
                                return ((txnLogs.gasUsed / txnDetail.gas) * 100).toFixed(0)
                              })()}
                              %)
                            </Col>
                          </Row>
                        </div>
                      )}
                      {/* <div className="card-content-item ant-menu-horizontal">
                          <Row>
                            <Col xs={{ span: 24 }} md={{ span: 6 }}>
                              <Space>
                                <QuestionCircleOutlined />
                              </Space>
                              Base Fee Per Gas:
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 18 }}>
                              {blockDetail.baseFeePerGas} wei (
                              {web3.utils.fromWei(blockDetail.baseFeePerGas.toString(), 'Gwei')} Gwei)
                            </Col>
                          </Row>
                        </div> */}
                      {/* <div className="card-content-item ant-menu-horizontal">
                          <Row>
                            <Col xs={{ span: 24 }} md={{ span: 6 }}>
                              <Space>
                                <QuestionCircleOutlined />
                              </Space>
                              Burnt Fees:
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 18 }}>
                              0.000000000041305888 PI 
                            </Col>
                          </Row>
                        </div> */}
                      {txnDetail && (
                        <div className="card-content-item ant-menu-horizontal">
                          <Row>
                            <Col xs={{ span: 24 }} md={{ span: 6 }}>
                              <Space>
                                <QuestionCircleOutlined />
                              </Space>
                              Gas Price:
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 18 }}>
                              {toFixed(+txnDetail.gasPrice / 1e18)} {siteConfig.nativeCurrency.symbol} (
                              {toFixed(+txnDetail.gasPrice / 1e9)} Gwei)
                            </Col>
                          </Row>
                        </div>
                      )}
                      {txnDetail && (
                        <div className="card-content-item ant-menu-horizontal">
                          <Row>
                            <Col xs={{ span: 24 }} md={{ span: 6 }}>
                              <Space>
                                <QuestionCircleOutlined />
                              </Space>
                              Nonce
                              <Space>
                                <Dropdown className="non-position-item-span" overlay={menuNonce} placement="topRight">
                                  <Button>Position</Button>
                                </Dropdown>
                              </Space>
                              {/* <span className="non-position-item-span">Position</span> */}
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 18 }}>
                              {txnDetail.nonce}
                              <Space>
                                <Dropdown
                                  className="non-position-item-span"
                                  overlay={menuPosition}
                                  placement="topRight"
                                >
                                  <Button>{txnDetail.transactionIndex}</Button>
                                </Dropdown>
                              </Space>
                            </Col>
                          </Row>
                        </div>
                      )}
                      {txnDetail && (
                        <div className="card-content-item ant-menu-horizontal">
                          <Row>
                            <Col xs={{ span: 24 }} md={{ span: 6 }}>
                              <Space>
                                <QuestionCircleOutlined />
                              </Space>
                              Input Data:
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 18 }}>
                              <textarea value={txnDetail.input} />
                              <Space wrap>
                                <Dropdown overlay={VIewInput}>
                                  <Button>
                                    View Input As <DownOutlined />
                                  </Button>
                                </Dropdown>
                                <Button> Decode Input Data</Button>
                              </Space>
                            </Col>
                          </Row>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="card-content-item ant-menu-horizontal ">
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
                  <div className="card-content-item card-content-item-click ant-menu-horizontal ">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 6 }}>
                        <Space>
                          <QuestionCircleOutlined />
                        </Space>
                        Private Note:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 18 }}>
                        <textarea className="text-area-private" cols="30" rows="2" />
                        <span className="text-private">
                          Tip: A private note (up to 100 characters) can be saved and is useful for transaction
                          tracking. Please DO NOT store any passwords or private keys here.
                        </span>
                      </Col>
                    </Row>
                  </div>
                </>
              )}
            </TabPane>
            {/*  */}
            {txnLogs?.logs && (
              <TabPane tab={`Logs (${txnLogs.logs.length})`} key="2">
                <div className="card-body">
                  <h6>Transaction Receipt Event Logs</h6>
                  {txnLogs.logs.map((item, index) => {
                    return <TxReceiptEventLogItem mapkey={`log-item-${index}`} dataItem={item} web3={web3} />
                  })}
                </div>
              </TabPane>
            )}
            {/* <TabPane tab="Access List" key="3">
                <div>
                  <h2>Access List</h2>
                  <pre>[] </pre>
                </div>
              </TabPane> */}
            <TabPane tab="Comments" key="4">
              Make sure to use the "Vote Down" button for any spammy posts, and the "Vote Up" for interesting
              conversations.
            </TabPane>
          </Tabs>
        </div>
      </div>
    </main>
  )
}

TransactionModule.Layout = PublicLayoutBlock
export default TransactionModule
