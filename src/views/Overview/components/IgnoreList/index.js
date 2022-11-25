import React from 'react'
import { Button, Row, Col } from 'antd'
import styled from 'styled-components'
import CardOverview from '../CardOverview'
import Pagination from 'components/Pagination'

const IgnoreListTitle = styled.div`
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

const IgnoreList = () => {
  return (
    <>
      <CardOverview
        className="ignore_list"
        title={'Token Ignore List'}
        rightNode={
          <div className="ignore_list_title">
            <Button className="btn_add">
              <img src="/images/account/add.png" />
              Add
            </Button>
          </div>
        }
      >
        <IgnoreListTitle>
          Hide selected tokens from being displayed in the Address Token Summary, Token Holdings and Watch List pages.
          This is a private setting only applicable to you when logged-in with an Etherscan account.
          <a style={{ color: '#418143' }}>Learn more here.</a>
        </IgnoreListTitle>
        <div className="overview_info_content ignore_list_content">
          <div className="ignore_list_content_top">
            <ContentTitle>
              <Row>
                <Col xs={24} md={12}>
                  <span style={{ fontSize: '14px', fontWeight: 400 }}> 0 token added (out of 30 max limit)</span>
                </Col>
                <Col xs={24} md={12} className="search">
                  <Button>
                    <img src="/images/account/search.png" />
                  </Button>
                </Col>
              </Row>
            </ContentTitle>
            <div className="ignore_list_content_top_username">
              <Row>
                <Col span={8}>
                  <p>Token Contract Address</p>
                </Col>
                <Col span={16}>
                  <p>Token </p>
                </Col>
              </Row>
            </div>
            <div className="ignore_list_content_top_username">
              <p className="center">
                <img src="/images/account/matching.png" />
                &nbsp; You have yet to create a Token Ignore entry.
              </p>
            </div>
          </div>

          <div className="ignore_list_content_bottom">
            <Pagination page={9} limit={10} />
          </div>
        </div>
      </CardOverview>
    </>
  )
}

export default IgnoreList
