import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import Link from 'components/NextLink/NextLink'
import siteConfig from '../../config/site.config'
import { formatCode } from 'library/helpers/CommonHelper'

const TableItem = ({ dataItem, ...props }) => (
  <div className="row" {...props}>
    <div className="col-sm-4">
      <div className="col-sm-4-content">
        <div className="display-none">
          <span className="non-outside">
            <span className="non-inside">BK</span>
          </span>
        </div>
        <div className="display-block">
          <div className="col-sm-4-content-block">Block</div>
          <Link href={`/block/${dataItem.bn}`}>{dataItem.bn}</Link>
          <p className="block-small">
            <ReactTimeAgo date={parseInt(dataItem.ti) * 1000} locale="en-US" timeStyle="round" />
          </p>
        </div>
      </div>
    </div>
    <div className="col-sm-8">
      <div className="content">
        <div className="show-content">
          <span>
            <span>Fee Recipient: </span>
            <Link href="/" className="content-hasktag">
              {formatCode(dataItem?.f || 0, 5, 3)}
            </Link>
          </span>
          <div>
            <div>
              <Link href="/txs">{dataItem?.tt || 0} txns</Link>
              <span> in 12s</span>
            </div>
            <div className="show-content-hide">
              <div className="content-text">
                {dataItem.gu / 1e9} {siteConfig.nativeCurrency.symbol}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hide-content">
        <div className="content-text">
          {dataItem.gu / 1e9} {siteConfig.nativeCurrency.symbol}
        </div>
      </div>
    </div>
  </div>
)

export default TableItem
