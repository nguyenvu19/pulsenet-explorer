import React, { useEffect, useState } from 'react'
import { Menu, Space, Row, Col, Dropdown, Button } from 'antd'
import { useRouter } from 'next/router'
import {
  QuestionCircleOutlined,
  LeftOutlined,
  RightOutlined,
  ClockCircleOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from '@ant-design/icons'
import Web3 from 'web3'
import ReactTimeAgo from 'react-time-ago'
import CurrencyFormat from 'react-currency-format'
import { PROVIDER_NETWORK_URL } from 'config/constants'
import Link from 'components/Link/NextLink'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'

const web3 = new Web3(PROVIDER_NETWORK_URL)

const Block = () => {
  const {
    query: { block },
  } = useRouter()

  const [blockDetail, setBlockDetail] = React.useState()
  // console.log(blockDetail)

  useEffect(() => {
    async function getDetailBlock(blockNumber) {
      const res = await web3.eth.getBlock(blockNumber)
      return res
    }
    if (block) {
      getDetailBlock(block)
        .then((res) => setBlockDetail(res))
        .catch(console.error)
    }
  }, [block])

  const [collapse, setCollapse] = useState(false)
  const [menuTab, setMenuTab] = useState('Overview')

  const setMenu1 = () => {
    setMenuTab('Overview')
    console.log(menuTab)
  }
  const setMenu2 = () => {
    setMenuTab('Comment')
    console.log(menuTab)
  }

  const collapseToggle = () => {
    setCollapse(!collapse)
  }

  if (!blockDetail) return <></>
  return (
    <section className="block-wrapper">
      <div className="container block-container-heading">
        <h1 className="heading-text">
          Block
          <span className="text-small"> #{block}</span>
        </h1>
      </div>
      <div className="container ">
        <div className="block-card">
          <div className="block-card-header">
            <Menu mode="horizontal">
              <Menu.Item
                onClick={setMenu1}
                className={menuTab === 'Overview' ? 'ant-menu-item-selected' : 'overviews'}
                key="mail"
              >
                Overview
              </Menu.Item>
              {/* <Menu.Item onClick={setMenu2} className="comment" key="alipay">
                Comment
              </Menu.Item> */}
            </Menu>
          </div>
          <div className="card-content">
            {menuTab === 'Overview' ? (
              <div className="card-content-show">
                <div className="card-content-item ant-menu-horizontal ">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 6 }}>
                      <Space>
                        <QuestionCircleOutlined />
                      </Space>
                      Block Height:
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 18 }}>
                      <span className="item-hash">{block}</span>
                      <Link href={`/block/${+block - 1}`} className="item-leftRight">
                        <LeftOutlined />
                      </Link>
                      <Link href={`/block/${+block + 1}`} className="item-leftRight">
                        <RightOutlined />
                      </Link>
                    </Col>
                  </Row>
                </div>
                {/* <hr className="hr-space" /> */}
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 6 }}>
                      <Space>
                        <QuestionCircleOutlined />
                      </Space>
                      Timestamp:
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 18 }}>
                      <Link href="/block" className="item-clock-icons">
                        <ClockCircleOutlined />
                      </Link>
                      <span className="item-clock">
                        <ReactTimeAgo date={parseInt(blockDetail.timestamp) * 1000} locale="en-US" /> (
                        {new Date(parseInt(blockDetail.timestamp) * 1000).toISOString()})
                      </span>
                    </Col>
                  </Row>
                </div>
                {/* <hr className="hr-space" /> */}
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 6 }}>
                      <Space>
                        <QuestionCircleOutlined />
                      </Space>
                      Transactions:
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 18 }}>
                      <Link className="transaction-link" href={`/txs?block=${block}`}>
                        {blockDetail.transactions.length} transactions
                      </Link>
                      {/* <span className="transaction-text">and</span>
                      <Link className="transaction-link" href="/txs">
                        10 contract internal transactions
                      </Link>
                      <span className="transaction-text"> in this block</span> */}
                    </Col>
                  </Row>
                </div>
                {/* <hr className="hr-space" /> */}
                {/* <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 6 }}>
                      <Space>
                        <QuestionCircleOutlined />
                      </Space>
                      Validated by:
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 18 }}>
                      <Link className="validated-link" href="/address/0xf0245f6251bef9447a08766b9da2b07b28ad80b0">
                        0xf0245f6251bef9447a08766b9da2b07b28ad80b0
                      </Link>
                      <span className="transaction-text"> in 2 secs</span>
                    </Col>
                  </Row>
                </div> */}
                {/* <hr className="hr-space" /> */}
                {/* <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 6 }}>
                      <Space>
                        <QuestionCircleOutlined />
                      </Space>
                      Block Reward:
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 18 }}>
                      <span className="reward-text">323483812936695264 PI </span>
                    </Col>
                  </Row>
                </div> */}
                {/* <hr className="hr-space" /> */}
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 6 }}>
                      <Space>
                        <QuestionCircleOutlined />
                      </Space>
                      Difficulty:
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 18 }}>
                      <span className="reward-text">{blockDetail.difficulty}</span>
                    </Col>
                  </Row>
                </div>
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 6 }}>
                      <Space>
                        <QuestionCircleOutlined />
                      </Space>
                      Total Difficulty:
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 18 }}>
                      <span className="reward-text">
                        <CurrencyFormat
                          value={parseInt(blockDetail.totalDifficulty)}
                          displayType="text"
                          thousandSeparator
                          renderText={(value) => value}
                        />
                      </span>
                    </Col>
                  </Row>
                </div>
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 6 }}>
                      <Space>
                        <QuestionCircleOutlined />
                      </Space>
                      Size:
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 18 }}>
                      <span className="reward-text">
                        {' '}
                        <CurrencyFormat
                          value={parseInt(blockDetail.size)}
                          displayType="text"
                          thousandSeparator
                          renderText={(value) => value}
                        />{' '}
                        bytes
                      </span>
                    </Col>
                  </Row>
                </div>
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 6 }}>
                      <Space>
                        <QuestionCircleOutlined />
                      </Space>
                      Gas Used:
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 18 }} style={{ display: 'flex' }}>
                      <span className="reward-text">
                        <CurrencyFormat
                          value={parseInt(blockDetail.gasUsed)}
                          displayType="text"
                          thousandSeparator
                          renderText={(value) => value}
                        />{' '}
                        ({((blockDetail.gasUsed / blockDetail.gasLimit) * 100).toFixed(1)}%)
                      </span>
                      <span className="reward-text-right">
                        <svg
                          version="1.1"
                          className="highcharts-root"
                          // style='font-family:"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif;font-size:12px;'
                          xmlns="http://www.w3.org/2000/svg"
                          width="80"
                          height="40"
                          viewBox="0 0 80 40"
                        >
                          <desc>Created with Highcharts 9.1.2</desc>
                          <defs>
                            <clipPath id="highcharts-c8vhij5-2-">
                              <rect x="0" y="0" width="80" height="40" fill="none" />
                            </clipPath>
                          </defs>
                          <rect
                            fill="#ffffff"
                            className="highcharts-background"
                            x="0"
                            y="0"
                            width="80"
                            height="40"
                            rx="0"
                            ry="0"
                          />
                          <rect fill="none" className="highcharts-plot-background" x="0" y="0" width="80" height="40" />
                          <g className="highcharts-pane-group" data-z-index="0">
                            <path
                              fill="#EEE"
                              d="M 20 27.999999999999996 A 20 20 0 0 1 59.999990000000835 27.98000000333334 L 51.9999940000005 27.988000002000007 A 12 12 0 0 0 28 28 Z"
                              className="highcharts-pane "
                              stroke="#cccccc"
                              strokeWidth="1"
                            />
                          </g>
                          <g
                            className="highcharts-grid highcharts-yaxis-grid highcharts-radial-axis-grid"
                            data-z-index="1"
                          >
                            <path
                              fill="none"
                              strokeDasharray="none"
                              data-z-index="1"
                              className="highcharts-grid-line"
                              d="M 28 27.999999999999996 L 20 27.999999999999996"
                              opacity="1"
                            />
                            <path
                              fill="none"
                              strokeDasharray="none"
                              data-z-index="1"
                              className="highcharts-grid-line"
                              d="M 52 28.000000000000004 L 60 28.000000000000007"
                              opacity="1"
                            />
                          </g>
                          <rect
                            fill="none"
                            className="highcharts-plot-border"
                            data-z-index="1"
                            x="0"
                            y="0"
                            width="80"
                            height="40"
                          />
                          <g className="highcharts-axis highcharts-yaxis highcharts-radial-axis" data-z-index="2">
                            <path
                              fill="none"
                              className="highcharts-axis-line"
                              data-z-index="7"
                              d="M 20 27.999999999999996 A 20 20 0 0 1 59.999990000000835 27.980000003333334 M 40 28 A 0 0 0 0 0 40 28"
                            />
                          </g>
                          <g className="highcharts-series-group" data-z-index="3">
                            <g
                              className="highcharts-series highcharts-series-0 highcharts-solidgauge-series highcharts-tracker"
                              data-z-index="0.1"
                              opacity="1"
                              transform="translate(0,0) scale(1 1)"
                              clipPath="url(#highcharts-c8vhij5-2-)"
                            >
                              <path
                                fill="rgb(85,191,59)"
                                d="M 20 27.999999999999996 A 20 20 0 0 1 59.999990000000835 27.980000003333334 L 51.9999940000005 27.988000002 A 12 12 0 0 0 28 28 Z"
                                sweep-flag="0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="highcharts-point highcharts-color-0"
                              />
                            </g>
                            <g
                              className="highcharts-markers highcharts-series-0 highcharts-solidgauge-series"
                              data-z-index="0.1"
                              opacity="1"
                              transform="translate(0,0) scale(1 1)"
                              clipPath="none"
                            />
                          </g>
                          <text x="40" textAnchor="middle" className="highcharts-title" data-z-index="4" y="24" />
                          <text x="40" textAnchor="middle" className="highcharts-subtitle" data-z-index="4" y="24" />
                          <text x="10" textAnchor="start" className="highcharts-caption" data-z-index="4" y="37" />
                          <g className="highcharts-legend highcharts-no-tooltip" data-z-index="7">
                            <rect
                              fill="none"
                              className="highcharts-legend-box"
                              rx="0"
                              ry="0"
                              x="0"
                              y="0"
                              width="8"
                              height="8"
                              visibility="hidden"
                            />
                            <g data-z-index="1">
                              <g />
                            </g>
                          </g>
                          <g
                            className="highcharts-axis-labels highcharts-yaxis-labels highcharts-radial-axis-labels"
                            data-z-index="7"
                          />
                        </svg>
                        -({((blockDetail.gasUsed / blockDetail.gasLimit) * 100).toFixed(1)}%) Gas Target
                      </span>
                    </Col>
                  </Row>
                </div>
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 6 }}>
                      <Space>
                        <QuestionCircleOutlined />
                      </Space>
                      Gas Limit:
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 18 }}>
                      <span className="reward-text">
                        <CurrencyFormat
                          value={parseInt(blockDetail.gasLimit)}
                          displayType="text"
                          thousandSeparator
                          renderText={(value) => value}
                        />
                      </span>
                    </Col>
                  </Row>
                </div>
                {blockDetail.baseFeePerGas && (
                  <div className="card-content-item ant-menu-horizontal">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 6 }}>
                        <Space>
                          <QuestionCircleOutlined />
                        </Space>
                        Base Fee Per Gas:
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 18 }}>
                        <span className="reward-text">{blockDetail.baseFeePerGas} wei</span>
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
                      Burnt Fees:
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 18 }}>
                      <span className="reward-text">
                        🔥 0 <b>.</b>000000000389893699 PI 
                      </span>
                    </Col>
                  </Row>
                </div> */}
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 6 }}>
                      <Space>
                        <QuestionCircleOutlined />
                      </Space>
                      Extra Data:
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 18 }}>
                      <textarea
                        readOnly
                        value={`Hex: ${blockDetail.extraData}
                        ExtraVanity : ւ�bor�go1.17.8�linux��������� 
                        SignedData : 0x${blockDetail.extraData.slice(
                          blockDetail.extraData.length - 64,
                          blockDetail.extraData.length,
                        )}`}
                      />
                    </Col>
                  </Row>
                </div>
                {collapse && (
                  <div className="card-content-item_show ant-menu-horizontal">
                    <div className="card-content-item ant-menu-horizontal">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 6 }}>
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          Hash:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 18 }}>
                          <span className="reward-text">{blockDetail.hash}</span>
                        </Col>
                      </Row>
                    </div>
                    <div className="card-content-item ant-menu-horizontal">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 6 }}>
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          Parent Hash:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 18 }}>
                          <a className="reward-text">{blockDetail.parentHash}</a>
                        </Col>
                      </Row>
                    </div>
                    <div className="card-content-item ant-menu-horizontal">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 6 }}>
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          Sha3Uncles:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 18 }}>
                          <span className="reward-text">{blockDetail.sha3Uncles}</span>
                        </Col>
                      </Row>
                    </div>
                    <div className="card-content-item ant-menu-horizontal">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 6 }}>
                          <Space>
                            <QuestionCircleOutlined />
                          </Space>
                          Nonce:
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 18 }}>
                          <span className="reward-text"> {blockDetail.nonce}</span>
                        </Col>
                      </Row>
                    </div>
                  </div>
                )}
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
            ) : (
              <div className="card-content-comment">
                Make sure to use the "Vote Down" button for any spammy posts, and the "Vote Up" for interesting
                conversations.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

Block.Layout = PublicLayoutBlock

export default Block
