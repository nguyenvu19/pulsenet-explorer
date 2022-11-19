import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Progress, Modal, Button, Col, Dropdown, Menu, Row, Space, Table, Tabs, message, Input } from 'antd'
import {
  ClockCircleOutlined,
  CopyOutlined,
  FlagFilled,
  TagOutlined,
  TagsFilled,
  TeamOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { isAddress } from 'utils'
import Web3Token from 'library/Web3Token'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import CardTabs from 'components/Card/CardTabs'
import Transfers from './components/Transfers'
import Holders from './components/Holders'
import Inventory from './components/Inventory'
import Info from './components/Info'
import Contract from './components/Contract'
import Comments from './components/Comments'
import TokenHeader from './components/HeaderPage'
import TokenOverview from 'components/Token/TokenOverview'
import TokenProfile from 'components/Token/TokenProfile'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">
        <CopyOutlined />
        <div> View Private Note</div>
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.antgroup.com">
        <ClockCircleOutlined />
        <div> Check Previous Balance</div>
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <a href="https://www.antgroup.com">
        <TagOutlined />
        <div> Update Name Tag</div>
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="https://www.antgroup.com">
        <TagsFilled />
        <div>Submit Label</div>
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="https://www.antgroup.com">
        <FlagFilled />
        <div>Report/Flag Address</div>
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="https://www.antgroup.com">
        <TeamOutlined />
        <div>
          Token Approvals
          <sup> Beta</sup>
        </div>
      </a>
    </Menu.Item>
  </Menu>
)

const TokenPage = () => {
  const { query } = useRouter()
  const refToken = React.useRef()

  const [tokenInfo, setTokenInfo] = React.useState()

  // init web3 token
  React.useEffect(() => {
    ;(async () => {
      if (query.token && isAddress(query.token)) {
        refToken.current = new Web3Token(query.token)
        const pInfoToken = await refToken.current.getFullInfo()
        setTokenInfo(pInfoToken)
      }
    })()
  }, [query.token])

  if (!tokenInfo) return <>Loading...</>
  return (
    <div className="token-wrapper">
      <TokenHeader tokenInfo={tokenInfo} />
      <div className="container">
        <div className="hr-alt-01" />
      </div>
      <div className="container token-main">
        <div className="main-top">
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <TokenOverview tokenInfo={tokenInfo} />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <TokenProfile tokenInfo={tokenInfo} />
            </Col>
          </Row>
        </div>
        <div className="token-main-center" />
        <div className="token-main-under">
          <CardTabs
            tabBarExtraContent={
              <Dropdown
                trigger={['click']}
                overlay={<Input.Search placeholder="input search text" allowClear enterButton="Find" size="middle" />}
                arrow={{ pointAtCenter: true }}
              >
                <Button className="btn-more-transaction">
                  <SearchOutlined />
                </Button>
              </Dropdown>
            }
            tabs={[
              {
                key: '1',
                title: 'Transfers',
                content: <Transfers />,
              },
              {
                key: '2',
                title: 'Holders',
                content: <Holders />,
              },
              {
                key: '3',
                title: 'Inventory',
                content: <Inventory />,
              },
              {
                key: '4',
                title: 'Info',
                content: <Info />,
              },
              {
                key: '5',
                title: 'Contract',
                content: <Contract />,
              },
              {
                key: '6',
                title: 'Comments',
                content: <Comments />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

TokenPage.Layout = PublicLayoutBlock
export default TokenPage
