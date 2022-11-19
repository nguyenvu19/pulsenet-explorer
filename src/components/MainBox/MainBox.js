import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import siteConfig from '../../config/site.config'
import { Col, Row } from 'antd'

import { numberFormatter } from 'library/helpers/CommonHelper'
import moment from 'moment-timezone'

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false, loading: () => <p>Loading ...</p> })

const MainBox = ({ statistics }) => {
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
        categories: statistics?.data?.reverse()?.map((it) => moment(it.da, 'DD/MM/YYYY').format('MMM DD YYYY')),
        tickAmount: 2,
        labels: {
          formatter: function (value, timestamp, opts) {
            return moment(value, 'MMM DD YYYY').format('MMM DD')
          }
        }
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
      },
      tooltip: {
        x: {
          show: true,
          formatter: function (value, { dataPointIndex }) {
            return moment(statistics?.data?.reverse()?.[dataPointIndex]?.da, 'DD/MM/YYYY').format('MMM DD, YYYY')
          }
        },
      }
    },
    series: [
      {
        name: 'Transactions',
        data: statistics?.data?.reverse()?.map((it) => it?.tt || 0),
      },
    ],
  })

  const latestStatistic = statistics?.data?.[0] || {};

  const percentPrice = () => {
    let percent = 0;
    if (statistics?.data?.[0]?.tp && statistics?.data?.[1]?.tp) {
      percent = ((statistics?.data?.[0]?.tp * 1 - statistics?.data?.[1]?.tp * 1) / 100);
    }
    return percent > 0 ? ` +${numberFormatter(percent, 2)}%` : ` ${numberFormatter(percent, 2)}%`;
  }

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
              <span className="text-secondary">${latestStatistic?.tp ? numberFormatter(latestStatistic?.tp * 1, latestStatistic?.tp * 1 > 1 ? 2 : 5) : "--"}</span>
              <span className="text-secondary small">{percentPrice()}</span>
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
              ${numberFormatter(latestStatistic?.mc * 1, 2)}
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
                {latestStatistic?.tt}
              </a>
            </div>
          </div>
          <div className="body-right">
            <h2>MED GAS PRICE</h2>
            <a href="/">{latestStatistic?.gp?.cur} Gwei</a>
            <span> (${latestStatistic?.gp?.cur / 1e9})</span>
          </div>
        </div>
        <div className="col-left-1 col-center-2">
          <div className="body-img">
            <img src="/images/icon/finalized.png" alt="" />
          </div>
          <div className="body-content">
            <h2 className="body-content-text-below">LAST FINALIZED BLOCK</h2>
            <a className="body-content-text-under">
              {latestStatistic?.sb}
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
            height="180px"
            type="line"
          />
        </div>
      </Col>
    </Row>
  )
}

export default MainBox
