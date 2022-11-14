import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'components/NextLink/NextLink'
import { UserIcon } from 'widgets/Svg'
import NextLink from 'components/NextLink/NextLink'

const WrapAccount = styled(Link)`
  display: flex;
  align-items: center;
  .username {
    margin-right: 8px;
    a {
      color: ${({ theme }) => theme.colors.text};
    }
  }
  .avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    svg {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`

const Account = () => {
  const toggleMenu = () => {}

  return (
    <WrapAccount>
      <div className="username">
        <NextLink href="/login">Sign In</NextLink>
      </div>
      <div className="avatar">
        <UserIcon width="24px" height="24px" />
      </div>
    </WrapAccount>
  )
}

export default Account
