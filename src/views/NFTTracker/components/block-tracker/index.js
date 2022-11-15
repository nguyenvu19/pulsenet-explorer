import React from 'react'
import crypto from '../../../../../public/images/icon/cryptocurrency_eth.png'

const BlockTracker = () => {
  return (
    <tr className="block-tracker">
      <td>01</td>
      <td>
        <span>
          <img src={crypto} className="down" />
          Figma Labs | Genesis
        </span>
        <span>
          ENS offers a secure & decentralised way to address resources both on and off the blockchain using simple,
          human-readable names.
        </span>
      </td>
      <td>$35,265,568.00</td>
      <td>$35,265,568.00</td>
    </tr>
  )
}

export default BlockTracker
