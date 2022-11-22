import React from 'react'
import DeleteAccount from '../DeleteAccount'
import Password from '../Password'
import UserSetting from '../UserSetting'

const AccountOverview = (props) => {
  return (
    <>
      <UserSetting />
      <Password />
      <DeleteAccount />
    </>
  )
}

export default AccountOverview
