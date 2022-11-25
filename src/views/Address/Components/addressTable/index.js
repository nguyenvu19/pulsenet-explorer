import TableBase from 'components/Table/TableBase'
import React from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Button, Menu, Dropdown, Switch, Space, Tooltip } from 'antd'

const TitleAndTbl = ({ columns, dataSource, swt }) => {
  return (
    <div className="TitleAndTbl-container">
      <div className="tab-title"><span>Latest 8 from a total of 8 transactions</span>{swt === 'yes' && <Switch size='small' />}</div>
      <TableBase columns={columns} dataSource={dataSource} />
    </div>
  )
}

export default TitleAndTbl
