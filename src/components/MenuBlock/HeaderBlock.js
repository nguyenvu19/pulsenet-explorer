import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { Layout } from 'antd'
import { isMobile } from 'react-device-detect'
import Link from 'components/NextLink/NextLink'
import SearchInput from 'components/SearchInput'
import MenuCollapseIcon from 'widgets/MenuCollapseIcon'
import config from '../Menu/config'
import ContentMobile from '../Menu/ContentMobile/ContentMobile'
import siteConfig from '../../config/site.config'

const { Header: HeaderContainer } = Layout

const HeaderBlock = ({ showMenu, toggleMenu }) => {
  const router = useRouter()

  return (
    <HeaderContainer className="header-block">
      <div className="container menu-container">
        <div className="content-header content-header-block">
          <div className="header-left">
            <Link href="/">
              <div className="header-logo">
                <img src="/logo-text.png" alt="" />
              </div>
            </Link>
            {/* <Link href="/">
              <div className="header-slogan">
                <span>{siteConfig.appName} : $1.57 </span>
                <span className="header-slogan-green"> (+4.55%)</span>
                <span>
                  |
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M32 64C32 28.65 60.65 0 96 0H256C291.3 0 320 28.65 320 64V256H328C376.6 256 416 295.4 416 344V376C416 389.3 426.7 400 440 400C453.3 400 464 389.3 464 376V221.1C436.4 214.9 416 189.8 416 160V96L384 64C375.2 55.16 375.2 40.84 384 32C392.8 23.16 407.2 23.16 416 32L493.3 109.3C505.3 121.3 512 137.5 512 154.5V376C512 415.8 479.8 448 440 448C400.2 448 368 415.8 368 376V344C368 321.9 350.1 303.1 328 303.1H320V448C337.7 448 352 462.3 352 480C352 497.7 337.7 512 320 512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V64zM96 176C96 184.8 103.2 192 112 192H240C248.8 192 256 184.8 256 176V80C256 71.16 248.8 64 240 64H112C103.2 64 96 71.16 96 80V176z" />
                  </svg>
                  47 Gwei
                </span>
              </div>
            </Link> */}
          </div>
          <div className="header-right">
            <div className="header-right-input">
              <SearchInput />
            </div>

            <MenuCollapseIcon className="menu-collapse" showMenu={showMenu} toggleMenu={toggleMenu} />

            <div className="header-right-desktop">
              <ul>
                {config.map((entry, index) => {
                  if (entry.items) {
                    return (
                      <li key={`${entry.label}-${index}`}>
                        <Link href="/" className="header-blockchain">
                          Blockchain
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                              <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                            </svg>
                          </span>
                        </Link>
                        <ul className="submenu">
                          {entry.items.map((subMenu, subIndex) => (
                            <React.Fragment key={`${subMenu.label}-${subIndex}`}>
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
                    <li key={`${entry.label}-${index}`}>
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
                      <li className="li-account">
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
                <li className="li-last_child li-last_child-block">
                  <Link className="right-destop-logo">
                    <img src="/logo.png" alt="" />
                  </Link>
                  <ul className="submenu">
                    {/* <li className="li-acount">
                      <Link href="/" className="navlink-submenu">
                        {siteConfig.appName} Mainnet
                      </Link>
                    </li> */}
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
          {showMenu && <ContentMobile login={false} />}
          {isMobile && (
            <div className="header-bottom-mobile">
              <SearchInput />
            </div>
          )}
        </div>
      </div>
    </HeaderContainer>
  )
}

export default HeaderBlock
