import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'components/NextLink/NextLink'
import { UserIcon } from 'widgets/Svg'

const WrapAccount = styled(Link)`
  display: flex;
  align-items: center;
  .username {
    color: ${({ theme }) => theme.colors.text};
    margin-right: 8px;
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
      <div className="username">Sign In</div>
      <div className="avatar">
        <UserIcon width="24px" height="24px" />
      </div>
    </WrapAccount>
  )
}

export default Account
