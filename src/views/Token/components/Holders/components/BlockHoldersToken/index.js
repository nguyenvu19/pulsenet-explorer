import React from 'react'
import { Progress } from 'antd'

const BlockHoldersToken = () => {
  return (
    <tr className="block-holders-token">
      <td>01</td>

      <td>Binance: Binance-Peg Tokens</td>

      <td>2,499,993,771.456942</td>

      <td>
        <span>
          14,490,921%
          <Progress percent={14} showInfo={false} strokeWidth={4} width={147} strokeColor="#418143" />
        </span>
      </td>

      <td>$2,499,993,771.46</td>

      <td>
        <img src="/images/icon/diagram.png" className="diagram" />
      </td>
    </tr>
  )
}

export default BlockHoldersToken
