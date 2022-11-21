import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'components/Link/NextLink'
import SearchInput from 'components/SearchInput'
import MenuCollapseIcon from 'widgets/MenuCollapseIcon'
import useMatchBreakpoints from 'hooks/useMatchBreakpoints'
import config from '../config'
import ContentMobile from '../ContentMobile/ContentMobile'
import Account from '../Account'

import siteConfig from 'config/site.config'

const HeaderBlock = ({ showMenu, toggleMenu }) => {
  const router = useRouter()
  const { isMobile } = useMatchBreakpoints()

  return (
    <header className="nav-block">
      <div className="nav-content">
        <div className="nav-top">
          <div className="nav-top-content container">
            <div className="nav-top-left">
              <Link href="/" className="nav-logo">
                <img src="/logo-text.png" alt="" />
              </Link>
            </div>
            <div className="nav-top-right">
              <MenuCollapseIcon className="menu-collapse" showMenu={showMenu} toggleMenu={toggleMenu} />
              <div className="nav-search-input">
                <SearchInput />
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bottom container">
          <div className="nav-bottom-left">
            {siteConfig.nativeCurrency.symbol}: $1.234.97(<span style={{ color: 'var(--primary)' }}>+2,03%</span>)
            <img src="/images/icon/gas.svg" alt="" /> 11 Gwei
          </div>
          <div className="nav-bottom-right">
            <ul>
              {config.map((entry, index) => {
                if (entry.items.length > 0) {
                  return (
                    <li key={`${entry.label}-${index}`}>
                      <Link href="/" className="nav-blockchain">
                        {entry.label}
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                          </svg>
                        </span>
                      </Link>
                      <ul className="submenu fadeIn">
                        {entry.items.map((subMenu, subIndex) => (
                          <React.Fragment key={`${subMenu.label}-${subIndex}`}>
                            <li>
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
            </ul>
            <div className="nav-account">
              <Account />
            </div>
          </div>
        </div>
        {showMenu && <ContentMobile login={false} links={config} />}
        <div className="nav-search-input-mobile">
          <SearchInput />
        </div>
      </div>
    </header>
  )
}

export default HeaderBlock
