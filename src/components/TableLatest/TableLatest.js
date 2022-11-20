import React from 'react'
import TableItemLatest from 'components/TableItemLatest/TableItemLatest'

const TableLatestBlock = ({ blocks }) => {
  return (
    <div className="table-body">
      <div className="table-body-left">
        {blocks?.length > 0 && (
          <div className="card-body">
            <div className="card-body-outside">
              <div id="list-block" className="card-body-container">
                {blocks?.map((item) => {
                  return <TableItemLatest key={`bks-${item.number}`} dataItem={item} />
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default TableLatestBlock
