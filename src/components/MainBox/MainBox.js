import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import siteConfig from '../../config/site.config'

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false, loading: () => <p>Loading ...</p> })

const MainBox = () => {
  const [chart, setChart] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: ['Mar 21', 'Mar 28', 'Apr 4'],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [2500, 3000, 500],
      },
    ],
  })

  return (
    <div className="row-body">
      <div className="col-md-col-6 col-lg-4">
        <div className="col-left-1">
          <div className="body-img">
            <img src="/logo.png" alt="" />
          </div>
          <div className="body-content">
            <h2 className="body-content-text-below">{siteConfig.nativeCurrency.symbol} PRICE</h2>
            <a className="body-content-text-under">
              $1.57
              <span className="text-secondary"> @ 0.000035 BTC</span>
              <span className="text-secondary small"> (+8.53%)</span>
            </a>
          </div>
        </div>
        <div className="col-left-1">
          <div className="body-img">
            <img src="/images/logo/matic-marketcap.svg" alt="" />
          </div>
          <div className="body-content">
            <h2 className="body-content-text-below">
              {siteConfig.nativeCurrency.symbol} MARKET CAP ON {siteConfig.nativeCurrency.symbol} SMARTCHAIN
            </h2>
            <a className="body-content-text-under">
              $12,059,874,854.00
              <span className="text-secondary"> (7,701,069,511 {siteConfig.nativeCurrency.symbol} )</span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-col-6 col-lg-4">
        <div className="col-left-1 col-center-1">
          <div className="col-center-left-container">
            <div className="body-img">
              <img src="/images/logo/transaction.svg" alt="" />
            </div>
            <div className="body-content">
              <h2 className="body-content-text-below">TRANSACTIONS</h2>
              <a className="body-content-text-under">
                1,528.01 M<span className="text-secondary small-black"> (36.5 TPS)</span>
              </a>
            </div>
          </div>
          <div className="body-right">
            <h2>MED GAS PRICE</h2>
            <a href="/">44 Gwei</a>
            <span>(2.1s)</span>
          </div>
        </div>
        <div className="col-left-1 col-center-2">
          <div className="body-img">
            <img src="/images/logo/lasted block.svg" alt="" />
          </div>
          <div className="body-content">
            <h2 className="body-content-text-below">LATEST BLOCK</h2>
            <a className="body-content-text-under">
              26601141
              <a className="text-secondary">
                <span className="text-secondary-11">($0.01)</span>
              </a>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-col-12 col-lg-4">
        {/* <div>
          <h2>POLYGON TRANSACTION HISTORY LAST 14 DAYS</h2>
        </div> */}
        <div className="row">
          <div className="mixed-chart">
            <ApexCharts
              className="mixed-chart-item"
              options={chart.options}
              series={chart.series}
              type="area"
              // width="400px"
              // height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBox
