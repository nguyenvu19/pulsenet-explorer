import React from 'react'
import Pagination from 'components/Pagination'
import BlockTransfersToken from './components/BlockTransfersToken'

const TransfersToken = () => {
  return (
    <div className="transfers-token-page">
      <div className="top">
        <div className="description">
          <h2>162,245,033+ transactions found</h2>
          <p>(Showing the last 100k records)</p>
        </div>
        <Pagination />
      </div>

      <div class="horizontal-scroll">
        <table className="table">
          <tr>
            <th>Txn Hash</th>

            <th>
              <span>
                Method <img src="/images/icon/info-circle.png" alt="Info" />
              </span>
            </th>

            <th>Age</th>

            <th>From</th>

            <th>To</th>

            <th>Quantity</th>
          </tr>
          <BlockTransfersToken />
          <BlockTransfersToken />
          <BlockTransfersToken />
          <BlockTransfersToken />
          <BlockTransfersToken />
          <BlockTransfersToken />
          <BlockTransfersToken />
        </table>
      </div>

      <div className="bottom">
        <div className="right">
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default TransfersToken
