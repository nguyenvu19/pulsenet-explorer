import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { isMobile } from 'react-device-detect'
import Link from 'components/NextLink/NextLink'
import SearchInput from 'components/SearchInput'
import MenuCollapseIcon from 'widgets/MenuCollapseIcon'
import config from '../Menu/config'
import ContentMobile from '../Menu/ContentMobile/ContentMobile'
import siteConfig from '../../config/site.config'
import useMatchBreakpoints from 'hooks/useMatchBreakpoints'

const HeaderBlock = ({ showMenu, toggleMenu }) => {
  const router = useRouter()
  const { isMobile } = useMatchBreakpoints()

  return (
    <header className="nav-block">
      <div className="nav-content">
        <div className="nav-top">
          <div className="nav-top-content container">
            <div className="nav-top-left">
              <Link href="/">
                <div className="nav-logo">
                  <img src="/logo-text.png" alt="" />
                </div>
              </Link>
            </div>
            <div className="nav-top-right">
              <div className="nav-right-input">
                <SearchInput />
              </div>
              {isMobile && <MenuCollapseIcon className="menu-collapse" showMenu={showMenu} toggleMenu={toggleMenu} />}
            </div>
          </div>
        </div>
        {!isMobile && (
          <ul className="nav-bottom container">
            {config.map((entry, index) => {
              if (entry.items) {
                return (
                  <li key={`${entry.label}-${index}`}>
                    <Link href="/" className="nav-blockchain">
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
            <li className="nav-l-separator" />
            <li className="li-last_child li-last_child-block">
              <Link className="right-destop-logo">
                <img src="/logo.png" alt="" />
              </Link>
              <ul className="submenu">
                <li className="li-acount">
                  <Link href="/" className="navlink-submenu">
                    {siteConfig.appName} Testnet
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        )}
        {showMenu && <ContentMobile login={false} />}
        {isMobile && (
          <div className="nav-bottom-mobile">
            <SearchInput />
          </div>
        )}
      </div>
    </header>
  )
}

export default HeaderBlock
