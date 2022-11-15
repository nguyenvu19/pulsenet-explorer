import React from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'

import search from '../../../public/images/icon/search.png'
import down from '../../../public/images/icon/arrow-square-down.png'
import upDown from '../../../public/images/icon/iconUpDown.png'

import BlockTracker from './components/block-tracker'
import Pagination from 'components/Pagination'

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
          <Pagination />
        </div>

        <table className="table">
          <tr>
            <th>#</th>
            <th>Token</th>
            <th>
              <div>
                <img src={down} className="down" />
                Transfers (24H)
              </div>
            </th>
            <th>Transfers (3D)</th>
          </tr>
          <BlockTracker />
          <BlockTracker />
          <BlockTracker />
          <BlockTracker />
          <BlockTracker />
          <BlockTracker />
          <BlockTracker />
        </table>

        <div className="bottom">
          <div className="left">
            <div className="show">Show</div>
            <div className="numberPage">
              25 <img src={upDown} className="upDown" />
            </div>
            <div className="records">Records</div>
          </div>

          <div className="right">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}
NFTTracker.Layout = PublicLayoutBlock

export default NFTTracker
