import React from 'react'
import Link from 'components/Link/NextLink'
import styled from 'styled-components'

const DrawMenuContent = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;

  ul {
    list-style: none;
    li {
      .active-a {
        color: ${({ theme }) => theme.colors.text};
        height: 40px;
        display: flex;
        justify-content: space-between;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }

        span {
          color: ${({ theme }) => theme.colors.text};

          &:hover {
            color: ${({ theme }) => theme.colors.primary};
          }

          &:last-child {
            svg {
              width: 10px;
              height: 10px;

              path {
                fill: $color-header-fill;
              }
            }
          }
        }
      }

      .active-a-account {
        span {
          display: flex;
          align-items: center;
        }
      }

      .submenu-mobile {
        height: 0;
        display: block;
        transition: 0.5s;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
        background-color: ${({ theme }) => theme.colors.primary};
        border-left: 3px solid ${({ theme }) => theme.colors.primary};
        box-shadow: 0 8px 20px rgba(130, 71, 229, 8%);
        overflow: hidden;
        .px-3 {
          width: 100%;
          display: block;
          padding: 10px;
          text-align: center;

          .px-3-a {
            color: ${({ theme }) => theme.colors.primary};
            background: $background-rgba;
            padding: 0 75px;
          }
        }
        &.active {
          height: fit-content;
        }
      }
    }
  }
`

const ContentMobile = ({ links, active }) => (
  <DrawMenuContent className="container">
    <ul>
      {links.map(({ label, href, target, items }) => {
        if (items.length > 0) {
          return (
            <li key={label}>
              <a {...(href && { href })} className="active-a">
                <span>{label}</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                  </svg>
                </span>
              </a>
              <ul className={`submenu-mobile ${true ? 'active' : ''}`}>
                {links.map((submenu) => {
                  return (
                    <li className="li-account" key={submenu.label}>
                      <a className="navlink-submenu">{submenu.label}</a>
                    </li>
                    // <li className="dropdown-divider" />
                    // <li className="li-account">
                    //   <Link to="/txs" className="navlink-submenu">
                    //     View Txns
                    //   </Link>
                    //   </li>
                  )
                })}
              </ul>
            </li>
          )
        }
        return (
          <li key={label}>
            <a href={href} target={target} className="active-a">
              {label}
            </a>
          </li>
        )
      })}
    </ul>
  </DrawMenuContent>
)

export default ContentMobile
