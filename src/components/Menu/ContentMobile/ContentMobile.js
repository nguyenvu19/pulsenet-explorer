import React from 'react'
// import ProfileAccount from 'components/ProfileAccount'
import Link from 'components/NextLink/NextLink'

const ContentMobile = () => (
  <div className="header-right-mobile-active" style={{ display: 'block' }}>
    <ul>
      <li className="active-li-mobile">
        <a className="active-a">Home</a>
      </li>
      <li className="active-li-mobile">
        <a className="active-a">
          <span>Blockchain</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
            </svg>
          </span>
        </a>
        <ul className="submenu-mobile">
          <li className="li-acount">
            <a className="navlink-submenu">Top Accounts</a>
          </li>
          <li className="dropdown-divider" />
          <li className="li-acount">
            <Link to="/txs" className="navlink-submenu">
              View Txns
            </Link>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">View Pending Txns</a>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">View Contract Internal Txns</a>
          </li>
          <li className="dropdown-divider" />

          <li className="li-acount">
            <a className="navlink-submenu">View Plasma Deposit Txns</a>
          </li>
          <li className="dropdown-divider" />

          <li className="li-acount">
            <a className="navlink-submenu">View Blocks</a>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">Forked Blocks (Reorgs)</a>
          </li>
          <li className="dropdown-divider" />

          <li className="li-acount">
            <a className="navlink-submenu">View Uncles</a>
          </li>

          <li className="li-acount">
            <a className="navlink-submenu">Verified Contracts</a>
          </li>
        </ul>
      </li>
      <li className="active-li-mobile">
        <a className="active-a">
          <span>Tokens </span>
          <span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
              </svg>
            </span>
          </span>
        </a>
        <ul className="submenu-mobile">
          <li className="li-acount">
            <a className="navlink-submenu">ERC-20 Tokens By MarketCap</a>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">View ERC-20 Transfers</a>
          </li>
          <li className="dropdown-divider" />
          <li className="li-acount">
            <a className="navlink-submenu">ERC721 Top Tokens</a>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">View ERC721 Transfers</a>
          </li>
          <li className="dropdown-divider" />

          <li className="li-acount">
            <a className="navlink-submenu">ERC-1155 Top Tokens</a>
          </li>

          <li className="li-acount">
            <a className="navlink-submenu">View ERC-1155 Transfers </a>
          </li>
        </ul>
      </li>
      <li className="active-li-mobile">
        <a className="active-a">
          <span>Resources </span>
          <span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
              </svg>
            </span>
          </span>
        </a>
        <ul className="submenu-mobile">
          <li className="li-acount">
            <a className="navlink-submenu">APIs</a>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">Verify Contract</a>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">Byte to Opcode</a>
          </li>
        </ul>
      </li>
      <li className="active-li-mobile">
        <a className="active-a">
          <span>Misc </span>
          <span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
              </svg>
            </span>
          </span>
        </a>
        <ul className="submenu-mobile">
          <li className="li-acount">
            <a className="navlink-submenu">APIs</a>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">Verify Contract</a>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">Byte to Opcode</a>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">Broadcast TXN</a>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">Vyper Online Compiler</a>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">
              Token Approvals
              <sup>
                <span className="navlink-submenu-gray">Beta</span>
              </sup>
            </a>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">
              Unit Converter
              <sup>
                <span className="navlink-submenu-green">New</span>
              </sup>
            </a>
          </li>
          <li className="li-acount">
            <a className="navlink-submenu">
              Gas Tracker
              <sup>
                <span className="navlink-submenu-green">New</span>
              </sup>
            </a>
          </li>
        </ul>
      </li>
      {/* <li className="active-li-mobile">
        <a className="active-a active-a-acount"> 
          <span>
            <UserOutlined className="user-icon" theme="outlined" />
            <ProfileAccount className="custom-account" isMobile={false} />
          </span>
          {login && (
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
              </svg>
            </span>
          )}
        </a>
        {login && (
          <ul className="submenu-mobile">
            <li className="li-acount">
              <a className="navlink-submenu">My Profile</a>
            </li>
            <li className="dropdown-divider" />
            <li className="li-acount">
              <a className="navlink-submenu">Watch List</a>
            </li>
            <li className="li-acount">
              <a className="navlink-submenu">Txn Private Notes</a>
            </li>
            <li className="li-acount">
              <a className="navlink-submenu">Address Private Notes</a>
            </li>

            <li className="li-acount">
              <a className="navlink-submenu">Token Ignore List</a>
            </li>
            <li className="dropdown-divider" />

            <li className="li-acount">
              <a className="navlink-submenu">API Keys </a>
            </li>
            <li className="li-acount">
              <a className="navlink-submenu">Verified Address </a>
            </li>
            <li className="li-acount">
              <a className="navlink-submenu">Custom ABI </a>
            </li>
            <li className="dropdown-divider" />
            <li className="li-acount px-3">
              <a className="navlink-submenu px-3-a">Sign Out </a>
            </li>
          </ul>
        )}
      </li> */}
      <li className="active-li-mobile">
        <a className="active-a">
          <span>Explorers </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
            </svg>
          </span>
        </a>
        <ul className="submenu-mobile">
          <li className="li-acount">
            <a className="navlink-submenu">Top Accounts</a>
          </li>
          <li className="li-acount">
            <Link to="/txs" className="navlink-submenu">
              View Txns
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
)

export default ContentMobile
