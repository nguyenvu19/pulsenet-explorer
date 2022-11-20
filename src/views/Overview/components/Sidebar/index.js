import { Layout } from 'antd'
import React, { useState } from 'react'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const WrapSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Sidebar = ({ activeTab, handleClick }) => {
  const [showSideBar, setShowSideBar] = useState(false)
  const handleSidebar = () => {
    setShowSideBar(!showSideBar)
  }
  return (
    <>
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
      <div className="overview-page_content_tablet">
        <WrapSidebar>
          <div>
            <h1 style={{ margin: '10px 0px' }}>ACCOUNT</h1>
            <p>Account@gmail.com</p>
          </div>
          <div onClick={handleSidebar}>
            {showSideBar ? (
              <CloseOutlined style={{ fontSize: '20px' }} />
            ) : (
              <MenuOutlined style={{ fontSize: '20px' }} />
            )}
          </div>
        </WrapSidebar>

        {showSideBar && (
          <>
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
                <li
                  onClick={() => handleClick('apikey')}
                  className={`${activeTab === 'apikey' ? 'account-active' : ''}`}
                >
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
          </>
        )}
      </div>
    </>
  )
}
export default Sidebar
