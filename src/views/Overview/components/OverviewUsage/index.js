import React from 'react'
import { Button, Layout } from 'antd'
import CardOverview from '../CardOverview'

const { Sider, Content } = Layout

const OverviewUsage = (props) => {
  const { activeTab } = props
  // console.log('activeTab', activeTab)
  return (
    <CardOverview title="Overview Usage">
      <Content className="overview_usage">
        <p>Usage of account features such as address watch list, address name tags, and API keys.</p>
        <div className="overview_info_content">
          <div className="overview_info_content_username">
            <div className="icon_overview">
              <div className="icon_overview_img">
                <img src="/images/account/totalPULSE.png" />
                <span>Total PULSE Balance (Watch List)</span>
              </div>
              <p>0 Ether ($0.00)</p>
            </div>
            <Button className="btn_overview"></Button>
          </div>
          <div className="overview_info_content_username">
            <div className="icon_overview">
              <div className="icon_overview_img">
                <img src="/images/account/mail.png" />
                <span> Email Notification Limit</span>
              </div>
              <p>0 emails sent out</p>
            </div>
            <Button className="btn_overview">100 daily limit</Button>
          </div>
          <div className="overview_info_content_username">
            <div className="icon_overview">
              <div className="icon_overview_img">
                <img src="/images/account/watchlist.png" />
                <span>Address Watch List</span>
              </div>
              <p style={{ color: '#418143' }}>0 address alert(s)</p>
            </div>
            <Button className="btn_overview">Show History</Button>
          </div>
          <div className="overview_info_content_username">
            <div className="icon_overview">
              <div className="icon_overview_img">
                <img src="/images/account/privatenotes.png" />
                <span>Txn Private Notes</span>
              </div>
              <p style={{ color: '#418143' }}>0 transaction private note(s)</p>
            </div>
            <Button className="btn_overview">Show History</Button>
          </div>
          <div className="overview_info_content_username">
            <div className="icon_overview">
              <div className="icon_overview_img">
                <img src="/images/account/privatenametags.png" />
                <span>Address Tags</span>
              </div>
              <p style={{ color: '#418143' }}>0 address tag(s)</p>
            </div>
            <Button className="btn_overview">Show History</Button>
          </div>
          <div className="overview_info_content_username">
            <div className="icon_overview">
              <div className="icon_overview_img">
                <img src="/images/account/api.png" />
                <span>API Key Usage</span>
              </div>
              <p style={{ color: '#418143' }}>0 active API(s)</p>
            </div>
            <Button className="btn_overview">Show History</Button>
          </div>
          <div className="overview_info_content_username">
            <div className="icon_overview">
              <div className="icon_overview_img">
                <img src="/images/account/verifiedaddresses.png" />
                <span>Verified Addresses</span>
              </div>
              <p style={{ color: '#418143' }}>0 verified addresses</p>
            </div>
            <Button className="btn_overview">Show History</Button>
          </div>
        </div>
      </Content>
    </CardOverview>
  )
}

export default OverviewUsage
