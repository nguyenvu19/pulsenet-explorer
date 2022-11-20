import React, { useEffect } from 'react'
import TableItemTransactions from 'components/TableItemTransactions/TableItemTransactions'
import { Spin } from 'antd'

const TableTransactions = ({ transactions }) => {
  return (
    <div className="table-body">
      <div className="table-body-left">
        {transactions?.length > 0 ? (
          <div className="card-body">
            <div className="card-body-outside">
              <div className="card-body-container">
                {transactions?.map((item) => {
                  return <TableItemTransactions key={`txs-${item?.h}`} dataItem={item} />
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="table-loading">
            <Spin />
          </div>
        )}
      </div>
    </div>
  )
}

export default TableTransactions
