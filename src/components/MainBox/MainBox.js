import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import siteConfig from '../../config/site.config'
import { Col, Row } from 'antd'

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false, loading: () => <p>Loading ...</p> })

const MainBox = ({ latestBlock, latestTransaction }) => {
  const [chart, setChart] = useState({
    options: {
      colors: ["#3C3A3A"],
      chart: {
        id: 'basic-bar',
        toolbar: {
          show: false,
        }
      },
      xaxis: {
        categories: ['Mar 21', 'Mar 24', 'Mar 28', 'Apr 1', 'Apr 4'],
        tickAmount: 2,
      },
      yaxis: {
        tickAmount: 2,
      },
      grid: {
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      stroke: {
        curve: 'smooth',
        width: 1,
      }
    },
    series: [
      {
        name: 'Price',
        data: [2500, 3000, 500, 3500, 2000],
      },
    ],
  })

  return (
    <Row gutter={[32, 32]} className="row-body">
      <Col xs={24} sm={24} md={24} lg={8} className="col-item">
        <div className="col-left-1">
          <div className="body-img">
            <img src="/images/icon/price.png" alt="" />
          </div>
          <div className="body-content">
            <h2 className="body-content-text-below">{siteConfig.nativeCurrency.symbol} PRICE</h2>
            <a className="body-content-text-under">
              <span className="text-secondary">${latestTransaction?.p ? numberFormatter(latestTransaction?.p * 1, latestTransaction?.p * 1 > 1 ? 2 : 5) : "--"}</span>
              <span className="text-secondary small"> +0.50%</span>
            </a>
          </div>
        </div>
        <div className="col-left-1">
          <div className="body-img">
            <img src="/images/icon/marketcap.png" alt="" />
          </div>
          <div className="body-content">
            <h2 className="body-content-text-below">
              MARKET CAP
            </h2>
            <a className="body-content-text-under">
              $803,850.00
            </a>
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8} className="col-item">
        <div className="col-left-1 col-center-1">
          <div className="col-center-left-container">
            <div className="body-img">
              <img src="/images/icon/transactions.png" alt="" />
            </div>
            <div className="body-content">
              <h2 className="body-content-text-below">TRANSACTIONS</h2>
              <a className="body-content-text-under">
                464
              </a>
            </div>
          </div>
          <div className="body-right">
            <h2>MED GAS PRICE</h2>
            <a href="/">5 Gwei</a>
            <span> ($0,001)</span>
          </div>
        </div>
        <div className="col-left-1 col-center-2">
          <div className="body-img">
            <img src="/images/icon/finalized.png" alt="" />
          </div>
          <div className="body-content">
            <h2 className="body-content-text-below">LAST FINALIZED BLOCK</h2>
            <a className="body-content-text-under">
              15793060
            </a>
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8} className="col-item">
        <div className="mixed-chart">
          <h2 className="body-content-text-below">PULSENET TRANSACTION HISTORY IN 12 DAYS</h2>
          <ApexCharts
            className="mixed-chart-item"
            options={chart.options}
            series={chart.series}
            height="150px"
            type="line"
          />
        </div>
      </Col>
    </Row>
  )
}

export default MainBox
