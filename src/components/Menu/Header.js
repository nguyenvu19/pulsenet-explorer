import React, { useContext, useState } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { useRouter } from 'next/dist/client/router'
import Link from 'components/NextLink/NextLink'
import config from './config'
import ContentMobile from './ContentMobile/ContentMobile'
import MenuCollapseIcon from 'widgets/MenuCollapseIcon'
import siteConfig from '../../config/site.config'

const { Header: HeaderContainer } = Layout

const Header = ({ showMenu, toggleMenu }) => {
  const router = useRouter()
  const [login, setLogin] = useState(true)

  return (
    <HeaderContainer>
      <div className="container menu-container">
        <div className="content-header">
          <div className="header-left">
            <Link href="/">
              <div className="header-logo">
                <img src="/logo-text.png" alt="" />
              </div>
            </Link>
          </div>
          <div className="header-right">
            <MenuCollapseIcon className="menu-collapse" showMenu={showMenu} toggleMenu={toggleMenu} />
            {/* <div className="header-right-mobile">
              <input type="checkbox" id="menu" checked={showMenu} onChange={toggleMenu} />
              <label htmlFor="menu" className="icon">
                <div className="menu" /> 
              </label>
            </div> */}
            <div className="header-right-desktop">
              <ul>
                {config.map((entry) => {
                  if (entry.items) {
                    return (
                      <li key={entry.label}>
                        <Link href="/" className="header-blockchain">
                          {entry.label}
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                              <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                            </svg>
                          </span>
                        </Link>
                        <ul className="submenu">
                          {entry.items.map((subMenu) => (
                            <React.Fragment key={subMenu.label}>
                              <li className="li-acount">
                                <Link href={subMenu.href} className="navlink-submenu" {...subMenu}>
                                  {subMenu.label}
                                </Link>
                              </li>
                              {subMenu.showBorder && <li className="dropdown-divider" />}
                            </React.Fragment>
                          ))}
                        </ul>
                      </li>
                    )
                  }
                  return (
                    <li key={entry.label}>
                      <Link href={entry.href} className={router.pathname === entry.href ? 'active' : ''} {...entry}>
                        {entry.label}
                      </Link>
                    </li>
                  )
                })}

                {/* <li className="header-r-separator" />
                <li>
                  <Link href="/">
                    <UserOutlined className="user-icon" theme="outlined" />
                    <ProfileAccount className="custom-account" isMobile={false} />
                    {login && (
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                          <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                        </svg>
                      </span>
                    )}
                  </Link>
                  {login && (
                    <ul className="submenu">
                      <li className="li-acount">
                        <Link href="/" className="navlink-submenu">
                          My Profile
                        </Link>
                      </li>
                      <li className="dropdown-divider" />
                      <li className="li-acount">
                        <Link href="/" className="navlink-submenu">
                          Watch List
                        </Link>
                      </li>
                      <li className="li-acount">
                        <Link href="/" className="navlink-submenu">
                          Txn Private Notes
                        </Link>
                      </li>
                      <li className="li-acount">
                        <Link href="/" className="navlink-submenu">
                          Address Private Notes
                        </Link>
                      </li>

                      <li className="li-acount">
                        <Link href="/" className="navlink-submenu">
                          Token Ignore List
                        </Link>
                      </li>
                      <li className="dropdown-divider" />

                      <li className="li-acount">
                        <Link href="/" className="navlink-submenu">
                          API Keys{' '}
                        </Link>
                      </li>
                      <li className="li-acount">
                        <Link href="/" className="navlink-submenu">
                          Verified Address{' '}
                        </Link>
                      </li>
                      <li className="li-acount">
                        <Link href="/" className="navlink-submenu">
                          Custom ABI{' '}
                        </Link>
                      </li>
                      <li className="dropdown-divider" />
                      <li className="li-acount px-3">
                        <Link href="/" className="navlink-submenu px-3-a">
                          Sign Out{' '}
                        </Link>
                      </li>
                    </ul>
                  )}
                </li> */}
                <li className="header-l-separator" />
                <li className="li-last_child">
                  <Link className="right-destop-logo">
                    <img src="/logo.png" alt="" />
                  </Link>
                  <ul className="submenu">
                    <li className="li-acount">
                      <Link href="/" className="navlink-submenu">
                        {siteConfig.appName} Mainnet
                      </Link>
                    </li>
                    <li className="li-acount">
                      <Link href="/" className="navlink-submenu">
                        {siteConfig.appName} Testnet
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {showMenu && <ContentMobile login={login} />}
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header
