import React from 'react'
import { Layout, Button } from 'antd'
import styled from 'styled-components'

const { Content } = Layout

// const Button = styled.button`
//     width: 100px;
//     padding: 0 24px;
//     color: #FFFFFF;
//     margin-top: 24px;
//     margin-right: 24px;
//     font-size: 16px;
//     font-weight: 700;
//     background-color: #418143;
//     border-radius: 4px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     border: none;
//     margin-bottom: 16px;
// `
const WatchListTitle = styled.div`
  margin-top: 24px;
  margin-left: 24px;
`
// const WatchListContent = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     border-bottom: 1px solid #3c3a3a;
// `

const WatchList = (props) => {
  // const { activeTab } = props;
  // console.log('activeTab', activeTab)
  return (
    <>
      <div className="overview_info watch_list">
        <WatchListTitle>
          <div className="watch_list_title">
            <h1>Watch List</h1>
            <Button className="btn_add">
              <img src="/images/account/add.png" />
              Add
            </Button>
          </div>
          <p>
            An Email notification can be sent to you when an address on your watch list sends or receives any
            transactions.
          </p>
        </WatchListTitle>

        <div className="overview_info_content watch_list_content">
          <div className="watch_list_content_username ">
            <p style={{ fontSize: '14px' }}> 0 address selected (out of 50 max limit)</p>
            <div>
              <img src="/images/account/search.png" />
            </div>
          </div>
          <div className="watch_list_content_username" style={{ backgroundColor: '#EEEEEE', height: '21px' }}>
            <p>Address</p>
            <p>Private Nametag</p>
            <p>Notificationz</p>
            <p></p>
          </div>
          <div className="watch_list_content_username center " style={{ backgroundColor: '#EEEEEE' }}>
            <span>
              <img src="/images/account/matching.png" /> There are no matching entries{' '}
            </span>
          </div>
          <div className="watch_list_content_username flex-end">
            <span>Your Email Address</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default WatchList
