import React from 'react'
import { Table } from 'antd'
import Pagination from 'components/Pagination'

const TableBase = ({ columns, dataSource, ...props }) => {
  return (
    <div className="table-base-container">
      <Table className="table-base" columns={columns} dataSource={dataSource} {...props} pagination={false} />
      <div className="pagination-bottom">
        <Pagination />
      </div>
    </div>
  )
}

export default TableBase
