import React from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'

const Topstatistics = () => {
  return (
    <div className="topstatistics-page">
      <div className="topstatistics-top">
        <h1>Top Statistics</h1>
      </div>

      <ul className="topstatistics-nav">
        <li>Overview</li>
        <li>Transaction</li>
        <li>Tokens</li>
        <li>Network</li>
      </ul>

      <ul className="topstatistics-time">
        <li>24 hours</li>
        <li>3 Days</li>
        <li>7 Days</li>
      </ul>

      <div className="topstatistics-content">
        <table className="topstatistics-transaction">
          <tr>
            <th>Transactions</th>
            <th>View top 10</th>
          </tr>
          <tr>
            <td>Top ETH Sender</td>
            <td>Total ETH</td>
          </tr>
          <tr>
            <td>FTX Exchange 2</td>
            <td>(icon) 147,096.946643999</td>
          </tr>
        </table>

        <table className="topstatistics-tokens">
          <tr>
            <th>Tokens</th>
            <th>View top 10</th>
          </tr>
          <tr>
            <td>Top Unique Sender</td>
            <td>Total ETH</td>
          </tr>
          <tr>
            <td>(icon) FTX Exchange 2</td>
            <td>201.459</td>
          </tr>
        </table>

        <table className="topstatistics-network">
          <tr>
            <th>Network</th>
            <th>View top 10</th>
          </tr>
          <tr>
            <td>Top Gas Used</td>
            <td>Gas Used</td>
          </tr>
          <tr>
            <td>Optimism: Sequencer</td>
            <td>147,096.946643999</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
Topstatistics.Layout = PublicLayoutBlock

export default Topstatistics
