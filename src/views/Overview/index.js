import React, { useCallback, useState } from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import { Button, Layout } from 'antd'
import AccountOverview from './components/AccountOverview'
import AccountSetting from './components/AccountSetting'
import PulsescanConnect from './components/PulsescanConnect'
import WatchList from './components/WatchList'
import PrivateNameTags from './components/AddressPrivateTags'
import TnxPrivateNotes from './components/TnxPrivateNotes'
import APIkey from './components/Api'
import VerifiedAddresses from './components/VerifiedAddresses'
import CustomABIst from './components/ConnectCustomABI'
import TokenIgnoreList from './components/TokenIgnorelist'
import Sidebar from './components/Sidebar'

const Overview = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [breakCum, setBreakcum] = useState('Account Overview')

  const handleClick = (value) => {
    setActiveTab(value)
    switch (value) {
      case 'overview': {
        setBreakcum('Account Overview')
        break
      }
      case 'settings': {
        setBreakcum('Account settings')
        break
      }

      default:
        return null
    }
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
              {/* Account Overview */}
              {breakCum}
            </a>
          </p>
        </div>
      </div>

      <div className="overview-page_content">
        <Sidebar activeTab={activeTab} handleClick={(value) => handleClick(value)} />

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
