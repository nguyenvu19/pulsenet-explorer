import React from 'react'
import { HeartOutlined } from '@ant-design/icons'
import { Col, Row, Input } from 'antd'
import { Button, Menu, Dropdown, Space, Tooltip } from 'antd'
const InfoCard = () => {
  return (
    <div className="ovr-container">
      <Row className="ovr-header-info">
        {/* <Col span={24}>
          <div className="header-title-top">
            <div>
              <span>More Info</span>
            </div>
            <div className="ovr-header_icon">
              <Tooltip title="Heart">
                <Button icon={<HeartOutlined />} />
              </Tooltip>
              <Button>More</Button>
            </div>
          </div>
        </Col> */}

        <Col span={8} style={{ display: 'flex', alignItems: 'center' }}>
          <span>More Info</span>
        </Col>
        <Col className="ovr-header-icon" span={8} offset={8} >
          <div className="ovr-header-icon">
            <Tooltip title="Heart">
              <Button icon={<HeartOutlined />} />
            </Tooltip>
            <Button>More</Button>
          </div>
        </Col>
      </Row>
      <Row className="ovr-content">
        <Col span={16} push={8}>
          Not Available, <span style={{ color: '#418143', cursor: 'pointer' }}>login to update</span>
        </Col>
        <Col span={8} pull={16}>
          My Name Tag:
        </Col>
      </Row>
      <Row className="ovr-content" style={{ border: 'none' }}></Row>
      <Row className="ovr-content"></Row>
    </div>
  )
}

export default InfoCard
