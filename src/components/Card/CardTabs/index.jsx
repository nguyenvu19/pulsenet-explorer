import React from 'react'

const CardBase = ({ title, rightNode, content, backgroundHeader }) => {
  return (
    <Tabs
      defaultActiveKey="1"
      onChange={callback}
      tabBarExtraContent={
        <Dropdown
          trigger={['click']}
          overlay={
            <Search placeholder="input search text" allowClear enterButton="Find" size="middle" onSearch={onSearch} />
          }
          arrow={{ pointAtCenter: true }}
        >
          <Button className="btn-more-transaction">
            <SearchOutlined />
          </Button>
        </Dropdown>
      }
    >
      <TabPane tab="Transfers" key="1">
        <div className="token-main-under-card">
          <div className="main-under-card-content">
            <div className="card-content-text">
              <span className="card-content-text-text">
                A total of 5,090 transactions found
                <span>(Showing the last 100k records)</span>
              </span>
            </div>
            <div className="card-content-table">
              <Table columns={columnsTransfer} dataSource={[]} />
            </div>
            <div className="card-content-footer">
              <div className="content-footer-text">
                <span className="content-footer-text-right">
                  [ Download
                  <Link href="#">CSV Export</Link>
                  &nbsp;
                  <span>
                    <DownloadOutlined />
                  </span>
                  ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane tab="Holders" key="2">
        <div className="token-main-under-card">
          <div className="main-under-card-content">
            <div className="card-content-text-holder">
              <Link href="#">
                <PieChartFilled />
                Token Holders Chart
              </Link>
              <span className="card-content-text-holder-span"> Top 1,000 holders (From a total of 16,623 holders)</span>
            </div>
            <div className="card-content-table">
              <Table columns={columns} dataSource={[]} />
            </div>
            <div className="card-content-footer">
              <div className="content-footer-text">
                <span className="content-footer-text-right">
                  [ Download
                  <Link href="#">CSV Export</Link>
                  &nbsp;
                  <span>
                    <DownloadOutlined />
                  </span>
                  ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane tab="Inventory" key="3">
        <div className="token-main-under-card">
          <div className="main-under-card-content">
            <div className="card-content-text">
              <div>
                <span> Latest 10,000 active tokens (From a total of 646,757 tokens)</span>
              </div>
            </div>
            <div className="card-content-table">
              <Table columns={columnsdataInventory} dataSource={[]} />
            </div>
            <div className="card-content-footer">
              <div className="content-footer-text">
                <span className="content-footer-text-right">
                  [ Download
                  <Link href="#">CSV Export</Link>
                  &nbsp;
                  <span>
                    <DownloadOutlined />
                  </span>
                  ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane tab="Info" key="4">
        <div className="token-main-under-card">
          <div className="info-update">
            Click here to{' '}
            <Link href="#" className="info-update-link">
              update
            </Link>{' '}
            the token ICO / general information
          </div>
        </div>
      </TabPane>
      <TabPane tab="Contract" key="5">
        <div className="paneContract">
          <Tabs onChange={callback} type="card">
            <TabPane
              tab={
                <div className="paneContract-div">
                  Read <span className="paneContract-none">Contract</span>
                </div>
              }
              key="1"
            >
              <div className="paneContract-read">
                Sorry, we were unable to locate a matching Contract ABI or SourceCode for this contract. <br /> <br />
                If you are the contract owner, please <Link href="#">Verify Your Contract Source Code</Link> here.
              </div>
            </TabPane>
            <TabPane
              tab={
                <div className="paneContract-div">
                  Write <span className="paneContract-none">Contract</span>
                </div>
              }
              key="2"
            >
              <div className="paneContract-content">
                <div className="content-header">
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
                    </svg>
                    <Button type="primary" onClick={showModal}>
                      <Link href="#">Connect to Web3</Link>
                    </Button>
                    <Modal title="Connect a Wallet" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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
                  <Menu
                    onClick={handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                  >
                    <SubMenu key="sub1" title="1. admin">
                      <Space wrap>
                        <Button onClick={info}>Write</Button>
                      </Space>
                    </SubMenu>
                  </Menu>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </TabPane>
      <TabPane tab="Comments" key="6">
        <div className="comments-div">Comment</div>
      </TabPane>
    </Tabs>
  )
}

export default CardBase
