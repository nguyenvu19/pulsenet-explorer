import React from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import { Button, Layout } from 'antd'

const { Sider, Content } = Layout

const Overview = () => {
  return (
    <div className="overview-page container">
      <div className="overview-page_header">
        <div className="overview-page_header_top">
          <h1>Account Overview</h1>
          <Button className="btn btn-sign_out">
            <img src="/images/account/signout.png" />
            <span>Sign Out</span>
          </Button>
        </div>

        <div className="overview-page_header_bottom">
          <p style={{fontWeight:'bold',fontSize:'14px'}}>
            Home / <a href="#" style={{color:'#418143'}}>Account Overview</a>
          </p>
        </div>
      </div>

      <div className="overview-page_content">
        <Layout  className="overview-page_content_left">
          <div>
            <h1>ACCOUNT</h1>
            <ul>
              <li>
                <a href="#">
                  <img src="/images/account/overview.png" />
                  <span>Account Overview</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/account/accountsetting.png" />
                  <span> Account Settings</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/account/pulsescanconnect.png" />
                  <span>PULSESCAN Connect</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1>WATCH LIST & NOTES</h1>
            <ul>
              <li>
                <a href="#">
                  <img src="/images/account/watchlist.png" /> 
                  <span>Watch List</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/account/privatenametags.png" />
                  <span>Private Name Tags</span> 
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/account/privatenotes.png" />
                  <span>Txn Private Notes</span> 
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1>OTHERS</h1>
            <ul>
              <li>
                <a href="#">
                  <img src="/images/account/api.png" />
                  <span> API Keys</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/account/verifiedaddresses.png" />
                  <span>Verified Addresses</span> 
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/account/ABIs.png" /> 
                  <span>Custom ABIst</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/account/ignorelist.png" /> 
                  <span>Token Ignore List</span>
                </a>
              </li>
            </ul>
          </div>
        </Layout>
        <Layout  className="overview-page_content_right">
          {/* Personal Info */}
          <div className="overview_info">
          
            <div className="overview_info_title">
              <h1>Personal Info</h1>
            </div>
            
            <p>Below are the username, email and overview information for your account.</p>
            <div className="overview_info_content">
              <div className="overview_info_content_username">
                <div className="icon_overview">
                  <div className='icon_overview_img'>
                    <img src="/images/account/overview.png" />
                    <span>Your username</span>
                  </div>
                  <p style={{fontWeight:'bold'}}>mesomedieyoung</p> 
                </div>  
                <Button ></Button>
              </div>
              <div className="overview_info_content_username">
                <div className="icon_overview">
                  <div className='icon_overview_img'>
                    <img src="/images/account/mail.png" />
                    <span>Your Email Address</span>
                  </div>
                  <p>huyette300399@gmail.com</p>
                </div>
                <Button className='btn_overview'>Edit</Button>
              </div>
              <div className="overview_info_content_username">
                <div className="icon_overview">
                  <div className='icon_overview_img'>
                    <img src="/images/account/lastlogin.png" />
                    <span>Your Email Address</span>
                  </div>
                  <p>2022-10-27 07:47:13(UTC)</p>
                </div>
                <Button className='btn_overview'>Show History</Button>
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
                  <div className='icon_overview_img'>
                    <img src="/images/account/totalPULSE.png" />
                    <span>Total PULSE Balance (Watch List)</span>
                  </div>
                  <p>0 Ether ($0.00)</p> 
                </div>
                <Button className='btn_overview'></Button>
              </div>
              <div className="overview_info_content_username">
                <div className="icon_overview">
                  <div className='icon_overview_img'>
                    <img src="/images/account/mail.png" />
                    <span> Email Notification Limit</span>
                  </div>
                  <p>0 emails sent out</p> 
                </div>
                <Button className='btn_overview'>100 daily limit</Button>
              </div>
              <div className="overview_info_content_username">
                <div className="icon_overview">
                  <div className='icon_overview_img'>
                    <img src="/images/account/watchlist.png" />
                    <span>Address Watch List</span>
                  </div>
                  <p style={{color:'#418143'}}>0 address alert(s)</p>
                </div>
                <Button className='btn_overview'>Show History</Button>
              </div>
              <div className="overview_info_content_username">
                <div className="icon_overview">
                  <div className="icon_overview_img">
                    <img src="/images/account/privatenotes.png" />
                    <span>Txn Private Notes</span>
                  </div>
                  <p style={{color:'#418143'}}>0 transaction private note(s)</p>  
                </div>
                <Button className='btn_overview'>Show History</Button>
              </div>
              <div className="overview_info_content_username">
                <div className="icon_overview">
                  <div className="icon_overview_img">
                    <img src="/images/account/privatenametags.png" />
                    <span>Address Tags</span>
                  </div>
                  <p style={{color:'#418143'}}>0 address tag(s)</p>
                </div>
                <Button className='btn_overview'>Show History</Button> 
              </div>
              <div className="overview_info_content_username">
                <div className="icon_overview">
                  <div className="icon_overview_img">
                    <img src="/images/account/api.png" />
                    <span>API Key Usage</span>
                  </div>
                  <p style={{color:'#418143'}}>0 active API(s)</p>
                </div>
                <Button className='btn_overview'>Show History</Button>
              </div>
              <div className="overview_info_content_username">
                <div className="icon_overview">
                  <div className='icon_overview_img'>
                    <img src="/images/account/verifiedaddresses.png" />
                    <span>Verified Addresses</span>
                  </div>
                  <p style={{color:'#418143'}}>0 verified addresses</p>
                </div>
                <Button className='btn_overview'>Show History</Button>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  )
}

Overview.Layout = PublicLayoutBlock
export default Overview
