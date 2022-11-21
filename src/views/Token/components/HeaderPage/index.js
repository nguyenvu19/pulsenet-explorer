import React from 'react'
import { Space, Dropdown, Button, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { Link } from 'components/Link'

const TokenHeader = ({ tokenInfo }) => {
  return (
    <div className="container token-heading">
      <h1>
        <img src="https://polygonscan.com/images/main/empty-token.png" alt="" />
        Token
        <span>{tokenInfo.name}</span>
      </h1>
      <div>
        <Space wrap>
          <Dropdown
            overlay={
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
            }
            trigger={['click']}
          >
            <Button>
              Buy <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown
            overlay={
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
            }
            trigger={['click']}
          >
            <Button>
              Exchange <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="1">
                  <div>
                    <span className="sponsored">Sponsored</span>
                    <Link href="#">
                      <img src="https://polygonscan.com/images/gen/cryptocom_defiwallet_20.png" alt="" />
                      <span className="title-big">
                        Crypto.com DeFi Wallet - Safekeep 600+ cryptos and earn token rewards{' '}
                      </span>
                      <span className="title-mini">Install Now</span>
                    </Link>
                    <span className="title-text">
                      Enjoy up to 20% p.a. on your holdings. Plus, boost your rewards rates by up to 20x when you stake
                      CRO!
                    </span>
                  </div>
                </Menu.Item>
                <Menu.Item key="2">
                  <div>
                    <span className="sponsored">Sponsored</span>
                    <Link href="#">
                      <img src="https://polygonscan.com/images/gen/bingx_20.png" alt="" />
                      <span className="title-big">
                        BingX: Register Now to Grab 150 USDT - Polygonscan Users Exclusive{' '}
                      </span>
                      <span className="title-mini">Start Today!</span>
                    </Link>
                    <span className="title-text">Signup Rewards Limited to 1000 per day</span>
                  </div>
                </Menu.Item>
              </Menu>
            }
            trigger={['click']}
          >
            <Button>
              Earn <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown
            overlay={
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
                      Daily free Spin 50000 Matic ,240% Deposit Bonus, 20%Rakeback, And Get 1000000 Matic free bonus on
                      BC.Game
                    </span>
                  </div>
                </Menu.Item>
              </Menu>
            }
            trigger={['click']}
          >
            <Button>
              Gaming <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      </div>
    </div>
  )
}

export default TokenHeader
