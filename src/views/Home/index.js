import React from 'react'
import Banner from 'widgets/Banner'
// import MainBox from 'components/MainBox/MainBox'
import siteConfig from '../../config/site.config'
import Link from 'components/NextLink/NextLink'
import SearchInput from 'components/SearchInput'
import TableLatest from 'components/TableLatest/TableLatest'
import TableTransactions from 'components/TableTransactions/TableTransactions'

const Home = () => (
  <div className="home">
    <section className="bg-dark">
      <div className="container">
        <div className="home__body">
          <div className="body-left">
            <div className="body-left-content">
              <h1>{siteConfig.appName} Chain Explorer</h1>
              <SearchInput />
              {/* <p className="ponsored">
                <b>Sponsored :</b>
                <img src="/images/logo/bybit_20.webp" alt="" /> 
                &nbsp; 
                <b>USDC is now on Bybit! </b>
                Deposit & Trade to &nbsp;
                <a>Earn Up to 130,000 USDC!</a>
              </p> */}
            </div>
          </div>
          <div className="body-right">
            <Banner />
          </div>
        </div>
      </div>
    </section>
    <div className="container container-home-bottom">
      {/* <div className="row-card" style={{ marginTop: '-30px' }}>
        <MainBox />
      </div> */}
      {/* <div className="home-banner-advert">
        <Banner />
      </div> */}
      <div className="home-table">
        <div className="card wrap-latest wrap-latest-block" style={{ marginTop: '-30px' }}>
          <div className="table-header">
            <h2>Latest Block</h2>
          </div>
          <TableLatest />
          <div className="table-footer">
            <Link href="/blocks" className="btn-soft-primary">
              View all Block
            </Link>
          </div>
        </div>
        <div className="card wrap-latest wrap-latest-transactions">
          <div className="table-header">
            <h2>Latest Transactions</h2>
          </div>
          <TableTransactions />
          <div className="table-footer">
            <Link href="/txs" className="btn-soft-primary">
              View all transactions
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home