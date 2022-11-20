import React from 'react'
import { Button, Tabs, Modal, Menu, Space } from 'antd'
import Link from 'components/Link/NextLink'

const ContractCode = ({ tokenInfo }) => {
  function info() {
    Modal.info({
      title: 'Poligonscan.com says',
      content: (
        <div>
          <p>Please connect to your Web3 pro vider!</p>
        </div>
      ),
      onOk() {},
    })
  }
  return (
    <Tabs className="contract-code" type="card">
      <Tabs.TabPane
        tab={
          <div className="tab-contract-div">
            Read <span className="tab-contract-none">Contract</span>
          </div>
        }
        key="1"
      >
        <div className="tab-contract-read">
          Sorry, we were unable to locate a matching Contract ABI or SourceCode for this contract. <br /> <br />
          If you are the contract owner, please <Link href="#">Verify Your Contract Source Code</Link> here.
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <div className="tab-contract-div">
            Write <span className="tab-contract-none">Contract</span>
          </div>
        }
        key="2"
      >
        <div className="tab-contract-content">
          <div className="content-header">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
              </svg>
              <Button type="primary">
                <Link href="#">Connect to Web3</Link>
              </Button>
              <Modal title="Connect a Wallet">
                <Link href="#">
                  <span>MetaMask</span>
                  <img src="https://polygonscan.com/images/svg/brands/metamask.svg" alt="" />
                </Link>
                <Link href="#">
                  <span>WalletConnect</span>
                  <img src="https://polygonscan.com/images/svg/brands/walletconnect.svg" alt="" />
                </Link>
              </Modal>
            </p>
            <Link href="#">[Reset]</Link>
          </div>
          <div className="content-main">
            <Menu style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
              <Menu.SubMenu key="sub1" title="1. admin">
                <Space wrap>
                  <Button onClick={info}>Write</Button>
                </Space>
              </Menu.SubMenu>
            </Menu>
          </div>
        </div>
      </Tabs.TabPane>
    </Tabs>
  )
}

export default ContractCode
