import React from 'react'
import { Button, Row, Col } from 'antd'
import CardOverview from '../CardOverview'
import styled from 'styled-components'
const PersonalInfoTitle = styled.div`
  margin: 24px 24px 0px 24px;
  font-size: 16px;
`

const PersonalInfo = (props) => {
  return (
    <CardOverview className="personal_info" title="Personal Info">
      <PersonalInfoTitle>Below are the username, email and overview information for your account.</PersonalInfoTitle>
      <div className="personal_info_content">
        <div className="personal_info_content_username">
          <Row>
            <Col xl={{ span: 12 }} sm={{ span: 8 }} md={{ span: 10 }} xs={{ span: 24 }}>
              <img src="/images/account/overview.png" />
              <span>Your username</span>
            </Col>
            <Col xl={{ span: 12 }} sm={{ span: 16 }} md={{ span: 14 }} xs={{ span: 24 }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '16px' }}>mesomedieyoung</h3>
            </Col>
          </Row>
        </div>
        <div className="personal_info_content_username">
          <Row>
            <Col xl={{ span: 12 }} sm={{ span: 8 }} md={{ span: 10 }} xs={{ span: 24 }}>
              <img src="/images/account/mail.png" />
              <span>Your Email Address</span>
            </Col>
            <Col
              xl={{ span: 12 }}
              sm={{ span: 16 }}
              md={{ span: 14 }}
              xs={{ span: 24 }}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <h3>huyette300399@gmail.com</h3>
              <Button className="btn_overview">Edit</Button>
            </Col>
          </Row>
        </div>
        <div className="personal_info_content_username">
          <Row>
            <Col xl={{ span: 12 }} sm={{ span: 8 }} md={{ span: 10 }} xs={{ span: 24 }}>
              <img src="/images/account/lastlogin.png" />
              <span>Last Login</span>
            </Col>
            <Col
              xl={{ span: 12 }}
              sm={{ span: 16 }}
              md={{ span: 14 }}
              xs={{ span: 24 }}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <h3>2022-10-27 07:47:13(UTC)</h3>
              <Button className="btn_overview">Show History</Button>
            </Col>
          </Row>
        </div>
      </div>
    </CardOverview>
  )
}

export default PersonalInfo
