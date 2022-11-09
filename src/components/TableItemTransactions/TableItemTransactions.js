import React from 'react'
import Link from 'components/NextLink/NextLink'
import { formatCode } from 'library/helpers/CommonHelper'
import siteConfig from '../../config/site.config'

const TableItemTransactions = ({ key, dataItem }) => (
  <div className="row" key={key}>
    <div className="col-sm-4">
      <div className="col-sm-4-content">
        <div className="display-none">
          <span className="non-outside-transactions">
            <span className="non-inside">Tx</span>
          </span>
        </div>
        <div className="display-block-transactions">
          <div className="col-sm-4-content-block">Tx#</div>
          <Link href={`/block/${dataItem?.blockDetail?.number}`}>{dataItem?.blockDetail?.number}</Link>
          {/* <p className="block-small-transactions">just now</p> */}
        </div>
      </div>
    </div>
    <div className="col-sm-8">
      <div className="content-transactions">
        <div className="show-content-transactions">
          <span>
            <div>
              <span>From</span>
              <Link href={`/address/${dataItem?.txhDetail?.from}`} className="content-hasktag">
                {formatCode(dataItem?.txhDetail?.from, 6, 10)}
              </Link>
            </div>
            <div>
              <span>To </span>
              <Link href={`/address/${dataItem?.txhDetail?.to}`}>{formatCode(dataItem?.txhDetail?.to, 6, 10)}</Link>
            </div>
          </span>
          <div>
            <div className="show-content-hide-transactions">
              <div className="content-text">
                -- {siteConfig.nativeCurrency.symbol}
                {/* 0.00413 PI  */}
              </div>
            </div>
          </div>
        </div>
        <div className="hide-content-transactions">
          <div className="content-text">
            -- {siteConfig.nativeCurrency.symbol}
            {/* 1 <b>.</b>18693 PI  */}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TableItemTransactions
