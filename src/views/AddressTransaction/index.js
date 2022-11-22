import React from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import AddressTop from './Components/addressTop'
import AdText from './Components/adText'
import CardBase from 'components/Card/CardBase'
import AddressOverview from 'components/AddressOverview'
import AddressMoreInfo from 'components/AddressMoreInfo'
import OverviewCard from './Components/overviewCard'
import InfoCard from './Components/infoCard'
import TableBase from 'components/Table/TableBase'
import { InfoCircleOutlined } from '@ant-design/icons'
import CardTabs from 'components/Card/CardTabs'
import { dataPhaKe, dataPhaKe2, dataTbl, dataTblTest, dataTblTest2, dataTblTest3 } from './fakeeeData'
import TitleAndTbl from './Components/titleAndTable'

const MethodHeader = ({ name }) => (
  <div className="header-tbl">
    <span>{name}</span>
    <InfoCircleOutlined />
  </div>
)

const AddressTransaction = () => {
  return (
    <div className="addr-container">
      <AddressTop />
      <AdText content="ads text" />
      <div className="block-ovrview-info">
        <OverviewCard />
        <InfoCard />
      </div>
      <div className="ad-img">
        <img src="/images/address/ad-img.png" alt="" />
      </div>

      <CardTabs
        tabs={[
          {
            key: '1',
            title: 'Transfers',
            content: <TitleAndTbl />,
          },
          {
            key: '2',
            title: 'Holders',
            content: <TitleAndTbl />,
          },
          {
            key: '3',
            title: 'Inventory',
            content: <TitleAndTbl />,
          },
          {
            key: '4',
            title: 'Info',
            content: <TitleAndTbl />,
          },
          {
            key: '5',
            title: 'Contract',
            content: <TitleAndTbl />,
          },
        ]}
      />
    </div>
  )
}

AddressTransaction.Layout = PublicLayoutBlock
export default AddressTransaction
