import React from 'react'
import { Button, Row, Col } from 'antd'
import styled from 'styled-components'
import CardOverview from '../CardOverview'
import InputOverview from 'components/InputOverview'

const WatchListTitle = styled.div`
  padding-left: 24px;
`
const Password = () => {
  return (
    <>
      <CardOverview className="password" title={'Password'}>
        <WatchListTitle>
          <p>Edit the fields below to update your password.</p>
        </WatchListTitle>
        <div className="overview_info_content user_settings_content">
          <div className="user_settings_content_top">
            <div className="user_settings_content_username">
              <Row>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <img src="/images/account/overview.png" />
                  <span>Enter OLD Password</span>
                </Col>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <InputOverview placeholder={'Password'} />
                </Col>
              </Row>
            </div>
            <div className="user_settings_content_username">
              <Row>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <img src="/images/account/newsletter.png" />
                  <span>Enter NEW Password</span>
                </Col>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <InputOverview placeholder={'Password'} />
                </Col>
              </Row>
            </div>
            <div className="user_settings_content_username">
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

          <div className="watch_list_content_bottom">
            <div className="flex-end">
              <Button>Cancel</Button>
              <Button>Save Changes</Button>
            </div>
          </div>
        </div>
      </CardOverview>
    </>
  )
}

export default Password
