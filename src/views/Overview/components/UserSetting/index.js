import React from 'react'
import { Button, Checkbox, Col, Row } from 'antd'
import styled from 'styled-components'
import CardOverview from '../CardOverview'
import InputOverview from 'components/InputOverview'

const WatchListTitle = styled.div`
  padding-left: 24px;
`
const UserSetting = () => {
  return (
    <>
      <CardOverview className="user_settings" title={'User Settings'}>
        <WatchListTitle>
          <p>Below are the username, email and overview information for your account.</p>
        </WatchListTitle>
        <div className="overview_info_content user_settings_content">
          <div className="user_settings_content_top">
            <div className="user_settings_content_username">
              <Row>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <img src="/images/account/overview.png" />
                  <span>Your username 1111</span>
                </Col>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <p style={{ fontWeight: 'bold' }}>mesomedieyoung</p>
                </Col>
              </Row>
            </div>
            <div className="user_settings_content_username">
              <Row>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <img src="/images/account/newsletter.png" />
                  <span>Your Email Address</span>
                </Col>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <InputOverview placeholder={'huyette300399@gmail.com'} />
                </Col>
              </Row>
            </div>
            <div className="user_settings_content_username">
              <Row>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <img src="/images/account/lock.png" />
                  <span>Newsletter</span>
                </Col>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <div>
                    <Checkbox></Checkbox>
                    &emsp;
                    <span>
                      Subscribe to Newsletter Etherscan's monthly newsletter brings you the latest features, analyses,
                      trending stories, community contributions, job listings and giveaways !
                    </span>
                  </div>
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

export default UserSetting
