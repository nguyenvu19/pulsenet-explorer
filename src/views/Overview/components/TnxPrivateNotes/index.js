import React from 'react'
import { Button, Row, Col } from 'antd'
import styled from 'styled-components'
import CardOverview from '../CardOverview'
import Pagination from 'components/Pagination'

const TnxNotesTitle = styled.div`
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
const TnxPrivateNotes = () => {
  return (
    <>
      <CardOverview
        className="tnx_notes"
        title={'Transaction Private Notes'}
        rightNode={
          <div className="tnx_notes_title">
            <Button className="btn_add">
              <img src="/images/account/add.png" />
              Add
            </Button>
          </div>
        }
      >
        <TnxNotesTitle>
          A private transaction note (up to 100 characters) can be saved and is useful for transaction tracking.
        </TnxNotesTitle>
        <div className="overview_info_content tnx_notes_content">
          <div className="tnx_notes_content_top">
            <ContentTitle>
              <Row>
                <Col xs={24} md={12}>
                  <span style={{ fontSize: '14px', fontWeight: 400 }}> 0 notes added (out of 2000 max limit)</span>
                </Col>
                <Col xs={24} md={12} className="search">
                  <Button>
                    <img src="/images/account/search.png" />
                  </Button>
                </Col>
              </Row>
            </ContentTitle>
            <div className="tnx_notes_content_top_username">
              <p>Transaction</p>
            </div>
            <div className="tnx_notes_content_top_username">
              <p className="center">
                <img src="/images/account/matching.png" />
                &nbsp; There are no private tags found
              </p>
            </div>
          </div>

          <div className="tnx_notes_content_bottom">
            <Pagination page={9} limit={10} />
          </div>
        </div>
      </CardOverview>
    </>
  )
}

export default TnxPrivateNotes
