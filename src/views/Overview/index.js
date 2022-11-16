import React, { useState } from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import { Button, Layout } from 'antd'
import AccountOverview from './components/AccountOverview'
import AccountSetting from './components/AccountSetting'
import PulsescanConnect from './components/PulsescanConnect'
import WatchList from './components/WatchList'
import PrivateNameTags from './components/AddressPrivateTags'
import TnxPrivateNotes from './components/TnxPrivateNotes'
import APIkey from './components/ApiKey'
import VerifiedAddresses from './components/VerifiedAddresses'
import CustomABIst from './components/ConnectCustomABI'
import TokenIgnoreList from './components/TokenIgnorelist'

const Overview = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const handleClick = (value) => {
    setActiveTab(value)
  }

  const renderTabRight = () => {
    switch (activeTab) {
      case 'overview': {
        return <AccountOverview />
      }
      case 'settings': {
        return <AccountSetting />
      }
      case 'pulsescan': {
        return <PulsescanConnect />
      }
      case 'watchlist': {
        return <WatchList />
      }
      case 'privatenametags': {
        return <PrivateNameTags />
      }
      case 'privatenotes': {
        return <TnxPrivateNotes />
      }
      case 'apikey': {
        return <APIkey />
      }
      case 'verifiedaddresses': {
        return <VerifiedAddresses />
      }
      case 'customabist': {
        return <CustomABIst />
      }
      case 'tokenignore': {
        return <TokenIgnoreList />
      }

      default:
        return null
    }
  }

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
          <p style={{ fontWeight: 'bold', fontSize: '14px' }}>
            Home /
            <a href="#" style={{ color: '#418143' }}>
              Account Overview
            </a>
          </p>
        </div>
      </div>

      <div className="overview-page_content">
        <Layout className="overview-page_content_left">
          <div>
            <h1>ACCOUNT</h1>
            <ul>
              <li
                onClick={() => handleClick('overview')}
                className={`${activeTab === 'overview' ? 'account-active' : ''}`}
              >
                <a href="#">
                  <img src="/images/account/overview.png" />
                  <span>Account Overview</span>
                </a>
              </li>
              <li
                onClick={() => handleClick('settings')}
                className={`${activeTab === 'settings' ? 'account-active' : ''}`}
              >
                <a href="#">
                  <img src="/images/account/accountsetting.png" />
                  <span> Account Settings</span>
                </a>
              </li>
              <li
                onClick={() => handleClick('pulsescan')}
                className={`${activeTab === 'pulsescan' ? 'account-active' : ''}`}
              >
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
              <li
                onClick={() => handleClick('watchlist')}
                className={`${activeTab === 'watchlist' ? 'account-active' : ''}`}
              >
                <a href="#">
                  <img src="/images/account/watchlist.png" />
                  <span>Watch List</span>
                </a>
              </li>
              <li
                onClick={() => handleClick('privatenametags')}
                className={`${activeTab === 'privatenametags' ? 'account-active' : ''}`}
              >
                <a href="#">
                  <img src="/images/account/privatenametags.png" />
                  <span>Private Name Tags</span>
                </a>
              </li>
              <li
                onClick={() => handleClick('privatenotes')}
                className={`${activeTab === 'privatenotes' ? 'account-active' : ''}`}
              >
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
              <li onClick={() => handleClick('apikey')} className={`${activeTab === 'apikey' ? 'account-active' : ''}`}>
                <a href="#">
                  <img src="/images/account/api.png" />
                  <span> API Keys</span>
                </a>
              </li>
              <li
                onClick={() => handleClick('verifiedaddresses')}
                className={`${activeTab === 'verifiedaddresses' ? 'account-active' : ''}`}
              >
                <a href="#">
                  <img src="/images/account/verifiedaddresses.png" />
                  <span>Verified Addresses</span>
                </a>
              </li>
              <li
                onClick={() => handleClick('customabist')}
                className={`${activeTab === 'customabist' ? 'account-active' : ''}`}
              >
                <a href="#">
                  <img src="/images/account/ABIs.png" />
                  <span>Custom ABIst</span>
                </a>
              </li>
              <li
                onClick={() => handleClick('tokenignore')}
                className={`${activeTab === 'tokenignore' ? 'account-active' : ''}`}
              >
                <a href="#">
                  <img src="/images/account/ignorelist.png" />
                  <span>Token Ignore List</span>
                </a>
              </li>
            </ul>
          </div>
        </Layout>
        <Layout className="overview-page_content_right">
          {/* Personal Info */}
          {renderTabRight()}
        </Layout>
      </div>
    </div>
  )
}

Overview.Layout = PublicLayoutBlock
export default Overview
