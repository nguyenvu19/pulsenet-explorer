import React from 'react'

const Topstatistics = () => {
  return (
    <div className="container">
      <div className="top">
        <h1>Top Statistics</h1>
      </div>

      <ul className="nav">
        <li>Overview</li>
        <li>Transaction</li>
        <li>Tokens</li>
        <li>Network</li>
      </ul>

      <ul className="time">
        <li>24 hours</li>
        <li>3 Days</li>
        <li>7 Days</li>
      </ul>

      <div className="content">
        <table className="transaction">
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

        <table className="tokens">
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

        <table className="network">
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

export default Topstatistics
