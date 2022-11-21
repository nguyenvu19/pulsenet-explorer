import React from "react";
import { Button, Layout } from 'antd'

const { Sider, Content } = Layout

const AccountSetting = (props) => {
    const { activeTab } = props;
    console.log('activeTab', activeTab)
    return (
        <>
          <div className="overview_info">
            <div className="overview_info_title">
              <h1>AccountSetting</h1>
            </div>

            <p>Below are the username, email and overview information for your account.</p>
            <div className="overview_info_content">
              <div className="overview_info_content_username">
                <div className="icon_overview">
                  <div className="icon_overview_img">
                    <img src="/images/account/overview.png" />
                    <span>Your username</span>
                  </div>
                  <p style={{ fontWeight: 'bold' }}>mesomedieyoung</p>
                </div>
                <Button></Button>
              </div>
              <div className="overview_info_content_username">
                <div className="icon_overview">
                  <div className="icon_overview_img">
                    <img src="/images/account/mail.png" />
                    <span>Your Email Address</span>
                  </div>
                  <p>huyette300399@gmail.com</p>
                </div>
                <Button className="btn_overview">Edit</Button>
              </div>
              <div className="overview_info_content_username">
                <div className="icon_overview">
                  <div className="icon_overview_img">
                    <img src="/images/account/lastlogin.png" />
                    <span>Your Email Address</span>
                  </div>
                  <p>2022-10-27 07:47:13(UTC)</p>
                </div>
                <Button className="btn_overview">Show History</Button>
              </div>
            </div>
          </div>
          {/* Overview Usage */}
          <Content className="overview_info">
            <div className="overview_info_title">
              <h1>Overview Usage</h1>
            </div>
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
        </>
    )
}

export default AccountSetting