import React from 'react'
import { Button, Row, Col } from 'antd'
import styled from 'styled-components'
import CardOverview from '../CardOverview'
import Pagination from 'components/Pagination'

const AbiTitle = styled.div`
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
const CustomABI = () => {
  return (
    <>
      <CardOverview
        className="custom_abi"
        title={'Contract Custom ABI'}
        rightNode={
          <div className="custom_abi_title">
            <Button className="btn_add">
              <img src="/images/account/add.png" />
              Add
            </Button>
          </div>
        }
      >
        <AbiTitle>
          You can add custom ABI for an unverified smart contract to interact with it once logged-in to your PULSESCAN
          account.
        </AbiTitle>
        <div className="overview_info_content custom_abi_content">
          <div className="custom_abi_content_top">
            <ContentTitle>
              <Row>
                <Col xs={24} md={12}>
                  <span style={{ fontSize: '14px', fontWeight: 400 }}> 0 ABI added (out of 10 max limit)</span>
                </Col>
                <Col xs={24} md={12} className="search">
                  <Button>
                    <img src="/images/account/search.png" />
                  </Button>
                </Col>
              </Row>
            </ContentTitle>
            <div className="custom_abi_content_top_username">
              <Row>
                <Col span={8}>
                  <p>Contract Address</p>
                </Col>
                <Col span={16}>
                  <p>Title</p>
                </Col>
              </Row>
            </div>

            <div className="custom_abi_content_top_username">
              <p className="center">
                <img src="/images/account/matching.png" />
                &nbsp; There are no matching entries
              </p>
            </div>
          </div>

          <div className="custom_abi_content_bottom">
            <Pagination page={9} limit={10} />
          </div>
        </div>
      </CardOverview>
    </>
  )
}

export default CustomABI
