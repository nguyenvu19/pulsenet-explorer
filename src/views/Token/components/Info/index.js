import React from 'react'
import { Table } from 'antd'
import { DownloadOutlined, PieChartFilled } from '@ant-design/icons'
import Link from 'components/Link/NextLink'

const Info = () => {
  return (
    <div className="token-main-under-card">
      <div className="info-update">
        Click here to{' '}
        <Link href="#" className="info-update-link">
          update
        </Link>{' '}
        the token ICO / general information
      </div>
    </div>
  )
}

export default Info
