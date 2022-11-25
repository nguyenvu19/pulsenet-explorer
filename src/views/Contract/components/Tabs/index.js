import React from 'react'
import { Tabs } from 'antd'
import ReadContract from '../Read'
import WriteContract from '../Write'

import dynamic from 'next/dynamic'

const ContractCode = dynamic(() => import('../Code'), {
  ssr: false,
})

const TabsContract = () => {
  const onChange = (key) => {
    console.log(key)
  }

  const data = [
    {
      label: 'Code',
      key: 1,
      children: <ContractCode />,
    },
    {
      label: 'Read Contract',
      key: 2,
      children: <ReadContract />,
    },
    {
      label: 'Write Contract',
      key: 3,
      children: <WriteContract />,
    },
  ]
  return (
    <div className="tabs-contract">
      <Tabs
        onChange={onChange}
        type="card"
        items={data.map((value) => {
          console.log(value)
          return {
            label: value.label,
            key: value.key,
            children: <>{value.children}</>,
          }
        })}
      />
    </div>
  )
}

export default TabsContract
