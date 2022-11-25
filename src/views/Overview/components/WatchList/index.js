import React, { useState } from 'react'
import { Button, Col, Row } from 'antd'
import styled from 'styled-components'
import CardOverview from '../CardOverview'
import Pagination from 'components/Pagination'

const WatchListTitle = styled.div`
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
    width: 24px;
  }
`
const WatchList = () => {
  return (
    <>
      <CardOverview
        className="watch_list"
        title={'Watch List'}
        rightNode={
          <div className="watch_list_title">
            <Button className="btn_add">
              <img src="/images/account/add.png" />
              Add
            </Button>
          </div>
        }
      >
        <WatchListTitle>
          An Email notification can be sent to you when an address on your watch list sends or receives any
          transactions.
        </WatchListTitle>
        <div className="overview_info_content watch_list_content">
          <div className="watch_list_content_top">
            <ContentTitle>
              <Row>
                <Col xs={24} md={12}>
                  <span style={{ fontSize: '14px', fontWeight: 400 }}> 0 address selected (out of 50 max limit)</span>
                </Col>
                <Col xs={24} md={12} className="search">
                  <Button>
                    <img src="/images/account/search.png" />
                  </Button>
                </Col>
              </Row>
            </ContentTitle>
            <div className="watch_list_content_top_username">
              <Row>
                <Col span={8}>
                  <p>Address</p>
                </Col>
                <Col span={8}>
                  <p>Private Nametag</p>
                </Col>
                <Col span={8}>
                  <p>Notificationz</p>
                </Col>
              </Row>
            </div>
            <div className="watch_list_content_top_username">
              <p className="center">
                <img src="/images/account/matching.png" />
                &nbsp; There are no matching entries
              </p>
            </div>
          </div>

          <div className="watch_list_content_bottom">
            <Pagination page={9} limit={10} />
          </div>
        </div>
      </CardOverview>
    </>
  )
}

export default WatchList
