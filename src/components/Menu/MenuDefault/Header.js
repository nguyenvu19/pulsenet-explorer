import React, { useContext, useState } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { useRouter } from 'next/dist/client/router'
import Link from 'components/NextLink/NextLink'
import config from '../config'
import ContentMobile from '../ContentMobile/ContentMobile'
import MenuCollapseIcon from 'widgets/MenuCollapseIcon'
import { UserIcon } from 'widgets/Svg'
import NextLink from 'components/NextLink/NextLink'

const Header = ({ showMenu, toggleMenu }) => {
  const router = useRouter()
  const [login, setLogin] = useState(true)

  return (
    <header className="nav-default">
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
              <div className="nav-link">
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
                          <div className="submenu fadeIn">
                            <ul>
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
                          </div>
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
                  <div className="username">
                    <NextLink href="/login">Sign In</NextLink>
                  </div>
                  <div className="avatar">
                    <UserIcon width="24px" height="24px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showMenu && <ContentMobile login={false} links={config} />}
      </div>
    </header>
  )
}

export default Header
