import React from 'react'
import { Button, Checkbox, Row, Col } from 'antd'
import styled from 'styled-components'
import CardOverview from '../CardOverview'

const IgnoreReputationTitle = styled.div`
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  padding-bottom: 24px;
  font-size: 16px;
  border-bottom: 1px solid;
`

const IgnoreReputation = () => {
  const onChange = (e) => {
    // console.log(`checked ==> ${e.target.checked}`)
  }
  return (
    <>
      <CardOverview
        className="ignore_reputation"
        title={'Ignore Tokens with Poor Reputation'}
        rightNode={
          <div className="ignore_reputation_title">
            <Button className="btn_add">
              <img src="/images/account/add.png" />
              Add
            </Button>
          </div>
        }
      >
        <IgnoreReputationTitle>
          Hide all transactions of tokens that have been flagged by PULSESCAN as Suspicious, Unsafe, Spam or Brand
          Infringement from being displayed in the Address page.
        </IgnoreReputationTitle>
        <div className="overview_info_content ignore_reputation_content">
          <div className="ignore_reputation_content_top">
            <div className="ignore_reputation_content_top_username ">
              <Row>
                <Col xs={24} md={8}>
                  <Checkbox onChange={onChange}>&ensp; Hide tokens</Checkbox>
                </Col>
                <Col xs={24} md={16} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button className="btn_upgrade">
                    Upgrade Plan &nbsp;
                    <img src="/images/account/arrow.png" />
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </CardOverview>
    </>
  )
}

export default IgnoreReputation
