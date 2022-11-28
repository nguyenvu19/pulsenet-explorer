import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Col, Row, Input } from 'antd'
import { Button, Menu, Dropdown, Space, Tooltip } from 'antd'

const OverviewCard = () => {
  const [openDropdown, setOpenDropdown] = useState(false)

  const DropdownItem = () => (
    <li className="dropdown-item">
      <div className="dropdown-item_div">
        <div className="dropdown-item_div_img">
          <img src="/images/address/icon-addr.png" alt="" />
        </div>

        <div className="dropdown-item_div_content">
          <span className="dropdown-content">UKA DOGE COIN (UDOGE)</span>
          <span className="dropdown-content">880,000.000442 UDOGE</span>
        </div>
      </div>
    </li>
  )
  return (
    <div className="ovr-container">
      <Row className="ovr-header">
        <Col span={24}>OverView</Col>
      </Row>
      <Row className="ovr-content">
        <Col span={18} push={6}>
          46168451awdawd PULSE
        </Col>
        <Col span={6} pull={18}>
          Balance:
        </Col>
      </Row>
      <Row className="ovr-content">
        <Col span={18} push={6}>
          $0.25 (@1.547.52/PULSE)
        </Col>
        <Col span={6} pull={18}>
          Pulse value:
        </Col>
      </Row>
      <Row className="ovr-content">
        <Col span={18} push={6}>
          <div className="col-flex">
            <div className="menu-dropdown" onClick={() => setOpenDropdown(!openDropdown)}>
              <div className="menu-dropdown_text">
                <span>$0.00</span>
              </div>
              <Tooltip title="0 token contract">
                <span className="token-contract">7</span>
              </Tooltip>
              <DownOutlined className="down-icon" />
            </div>

            <div className={`dropdown-container ${openDropdown ? 'active' : 'inactive'}`}>
              <div className="search-input">
                <Input className="search-input_input" placeholder="Search for Token name" />
              </div>
              <div className="dropdown-container_title">
                <span>ERC-20 Tokens (1)</span>
                <Tooltip title="click to sorf">
                  <img src="/images/address/up-down.png" alt="" />
                </Tooltip>
              </div>
              <ul>
                <DropdownItem />
                {/* <DropdownItem /> */}
              </ul>
            </div>
            {/* <div className="menu-dropdown">
              <div className="menu-dropdown_text">
                <span>$0.00</span>
              </div>
              <Tooltip title="0 token contract">
                <span className="token-contract">7</span>
              </Tooltip>
              <DownOutlined className="down-icon" />
            </div> */}
            <div className="wallet-icon">
              <Tooltip title="view token hodings in more details">
                <img src="/images/address/wallet.png" alt="" />
              </Tooltip>
            </div>
          </div>
        </Col>
        <Col span={6} pull={18}>
          Token:
        </Col>
        {/* <Col span={2}>
          
        </Col> */}
      </Row>
    </div>
  )
}

export default OverviewCard
