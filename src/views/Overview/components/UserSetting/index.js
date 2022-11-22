import React from 'react'
import { Button, Checkbox, Col, Row } from 'antd'
import styled from 'styled-components'
import CardOverview from '../CardOverview'
import InputOverview from 'components/InputOverview'

const UserSettingTitle = styled.div`
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  font-size: 16px;
`
const UserSetting = () => {
  return (
    <>
      <CardOverview className="user_settings" title={'User Settings'}>
        <UserSettingTitle>Below are the username, email and overview information for your account.</UserSettingTitle>
        <div className="overview_info_content user_settings_content">
          <div className="user_settings_content_top">
            <div className="user_settings_content_top_username">
              <Row>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <img src="/images/account/overview.png" />
                  <span>Your username</span>
                </Col>
                <Col xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <h3 style={{ fontWeight: 'bold', fontSize: '16px' }}>mesomedieyoung</h3>
                </Col>
              </Row>
            </div>
            <div className="user_settings_content_top_username">
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
            <div className="user_settings_content_top_username">
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
                      Subscribe to Newsletter <br /> Etherscan's monthly newsletter brings you the latest features,
                      analyses, trending stories, community contributions, job listings and giveaways !
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="user_settings_content_bottom">
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

export default UserSetting
