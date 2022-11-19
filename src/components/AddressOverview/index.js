import React from 'react'
import styled from 'styled-components'
import { message, Input, Menu, Dropdown, Button, Space, Tabs, Row, Col, Table, Modal } from 'antd'
import Web3 from 'web3'
import CurrencyFormat from 'react-currency-format'
import { DownOutlined, ExpandOutlined } from '@ant-design/icons'
import { PROVIDER_NETWORK_URL } from 'config/constants'
import Link from 'components/Link/NextLink'
import siteConfig from '../../config/site.config'

const WrapAddressOverview = styled.div`
  color: ${({ theme }) => theme.colors.blackColor};

  .main-top-left-header {
    color: $text;
    font-weight: 700;
    padding: 12px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderColor};
  }

  .main-top-left-body {
    padding: 0 12px;
    .main-top-left-body-item {
      padding: 12px 0;
      border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderColor};

      .ant-row {
        display: flex;
        flex-wrap: wrap;

        ${({ theme }) => theme.mediaQueries.md} {
          flex-wrap: nowrap;
        }
      }

      .ant-col-md-16 {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          width: 200px;
          display: flex;
          border-radius: 4px;
          color: ${({ theme }) => theme.colors.blackColor};
          border: 1px solid #d5dae2;
          justify-content: space-between;
          align-items: center;

          @media only screen and (min-width: 576px) {
            width: 400px;
          }

          @include media-up(md) {
            width: 190px;
          }

          @include media-up(xl) {
            width: 300px;
          }
        }

        .menufocus-modal-container {
          position: absolute;
          left: -95px;
          bottom: 6px;
          width: fit-content;
          padding: 4px;
          text-align: center;
          background: black;
          border-radius: 4px;

          .menufocus-modal-conent {
            color: ${({ theme }) => theme.colors.secondaryColor};
            font-size: 11px;
            text-decoration: none;

            &:hover {
              color: ${({ theme }) => theme.colors.secondaryColor};
            }
          }

          &::before {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -6px;
            border-bottom: 6px solid transparent;
            border-left: 10px solid rgb(23, 23, 24);
          }

          &::after {
            content: '';
            position: absolute;
            left: calc(50% - 10px);
            bottom: -6px;
            border-bottom: 6px solid transparent;
            border-right: 10px solid rgb(23, 23, 24);
          }
        }
        .item-span {
          margin-left: 4px;
          font-size: 12px;
          color: ${({ theme }) => theme.colors.secondaryColor};
          padding: 2px 6px;
          border-radius: 4px;
          background: ${({ theme }) => theme.colors.primaryColor};
        }
        .main-top-left-body-item-icons {
          padding: 8px;
          border-radius: 4px;
          background: transparent;
          border: 1px solid #d5dae2;

          svg {
            width: 12px;
          }
        }
      }

      .main-top-left-body-item-div-empty {
        padding: 12px;
      }
    }
  }
`

const columnsSearch = [
  {
    title: ' > ERC-20 Tokens',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
]
const data = [
  {
    age: (
      <div className="ant-table-cell-content">
        <div>
          <span>
            <img src="https://polygonscan.com/token/images/minereum_32.png" alt="" />
            <span>Minereum Pol...</span>
            (MNEP)
          </span>
          <span className="detailt-token-table">300,000 MNEP</span>
        </div>
        <div>
          <span>
            <span>$62,198.41</span>
          </span>
          <span className="detailt-token-table">@1.35</span>
        </div>
      </div>
    ),
  },
  {
    age: (
      <div className="ant-table-cell-content">
        <div>
          <span>
            <img src="https://polygonscan.com/token/images/minereum_32.png" alt="" />
            <span>Minereum Pol...</span>
            (MNEP)
          </span>
          <span className="detailt-token-table">300,000 MNEP</span>
        </div>
        <div>
          <span>
            <span>$62,198.41</span>
          </span>
          <span className="detailt-token-table">@1.35</span>
        </div>
      </div>
    ),
  },
]

const NATIVE_TOKEN = siteConfig.nativeCurrency

const web3 = new Web3(PROVIDER_NETWORK_URL)

export default function AddressOverview({ address }) {
  const [infoUser, setInfoUser] = React.useState(NATIVE_TOKEN)

  React.useEffect(() => {
    ;(async () => {
      const ethBalance = await web3.eth.getBalance(address)
      setInfoUser((prev) => ({
        ...prev,
        address,
        balance: ethBalance,
      }))
    })()
  }, [address])

  return (
    <WrapAddressOverview className="card">
      <div className="main-top-left-header">Overview</div>
      <div className="main-top-left-body">
        <div className="main-top-left-body-item">
          <Row>
            <Col xs={{ span: 24 }} md={{ span: 8 }}>
              Balance:
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              {infoUser?.balance ? (
                <CurrencyFormat
                  value={parseInt(infoUser.balance) / 1e18}
                  displayType="text"
                  thousandSeparator
                  renderText={(value) => value}
                />
              ) : (
                '--'
              )}{' '}
              {infoUser.symbol}
            </Col>
          </Row>
        </div>
        <div className="main-top-left-body-item">
          <Row>
            <Col xs={{ span: 24 }} md={{ span: 8 }}>
              {infoUser.symbol} Value:
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              {/* $0.14 (@ $1.51/PI ) */} --
            </Col>
          </Row>
        </div>
        {/* <div className="main-top-left-body-item">
          <Row>
            <Col xs={{ span: 24 }} md={{ span: 8 }}>
              Token:
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              <Space wrap>
                <Dropdown
                  overlay={
                    <Menu className="overview-token">
                      <Menu.Item key="1">
                        <Input placeholder="Search for Token Name" />
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Table columns={columnsSearch} dataSource={data} />
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={['click']}
                >
                  <Button>
                    <span>
                      $11,306.58
                      <span className="item-span">13</span>
                    </span>
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </Space>
              <Dropdown
                overlay={
                  <Menu className="menufocus-modal-container">
                    <Menu.Item>
                      <Link href="#" target="_blank" rel="noopener noreferrer" className="menufocus-modal-conent">
                        Click to view address on 1 other chain.
                      </Link>
                    </Menu.Item>
                  </Menu>
                }
                arrow
                trigger={['hover']}
                placement="topRight"
              >
                <ExpandOutlined className="main-top-left-body-item-icons" />
              </Dropdown>
            </Col>
          </Row>
        </div> */}
      </div>
    </WrapAddressOverview>
  )
}

AddressOverview.defaultProps = {
  className: '',
}
