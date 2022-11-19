import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import Link from 'components/Link/NextLink'
import siteConfig from '../../config/site.config'

const TableItem = ({ dataItem, ...props }) => (
  <div className="row" {...props}>
    <div className="col-sm-4">
      <div className="col-sm-4-content">
        <div className="display-none">
          <span className="non-outside">
            <span className="non-inside">Bk</span>
          </span>
        </div>
        <div className="display-block">
          <div className="col-sm-4-content-block">Block</div>
          <Link href={`/block/${dataItem.number}`}>{dataItem.number}</Link>
          <p className="block-small">
            <ReactTimeAgo date={parseInt(dataItem.timestamp) * 1000} locale="en-US" timeStyle="round" />
          </p>
        </div>
      </div>
    </div>
    <div className="col-sm-8">
      <div className="content">
        <div className="show-content">
          <span>
            <span>Validated By </span>
            <Link href="/" className="content-hasktag">
              {dataItem.miner}
            </Link>
          </span>
          <div>
            <div>
              <Link href="/txs">{dataItem.transactions.length} txs</Link>
              <span> in 10 secs</span>
            </div>
            <div className="show-content-hide">
              <div className="content-text">
                {dataItem.gasUsed / 1e9} {siteConfig.nativeCurrency.symbol}{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hide-content">
        <div className="content-text">
          {dataItem.gasUsed / 1e9} {siteConfig.nativeCurrency.symbol}{' '}
        </div>
      </div>
    </div>
  </div>
)

export default TableItem
