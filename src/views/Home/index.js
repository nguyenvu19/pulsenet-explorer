import React from 'react'
import Banner from 'widgets/Banner'
// import MainBox from 'components/MainBox/MainBox'
import siteConfig from '../../config/site.config'
import Link from 'components/Link/NextLink'
import SearchInput from 'components/SearchInput'
import TableLatest from 'components/TableLatest/TableLatest'
import TableTransactions from 'components/TableTransactions/TableTransactions'
import MainBox from 'components/MainBox/MainBox'

const HomeView = (props) => {
  const { listTransaction, listBlock, latestBlockDetail, latestTransactionDetail, statistics } = props;
  return (
    <div className="home">
      <section className="bg-dark">
        <div className="container">
          <div className="home__body">
            <div className="body-left">
              <div className="body-left-content">
                <h1>{siteConfig.appName} Chain Explorer</h1>
                <SearchInput />
              </div>
            </div>
            <div className="body-right">
              <Banner />
            </div>
          </div>
        </div>
      </section>
      <div className="container container-home-bottom">
        <div className="row-card" style={{ marginTop: '-50px' }}>
          <MainBox latestBlock={latestBlockDetail} latestTransaction={latestTransactionDetail} statistics={statistics} />
        </div>
        <div className="home-table">
          <div className="card wrap-latest wrap-latest-block">
            <div className="table-header">
              <h2>Latest Block</h2>
            </div>
            <TableLatest blocks={listBlock} />
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
            <TableTransactions transactions={listTransaction} />
            <div className="table-footer">
              <Link href="/txs" className="btn-soft-primary">
                View all Transactions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeView
