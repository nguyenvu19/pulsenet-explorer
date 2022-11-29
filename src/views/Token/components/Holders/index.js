import React from 'react'
import Pagination from 'components/Pagination'
import BlockHoldersToken from './components/BlockHoldersToken'

const HoldersToken = () => {
  return (
    <div className="holders-token-page">
      <div className="top">
        <div className="left">
          <img src="/images/icon/health.png" alt="Health" />
          <p>Token Holders Chart</p>
        </div>

        <div className="right">(Holders Snapshot taken 5 mins ago)</div>
      </div>

      <div className="middle">
        <div className="description">
          <p>Top 1,000 holders (From a total of 4,465,972 holders)</p>
        </div>
        <Pagination />
      </div>

      <div class="horizontal-scroll">
        <table className="table">
          <tr>
            <th>Rank</th>

            <th>Address</th>

            <th>Quantity</th>

            <th>Percentage</th>

            <th>Value</th>

            <th>Analytics</th>
          </tr>
          <BlockHoldersToken />
          <BlockHoldersToken />
          <BlockHoldersToken />
          <BlockHoldersToken />
          <BlockHoldersToken />
          <BlockHoldersToken />
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

export default HoldersToken
