import React from 'react'
import Pagination from 'components/Pagination'

const DexTrades = () => {
  return (
    <div className="dex-trades-token-page">
      <div className="top">
        <div className="description">
          <p>Top 1,000 holders (From a total of 4,465,972 holders)</p>
        </div>
        <Pagination />
      </div>

      <div class="horizontal-scroll">
        <table className="table">
          <tr>
            <th>Txn Hash</th>
            <th>Age</th>
            <th>Action</th>
            <th>Token Amount (Out)</th>
            <th>Token Amount (In)</th>
            <th>Swapped Rate</th>
            <th>Txn Value ($)</th>
            <th>DEX</th>
          </tr>
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

export default DexTrades
