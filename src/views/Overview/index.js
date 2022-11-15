import React from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import { Button } from 'antd'

const Overview = () => {
  return (
    <div className="overview-page">
      <div className="overview-page_header container">
        <div className="overview-page_header_top">
          <h1>Account Overview</h1>
          <Button className="btn btn-sign_out">
            <img src="/images/icon/signout.png" />
            Sign Out
          </Button>
        </div>
        <div className="overview-page_header_top">
        
        </div>
      </div>
    </div>
  )
}

Overview.Layout = PublicLayoutBlock
export default Overview
