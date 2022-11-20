import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import { Link } from 'components/Link'
import { formatCode, numberFormatter } from 'library/helpers/CommonHelper'
import siteConfig from '../../config/site.config'

const TableItemTransactions = ({ dataItem }) => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="col-sm-4-content">
          <div className="display-none">
            <span className="non-outside">
              <span className="non-inside">TX</span>
            </span>
          </div>
          <div className="display-block-transactions">
            <div className="col-sm-4-content-block">Tx#</div>
            <Link href={`/tx/${dataItem?.f?.a}`}>{formatCode(dataItem?.f?.a, 8, 5)}</Link>
            <p className="block-small-transactions">
              <ReactTimeAgo date={parseInt(dataItem?.ti || 0) * 1000} locale="en-US" timeStyle="round" />
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="content-transactions">
          <div className="show-content-transactions">
            <span>
              <div>
                <span>From</span>
                <Link href={`/address/${dataItem?.f?.a || ''}`} className="content-hasktag">
                  {formatCode(dataItem?.f?.a || '', 20, 0)}
                </Link>
              </div>
              <div>
                <span>To </span>
                <Link href={`/address/${dataItem?.t?.a || ''}`}>{formatCode(dataItem?.t?.a || '', 20, 0)}</Link>
              </div>
            </span>
            <div>
              <div className="show-content-hide-transactions">
                <div className="content-text">
                  {`${numberFormatter(dataItem?.v * 1, dataItem?.v * 1 > 1 ? 2 : 5)} ${
                    siteConfig.nativeCurrency.symbol
                  }`}
                </div>
              </div>
            </div>
          </div>
          <div className="hide-content-transactions">
            <div className="content-text">
              {`${numberFormatter(dataItem?.v * 1, dataItem?.v * 1 > 1 ? 2 : 5)} ${siteConfig.nativeCurrency.symbol}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableItemTransactions
