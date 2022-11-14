import React from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'

import search from '../../../public/images/icon/search.png'
import down from '../../../public/images/icon/arrow-square-down.png'

import BlockTracker from './components/block-tracker'

const NFTTracker = () => {
  return (
    <div className="nft-tracker-page">
      <div className="head">
        <div className="left">
          <h1>Non-Fungible Token Tracker</h1>
          <span>ERC - 20</span>
        </div>
      </div>

      <div className="content">
        <div className="top">
          <h1>Non-Fungible Tokens (NFT)</h1>
          <div className="icon">
            <img src={search} className="search" />
          </div>
        </div>
        <div className="middle">
          <div className="description">
            <h2>A total of 159,264 ERC-721 Token Contracts found</h2>
            <p>(Showing the last 100k records)</p>
          </div>

          <div className="pagination">
            <div className="first">First</div>
            <div className="previous">
              <span>&#60;</span>
            </div>
            <div className="number">Page 1 of 632679</div>
            <div className="next">
              <span>&#62;</span>
            </div>
            <div className="last">Last</div>
          </div>
        </div>

        <table className="table">
          <tr>
            <th>#</th>
            <th>Token</th>
            <th>
              <img src={down} className="down" />
              Transfers (24H)
            </th>
            <th>Transfers (3D)</th>
          </tr>
          <BlockTracker />
        </table>
      </div>
    </div>
  )
}
NFTTracker.Layout = PublicLayoutBlock

export default NFTTracker
