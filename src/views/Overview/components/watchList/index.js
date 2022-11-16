import React from "react";
import { Button, Layout } from 'antd'

const { Content } = Layout

const WatchList = (props) => {
    // const { activeTab } = props;
    // console.log('activeTab', activeTab)
    return (
        <>
          <div className="overview_info">
            <div className="overview_info_title">
              <h1>Watch List</h1>
              <Button className="btn_add"><img src="/images/account/add.png"/>Add</Button>
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
          
          
        </>
    )
}

export default WatchList