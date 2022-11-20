import React, { useState } from 'react'
import { Progress, Modal, Button, Col, Dropdown, Menu, Row, Space, Table, Tabs, message, Input } from 'antd'
import { CheckCircleOutlined, CheckOutlined, CopyOutlined, MehOutlined, MoreOutlined } from '@ant-design/icons'
import { Link } from 'components/Link'

const TokenProfile = ({ tokenInfo }) => {
  const [isCoppy, setIsCoppy] = useState(false)

  const setIsCopped = () => {
    setIsCoppy(!isCoppy)
    setInterval(() => {
      setIsCoppy(isCoppy)
    }, 2000)
    navigator.clipboard.writeText('0xD50D167DD35D256e19E2FB76d6b9Bf9F4c571A3E')
  }
  return (
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
                  {!isCoppy ? <CopyOutlined onClick={setIsCopped} /> : <CheckCircleOutlined onClick={setIsCopped} />}
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
  )
}

export default TokenProfile
