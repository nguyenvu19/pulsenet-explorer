import React from 'react'
import { Button, Row, Col } from 'antd'
import styled from 'styled-components'
import CardOverview from '../CardOverview'

const ApiTitle = styled.div`
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  font-size: 16px;
`
const ApiKeys = () => {
  return (
    <>
      <CardOverview
        className="api_plans"
        title={'Current API Plans'}
        rightNode={
          <div className="api_plans_title">
            <Button className="btn_add">
              <img src="/images/account/add.png" />
              Add
            </Button>
          </div>
        }
      >
        <ApiTitle>
          All API plan accounts are FREE by default. You may upgrade your plan to API Pro at any time.
        </ApiTitle>
        <div className="overview_info_content api_plans_content">
          <div className="api_plans_content_top">
            <div className="api_plans_content_top_username">
              <Row>
                <Col xs={24} md={8}>
                  <span style={{ fontWeight: 400, fontSize: '16px' }}>My API Plan:</span>
                </Col>
                <Col xs={24} md={16} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p>FREE API PLAN</p>
                  <Button className="btn_upgrade">
                    Upgrade Plan &nbsp;
                    <img src="/images/account/arrow.png" />
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="api_plans_content_top_username">
              <Row>
                <Col xs={24} md={8}>
                  <span>API calls per second:</span>
                </Col>
                <Col xs={24} md={16} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 700 }}>5 calls</span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </CardOverview>
    </>
  )
}

export default ApiKeys
