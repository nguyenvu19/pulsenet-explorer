import React from 'react'
import { Button, Checkbox, Row, Col } from 'antd'
import styled from 'styled-components'
import CardOverview from '../CardOverview'
import InputOverview from 'components/InputOverview'

const PasswordTitle = styled.div`
  margin-top: 24px;
  padding-left: 24px;
`
const Password = () => {
  return (
    <>
      <CardOverview className="password" title={'Password'}>
        <PasswordTitle>Edit the fields below to update your password.</PasswordTitle>
        <div className="overview_info_content password_content">
          <div className="password_content_top">
            <div className="password_content_top_username">
              <Row>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <img src="/images/account/lock.png" />
                  <span>Enter OLD Password</span>
                </Col>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <InputOverview placeholder={'Password'} />
                </Col>
              </Row>
            </div>
            <div className="password_content_top_username">
              <Row>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <img src="/images/account/lock.png" />
                  <span>Enter NEW Password</span>
                </Col>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <InputOverview placeholder={'Password'} />
                </Col>
              </Row>
            </div>
            <div className="password_content_top_username">
              <Row>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <img src="/images/account/lock.png" />
                  <span>Re-Confirm Password</span>
                </Col>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <InputOverview placeholder={'Confirm Password'} />
                </Col>
              </Row>
            </div>
          </div>

          <div className="password_content_bottom">
            <div className="flex-end">
              <Button className="btn_cancel">Cancel</Button>
              &ensp;
              <Button className="btn_save">Save Changes</Button>
            </div>
          </div>
        </div>
      </CardOverview>
    </>
  )
}

export default Password
