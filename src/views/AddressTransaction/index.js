import React from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import AddressTop from './Components/addressTop'
import AdText from './Components/adText'
import CardBase from 'components/Card/CardBase'
import AddressOverview from 'components/AddressOverview'
import AddressMoreInfo from 'components/AddressMoreInfo'
import OverviewCard from './Components/overviewCard'
import InfoCard from './Components/infoCard'
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
    </div>
  )
}

AddressTransaction.Layout = PublicLayoutBlock
export default AddressTransaction
