import React from 'react'
import { Tabs } from 'antd'

const CardTabs = ({ tabs, ...props }) => {
  return (
    <Tabs className="card-tabs" defaultActiveKey={tabs[0].key} {...props}>
      {tabs.map((tab) => {
        return (
          <Tabs.TabPane tab={tab.title} key={tab.key}>
            {tab.content}
          </Tabs.TabPane>
        )
      })}
    </Tabs>
  )
}

export default CardTabs
