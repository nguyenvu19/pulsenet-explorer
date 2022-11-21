import Pagination from 'components/Pagination'
import React from 'react'

const BlockTracker = ({ data }) => {
  return (
    <tr className="block-tracker">
      <td>{data.number}</td>
      <td>
        <span>
          <img src="images/icon/cryptocurrency_eth.png" className="down" />
          {data.token1}
        </span>
        <span>{data.token2}</span>
      </td>
      <td>{data.transfers1}</td>
      <td>{data.transfers2}</td>
    </tr>
  )
}

export default BlockTracker
