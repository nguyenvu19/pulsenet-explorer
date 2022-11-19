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
import Link from 'components/NextLink/NextLink'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import siteConfig from 'config/site.config.dev'
import { numberFormatter } from 'library/helpers/CommonHelper'

const web3 = new Web3(PROVIDER_NETWORK_URL)

const Block = (props) => {
  console.log(props);
  const { blockDetail } = props
  const {
    query: { block },
  } = useRouter()

  const [blockDetails, setBlockDetail] = React.useState()
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
  }
  const setMenu2 = () => {
    setMenuTab('Comment')
  }

  const collapseToggle = () => {
    setCollapse(!collapse)
  }

  const price = blockDetail?.p || 0

  if (!blockDetail) return <></>
  return (
    <section className="block-wrapper">
      <div className="container ">
        <div className="block-card">
          <div className="block-card-header">
            <Menu mode="horizontal">
              <Menu.Item
                onClick={() => setMenuTab('Overview')}
                className={menuTab === 'Overview' ? 'ant-menu-item-selected' : 'overviews'}
                key="overview"
              >
                Overview
              </Menu.Item>
              <Menu.Item
                onClick={() => setMenuTab('Consensus Info')}
                className={menuTab === 'Consensus Info' ? 'ant-menu-item-selected' : 'consensus-info'}
                key="consensus-info">
                Consensus Info
              </Menu.Item>
              <Menu.Item
                onClick={() => setMenuTab('Comments')}
                className={menuTab === 'Comments' ? 'ant-menu-item-selected' : 'comment'}
                key="comments">
                Comments
              </Menu.Item>
            </Menu>
          </div>
          <div className="card-content">
            {menuTab === 'Overview' && (
              <div className="card-content-show">
                <div className="card-content-item ant-menu-horizontal ">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                      <img src="/images/icon/question.svg" alt="" />
                      <span>Block Height:</span>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 16 }}>
                      <span className="item-hash">{blockDetail?.bn}</span>
                      <Link href={`/block/${+blockDetail?.bn - 1}`} className="item-leftRight">
                        <LeftOutlined />
                      </Link>
                      <Link href={`/block/${+blockDetail?.bn + 1}`} className="item-leftRight">
                        <RightOutlined />
                      </Link>
                    </Col>
                  </Row>
                </div>
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                      <img src="/images/icon/question.svg" alt="" />
                      <span>Status:</span>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 16 }}>
                      <span className="item-status">Finalized</span>
                    </Col>
                  </Row>
                </div>
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                      <img src="/images/icon/question.svg" alt="" />
                      <span>Timestamp:</span>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 16 }}>
                      <Link href="/block" className="item-clock-icons">
                        <ClockCircleOutlined />
                      </Link>
                      <span className="item-clock">
                        <ReactTimeAgo date={parseInt(blockDetail?.ti) * 1000} locale="en-US" /> (
                        {new Date(parseInt(blockDetail?.ti) * 1000).toISOString()})
                      </span>
                    </Col>
                  </Row>
                </div>
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                      <img src="/images/icon/question.svg" alt="" />
                      <span>Proposed On:</span>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 16 }}>
                      <div className="item-proposed">Block proposed on slot <span>5052115</span>, epoch <span>157878</span></div>
                    </Col>
                  </Row>
                </div>
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                      <img src="/images/icon/question.svg" alt="" />
                      <span>Transactions:</span>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 16 }}>
                      <div className="item-transaction">
                        <Link className="transaction-link" href={`/txs?block=${block}`}>
                          {blockDetail?.tt || 0} transactions
                        </Link>
                        and
                        <Link className="transaction-link" href={`/txs?block=${block}`}>
                          {blockDetail?.tt || 0} contact internal transactions
                        </Link>
                        in this block
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                      <img src="/images/icon/question.svg" alt="" />
                      <span>Fee Recipient:</span>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 16 }}>
                      <span className="item-fee-recipient">{blockDetail?.h || ""}</span>
                    </Col>
                  </Row>
                </div>
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                      <img src="/images/icon/question.svg" alt="" />
                      <span>Block Reward:</span>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 16 }}>
                      <span className="reward-text">{blockDetail?.br || ""}</span>
                    </Col>
                  </Row>
                </div>
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                      <img src="/images/icon/question.svg" alt="" />
                      <span>Total Difficulty:</span>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 16 }}>
                      <span className="item-total-difficulty">
                        {blockDetail?.td || ""}
                      </span>
                    </Col>
                  </Row>
                </div>
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                      <img src="/images/icon/question.svg" alt="" />
                      <span>Size:</span>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 16 }}>
                      <span className="reward-text">
                        {' '}
                        <CurrencyFormat
                          value={parseInt(blockDetail?.sz || 0)}
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
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                      <img src="/images/icon/question.svg" alt="" />
                      <span>Gas Used:</span>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 16 }} style={{ display: 'flex' }}>
                      <span className="item-text">
                        <CurrencyFormat
                          value={parseInt(blockDetail?.gu || 0)}
                          displayType="text"
                          thousandSeparator
                          renderText={(value) => value}
                        />{' '}
                        ({((blockDetail.gu / blockDetail.gl) * 100).toFixed(1)}%)
                      </span>
                    </Col>
                  </Row>
                </div>
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                      <img src="/images/icon/question.svg" alt="" />
                      <span>Gas Limit:</span>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 16 }}>
                      <span className="reward-text">
                        <CurrencyFormat
                          value={parseInt(blockDetail.gl)}
                          displayType="text"
                          thousandSeparator
                          renderText={(value) => value}
                        />
                      </span>
                    </Col>
                  </Row>
                </div>
                {blockDetail?.baseFeePerGas && (
                  <div className="card-content-item ant-menu-horizontal">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        <img src="/images/icon/question.svg" alt="" />
                        <span>Base Fee Per Gas:</span>
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        <span className="reward-text">{blockDetail.baseFeePerGas} wei</span>
                      </Col>
                    </Row>
                  </div>
                )}
                <div className="card-content-item ant-menu-horizontal">
                  <Row>
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                      <img src="/images/icon/question.svg" alt="" />
                      <span>Burnt Fees:</span>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 16 }}>
                      <div className="item-burn-fee">
                        <img src="/images/icon/fire.svg" alt="" />
                        <span>{blockDetail?.f || 0} {siteConfig?.nativeCurrency?.symbol}</span>
                      </div>
                    </Col>
                  </Row>
                </div>
                {collapse && (
                  <div className="card-content-item_show ant-menu-horizontal">
                    <div className="card-content-item ant-menu-horizontal">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <img src="/images/icon/question.svg" alt="" />
                          <span>Extra Data:</span>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>
                          <span className="reward-text">{blockDetail.e}</span>
                        </Col>
                      </Row>
                    </div>
                    <div className="card-content-item ant-menu-horizontal">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <img src="/images/icon/question.svg" alt="" />
                          <span>{siteConfig?.nativeCurrency?.symbol} Price:</span>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>

                          <a className="reward-text">${price > 0 ? numberFormatter(price, 2) : numberFormatter(price, 5)} / {siteConfig?.nativeCurrency?.symbol}</a>
                        </Col>
                      </Row>
                    </div>
                    <div className="card-content-item ant-menu-horizontal">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <img src="/images/icon/question.svg" alt="" />
                          <span>Hash:</span>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>
                          <span className="reward-text">{blockDetail?.h || ""}</span>
                        </Col>
                      </Row>
                    </div>
                    <div className="card-content-item ant-menu-horizontal">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <img src="/images/icon/question.svg" alt="" />
                          <span>Parent Hash:</span>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>
                          <span className="reward-text"> {blockDetail?.ph || ""}</span>
                        </Col>
                      </Row>
                    </div>
                    <div className="card-content-item ant-menu-horizontal">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <img src="/images/icon/question.svg" alt="" />
                          <span>StateRoot:</span>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>
                          <span className="reward-text"> {blockDetail?.sn || ""}</span>
                        </Col>
                      </Row>
                    </div>
                    <div className="card-content-item ant-menu-horizontal">
                      <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <img src="/images/icon/question.svg" alt="" />
                          <span>Nonce:</span>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>
                          <span className="reward-text"> {blockDetail?.nonce || ""}</span>
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
            )}
            {menuTab === 'Consensus Info' && (
              <p>Comming soon...</p>
            )}
            {menuTab === 'Comments' && (
              <p>Comming soon...</p>
            )}
          </div>
        </div>
        <div className="block-desc">
          <img src="/images/icon/lamp-hub.png" alt="" />
          <span>A wallet address is a publicly available address that allows its owner to receive funds from another party. To access the funds in an address, you must have its private key. Learn more about addresses in our Knowledge Base.</span>
        </div>
      </div>
    </section >
  )
}

Block.Layout = PublicLayoutBlock

export default Block
