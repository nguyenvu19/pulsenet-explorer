import React from 'react'
import { Button, Row, Col } from 'antd'
import styled from 'styled-components'
import CardOverview from '../CardOverview'
import Pagination from 'components/Pagination'

const ApiTitle = styled.div`
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  font-size: 16px;
`
const ContentTitle = styled.div`
  margin: 27px 0px 11px;
  font-size: 14px;
  font-weight: 500;

  img {
    width: 21px;
  }
`
const ApiKeys = () => {
  return (
    <>
      <CardOverview
        className="api_keys"
        title={'Current API Plans'}
        rightNode={
          <div className="api_keys_title">
            <Button className="btn_add">
              <img src="/images/account/add.png" />
              Add
            </Button>
          </div>
        }
      >
        <ApiTitle>
          For developers interested in building applications using our API Service, please create an API-Key Token which
          you can then use with all your API requests.
        </ApiTitle>
        <div className="overview_info_content api_keys_content">
          <div className="api_keys_content_top">
            <ContentTitle>
              <Row>
                <Col xs={24} md={12}>
                  <span style={{ fontSize: '14px', fontWeight: 400 }}>0 key added (out of 3 max limit)</span>
                </Col>
                <Col xs={24} md={12} className="search">
                  <Button>
                    <img src="/images/account/search.png" />
                  </Button>
                </Col>
              </Row>
            </ContentTitle>
            <div className="api_keys_content_top_username">
              <Row>
                <Col span={8}>
                  <p>App Name</p>
                </Col>
                <Col span={8}>
                  <p>API Key Token</p>
                </Col>
                <Col span={8}>
                  <p>API Statistics</p>
                </Col>
              </Row>
            </div>
            <div className="api_keys_content_top_username">
              <p className="center">
                <img src="/images/account/matching.png" />
                &nbsp; You have yet to create an API-Key Token.
              </p>
            </div>
          </div>

          <div className="api_keys_content_bottom">
            <div className="flex-end">
              <Pagination page={9} limit={10} />
            </div>
          </div>
        </div>
      </CardOverview>
    </>
  )
}

export default ApiKeys
