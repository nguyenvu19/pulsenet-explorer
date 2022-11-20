import React from 'react'
import styled from 'styled-components'
import { Menu, Dropdown, Space, Row, Col } from 'antd'
import Web3 from 'web3'
import {
  ClockCircleOutlined,
  CopyOutlined,
  FlagFilled,
  HeartFilled,
  MoreOutlined,
  QuestionCircleOutlined,
  TagOutlined,
  TagsFilled,
  TeamOutlined,
} from '@ant-design/icons'
import { PROVIDER_NETWORK_URL } from 'config/constants'
import Link from 'components/Link/NextLink'

const WrapAddressMoreInfo = styled.div`
  color: ${({ theme }) => theme.colors.blackColor};

  .main-top-right-header {
    color: ${({ theme }) => theme.colors.textMain};
    font-weight: 700;
    padding: 12px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderColor};
    display: flex;
    justify-content: space-between;

    .header-right {
      .anticon-heart {
        margin: 0 4px;
        color: #3498db;
        background: rgba(52, 152, 219, 0.1);
        border-color: transparent;
        width: 21px;
        height: 21px;
        border-radius: 4px;
        cursor: pointer;

        svg {
          width: 11px;
          height: 11px;
          margin-top: 5px;
        }

        &:hover {
          color: ${({ theme }) => theme.colors.secondaryColor};
          background: #3498db;
          box-shadow: 0 4px 11px rgb(52 152 219 / 35%);
        }
      }

      .anticon-more {
        color: ${({ theme }) => theme.colors.textMain};
        background: rgba(119, 131, 143, 0.1);
        border-color: transparent;
        cursor: pointer;
        width: 21px;
        height: 21px;
        border-radius: 4px;

        svg {
          width: 11px;
          height: 11px;
          margin-top: 5px;
        }

        &:hover {
          color: ${({ theme }) => theme.colors.secondaryColor};
          background: #77838f;
          box-shadow: 0 4px 11px rgb(119 131 143 / 35%);
        }
      }
    }
  }

  .main-top-right-body-to {
    .main-top-right-body-item-to {
      .main-top-right-body-item-flex {
        display: flex;
        align-items: center;

        div {
          margin-right: 4px;
        }
      }

      padding: 12px;
      border-bottom: 0.5px solid $border-color;

      .ant-row {
        display: flex;
        flex-wrap: wrap;

        @include media-up(md) {
          flex-wrap: nowrap;
        }
      }

      .main-top-right-body-item-div-empty {
        padding: 12px;
      }

      color: ${({ theme }) => theme.colors.blackColor};

      .main-top-right-contract-link {
        max-width: 171px;
        display: inline-block;
        vertical-align: bottom;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-decoration: none;
        color: #16a637;
        background-color: transparent;
      }

      .link-update {
        color: ${({ theme }) => theme.colors.primaryColor};
      }

      span {
        color: ${({ theme }) => theme.colors.blackColor};
      }

      .main-top-right-tracker {
        display: flex;
        align-items: center;

        img {
          width: 12px;
          margin-right: 4px;
        }

        a {
          color: ${({ theme }) => theme.colors.primaryColor};

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`

const web3 = new Web3(PROVIDER_NETWORK_URL)

export default function AddressMoreInfo() {
  return (
    <WrapAddressMoreInfo className="card">
      <div className="main-top-right">
        <div className="main-top-right-header">
          <div className="header-left">More Info</div>
          <div className="header-right">
            <Space>
              <Dropdown
                className="non-position-item-span"
                overlay={
                  <Menu className="moreInfo-modal-container">
                    <Menu.Item>
                      <Link target="_blank" rel="noopener noreferrer" href="/" className="nonce-modal-conent">
                        Add address to Watch List
                      </Link>
                    </Menu.Item>
                  </Menu>
                }
                placement="topRight"
              >
                <HeartFilled />
              </Dropdown>
            </Space>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="0">
                    <Link href="#">
                      <CopyOutlined />
                      <div> View Private Note</div>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="1">
                    <Link href="#">
                      <ClockCircleOutlined />
                      <div> Check Previous Balance</div>
                    </Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="3">
                    <Link href="#">
                      <TagOutlined />
                      <div> Update Name Tag</div>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link href="#">
                      <TagsFilled />
                      <div>Submit Label</div>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link href="#">
                      <FlagFilled />
                      <div>Report/Flag Address</div>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link href="#">
                      <TeamOutlined />
                      <div>
                        Token Approvals
                        <sup> Beta</sup>
                      </div>
                    </Link>
                  </Menu.Item>
                </Menu>
              }
              trigger={['click']}
            >
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
                <Space>
                  <QuestionCircleOutlined />
                </Space>
                <div>My Name Tag:</div>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 16 }}>
                Not Available
                <Link href="/address/0x87a016ae5a52688a60415036d45191e632d5d403" className="link-update">
                  , Update?
                </Link>
              </Col>
            </Row>
          </div>
          <>
            {/* <div className="main-top-right-body-item-to">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }} className="main-top-right-body-item-flex">
                        <Space>
                          <QuestionCircleOutlined />
                        </Space>
                        <div>ContractCreator:</div>
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        <Link
                          href="/address/0x8e526e4beb7f89fc88728d27a7e5d73e8287c4ef"
                          className="main-top-right-contract-link"
                        >
                          0x8e526e4beb7f89fc88728d27a7e5d73e8287c4ef
                        </Link>
                        <span>
                          at txn
                          <Link
                            href="/tx/0xde90f3383ad2ca87d4bb9892dc10828000877e7e3bced4783f99dbe219c7f0a8"
                            className="main-top-right-contract-link"
                          >
                            0xde90f3383ad2ca87d4bb9892dc10828000877e7e3bced4783f99dbe219c7f0a8
                          </Link>
                        </span>
                      </Col>
                    </Row>
                  </div>
                  <div className="main-top-right-body-item-to">
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }} className="main-top-right-body-item-flex">
                        <Space>
                          <QuestionCircleOutlined />
                        </Space>
                        <div>Tracker:</div>
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 16 }}>
                        <div className="main-top-right-tracker">
                          <img src="https://polygonscan.com/images/main/empty-token.png" alt="" />
                          <Link href="/token/0x00...">YiTaiShuChuang (YTSC)</Link>
                        </div>
                      </Col>
                    </Row>
                  </div> */}
          </>
        </div>
      </div>
    </WrapAddressMoreInfo>
  )
}

AddressMoreInfo.defaultProps = {
  className: '',
}
