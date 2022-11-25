import { SearchOutlined } from '@ant-design/icons'
import CardTabs from 'components/Card/CardTabs'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import TabsContract from './components/Tabs'

const Contract = () => {
  return (
    <div className="contract-page">
      <div className="top-page">
        <div className="left">
          <div className="title">
            <img src="images/icon/tethericon.png" className="tethericon" />
            <div className="token">Token</div>
            <div>Tether USD</div>
          </div>

          <div className="tag">
            <button className="bitfinex">Bitfinex</button>
            <button className="stablecoin">Stablecoin</button>
          </div>
        </div>

        <div className="right">
          <button className="buy">Buy</button>
          <button className="exchange">Exchange</button>
          <button className="earn">Earn</button>
          <button className="gaming">Gaming</button>
        </div>
      </div>

      <div className="description">
        <span>
          Featured: Build Precise & Reliable Apps with Etherscan APIs. <span className="learn-more">Learn More! </span>
        </span>
      </div>

      <div className="middle">
        <div className="overview">
          <div className="overview-head">
            <div className="overview-head-left">
              Overview <span>[ERC-20]</span>
            </div>

            <div className="overview-head-right">Chart</div>
          </div>

          <div className="overview-body">
            <div className="overview-body-1">
              <div className="left">
                <span>PRICE</span>
                <span>
                  $1.00 @ 0.000648 Eth <span>(-0.03%)</span>
                </span>
              </div>

              <div className="right">
                <span>FULLY DILUTED MARKET CAP </span>
                <button>$32,290,064,214.76</button>
              </div>
            </div>

            <div className="overview-body-2">
              <div className="left">
                <span>Max Total Supply:</span>
              </div>

              <div className="right">
                <span>32,297,815,690.525604 USDT </span>
              </div>
            </div>

            <div className="overview-body-3">
              <div className="left">
                <span>Holders:</span>
              </div>
              <div className="right">
                <span>4,465,382 (0.00%)</span>
                <img src="images/icon/chart-line.png" className="chartLine" />
              </div>
            </div>

            <div className="overview-body-4">
              <div className="left">
                <span>Transfers:</span>
              </div>
              <div className="right">
                <span>162,245,033</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contract">
          <div className="contract-head">
            <div className="contract-head-left">Contract</div>

            <div className="contract-head-right">
              <img src="images/icon/like.png" />
              <img src="images/icon/down-square-outlined.png" />
              <button className="more">More</button>
            </div>
          </div>

          <div className="contract-body">
            <div className="contract-body-1">
              <div className="left">
                <span>Contract:</span>
              </div>

              <div className="right">
                <span>0xdac17f958d2ee523a2206206994597c13d831ec7</span>
              </div>
            </div>

            <div className="contract-body-2">
              <div className="left">
                <span>Decimals:</span>
              </div>

              <div className="right">
                <span>6</span>
              </div>
            </div>

            <div className="contract-body-3">
              <div className="left">
                <span>Official Site:</span>
              </div>
              <div className="right">
                <span>4,465,382 (0.00%)</span>
                <img src="images/icon/linear.png" />
              </div>
            </div>

            <div className="contract-body-4">
              <div className="left">
                <span>Social Profiles:</span>
              </div>
              <div className="right">
                <img src="images/icon/box-arrow-down.png" />
                <img src="images/icon/pencil.png" />
                <img src="images/icon/twitter.png" />
                <img src="images/icon/page.png" />
                <img src="images/icon/icon-M.png" />
                <img src="images/icon/icon-animal.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="banner">
          <img src="images/address/ad-img.png" />
        </div>
      </div>

      <div className="table">
        <div className="table-top">
          <CardTabs
            tabBarExtraContent={<SearchOutlined />}
            defaultActiveKey="5"
            tabs={[
              { title: 'Transfers', key: '1', content: '' },
              { title: 'Holders', key: '2', content: '' },
              { title: 'Info', key: '3', content: '' },
              { title: 'DEX Trades', key: '4', content: '' },
              { title: 'Contract', key: '5', content: <TabsContract /> },
              { title: 'Analytics', key: '6', content: '' },
              { title: 'Comments', key: '7', content: '' },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

Contract.Layout = PublicLayoutBlock

export default Contract
