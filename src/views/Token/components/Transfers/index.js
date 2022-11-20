import React from 'react'
import { Table } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import Link from 'components/Link/NextLink'

const Transfers = () => {
  return (
    <div className="token-main-under-card">
      <div className="main-under-card-content">
        <div className="card-content-text">
          <span className="card-content-text-text">
            A total of 5,090 transactions found
            <span>(Showing the last 100k records)</span>
          </span>
        </div>
        <div className="card-content-table">
          <Table columns={[]} dataSource={[]} />
        </div>
        <div className="card-content-footer">
          <div className="content-footer-text">
            <span className="content-footer-text-right">
              [ Download
              <Link href="#">CSV Export</Link>
              &nbsp;
              <span>
                <DownloadOutlined />
              </span>
              ]
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transfers
