import React from 'react'
import { Button, Row, Col } from 'antd'
import styled from 'styled-components'
import CardOverview from '../CardOverview'
import Pagination from 'components/Pagination'

const VerifiedTitle = styled.div`
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
const VerifiedAddresses = () => {
  return (
    <>
      <CardOverview
        className="verified_addresses"
        title={'Verified Addresses'}
        rightNode={
          <div className="verified_addresses_title">
            <Button className="btn_verified">
              Upgrade Plan &ensp;
              <img src="/images/account/verified.png" />
            </Button>
          </div>
        }
      >
        <VerifiedTitle>
          The Verify Address Ownership process involves verifying the ownership of an PULSE address used to create an
          PULSESCAN smart contract. This verification will be linked to an PULSESCAN account. Once a user has claimed
          ownership of an address, the user will be able to update token information and address name tags without
          needing to sign a new message each time. Find out more about verify address ownership.
        </VerifiedTitle>
        <div className="overview_info_content verified_addresses_content">
          <div className="verified_addresses_content_top">
            <ContentTitle>
              <Row>
                <Col xs={24} md={12}>
                  <span style={{ fontSize: '14px', fontWeight: 400 }}> 0 address verified (out of 1000 max limit)</span>
                </Col>
                <Col xs={24} md={12} className="search">
                  <Button>
                    <img src="/images/account/search.png" />
                  </Button>
                </Col>
              </Row>
            </ContentTitle>
            <div className="verified_addresses_content_top_username">
              <Row>
                <Col span={8}>
                  <p>Address</p>
                </Col>
                <Col span={8}>
                  <p>Quick Links</p>
                </Col>
                <Col span={8}>
                  <p>Verified Date</p>
                </Col>
              </Row>
            </div>
            <div className="verified_addresses_content_top_username">
              <p className="center">
                <img src="/images/account/matching.png" />
                &nbsp;You have yet to verify any address.
              </p>
            </div>
          </div>

          <div className="verified_addresses_content_bottom">
            <Pagination page={9} limit={10} />
          </div>
        </div>
      </CardOverview>
    </>
  )
}

export default VerifiedAddresses
