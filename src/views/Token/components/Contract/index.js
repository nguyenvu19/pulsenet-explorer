import React from 'react'
import { Tabs } from 'antd'
import ReadContract from './components/Read'
import WriteContract from './components/Write'
import useMatchBreakpoints from 'hooks/useMatchBreakpoints'

import dynamic from 'next/dynamic'

import { Cascader } from 'antd'

const ContractCode = dynamic(() => import('./components/Code'), {
  ssr: false,
})

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua men',
          },
        ],
      },
    ],
  },
]

const handleSearch = (value, selectedOptions) => {
  console.log(value, selectedOptions)
}

const filter = (inputValue, path) =>
  path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)

const TabsContract = () => {
  const { isMobile } = useMatchBreakpoints()

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
      label: isMobile ? 'Read' : 'Read Contract',
      key: 2,
      children: <ReadContract />,
    },
    {
      label: isMobile ? 'Write' : 'Write Contract',
      key: 3,
      children: <WriteContract />,
    },
  ]
  return (
    <div className="tabs-contract">
      <Tabs
        tabBarExtraContent={
          <Cascader
            suffixIcon={<img src="/images/icon/iconUpDown.png" style={{ height: '13.36px', width: '10.44px' }} />}
            options={options}
            onChange={handleSearch}
            placeholder="Search Source Code"
            showSearch={{
              filter,
            }}
            onSearch={(value) => console.log(value)}
          />
        }
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
