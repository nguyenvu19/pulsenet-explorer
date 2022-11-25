import React from 'react'
import { Button, Col, Row } from 'antd'
import styled from 'styled-components'
import CardOverview from '../CardOverview'
import Pagination from 'components/Pagination'

const NameTagsTitle = styled.div`
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

const PrivateNameTags = () => {
  return (
    <>
      <CardOverview
        className="name_tags"
        title={'Address Private Name Tags'}
        rightNode={
          <div className="name_tags_title">
            <Button className="btn_add">
              <img src="/images/account/add.png" />
              Add
            </Button>
          </div>
        }
      >
        <NameTagsTitle>
          A private name tag (up to 35 chars) and memo (up to 500 chars) for individual addresses can be saved and is
          useful for labelling addresses of interest.
        </NameTagsTitle>
        <div className="overview_info_content name_tags_content">
          <div className="name_tags_content_top">
            <ContentTitle>
              <Row>
                <Col xs={24} md={12}>
                  <span style={{ fontSize: '14px', fontWeight: 400 }}>0 address tagged (out of 1000 max limit)</span>
                </Col>
                <Col xs={24} md={12} className="search">
                  <Button>
                    <img src="/images/account/search.png" />
                  </Button>
                </Col>
              </Row>
            </ContentTitle>
            <div className="name_tags_content_top_username">
              <Row>
                <Col span={8}>
                  <p>
                    <img src="/images/account/matching.png" />
                    &nbsp;&nbsp; <span>Address</span>
                  </p>
                </Col>
                <Col span={16}>
                  <p>Private Nametag</p>
                </Col>
              </Row>
            </div>
            <div className="name_tags_content_top_username">
              <p className="center">
                <img src="/images/account/matching.png" />
                &nbsp; There are no private tags found
              </p>
            </div>
          </div>

          <div className="name_tags_content_bottom">
            <Pagination page={9} limit={10} />
          </div>
        </div>
      </CardOverview>
    </>
  )
}

export default PrivateNameTags
