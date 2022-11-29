import React from 'react'
import { Button } from 'antd'

const Buttons = ({ name }) => <Button className="addr-button">{name} </Button>
import { MessageOutlined, CopyOutlined, QrcodeOutlined, FileTextOutlined } from '@ant-design/icons'

const AddressTop = () => {
  return (
    <div className="addr-top-container">
      <div className="address-details">
        <h1>Address</h1>
        <span style={{ fontSize: '16px', wordBreak: 'break-word', overflowWrap: 'break-word' }}>0x02Fe...a30035</span>
        <span className="address-details_icon">
          <span className="adr-icon icon-copy">
            <CopyOutlined />
          </span>
          <span className="adr-icon icon-qr">
            <QrcodeOutlined />
          </span>
          <span className="adr-icon icon-file-text">
            <img src="/images/address/note.png" alt="" />
          </span>
          <span className="adr-icon icon-chat">
            <MessageOutlined />
          </span>
        </span>
      </div>
      <div className="buttons-container">
        <Buttons name="Buy" />
        <Buttons name="Exchange" />
        <Buttons name="Earn" />
        <Buttons name="Gaming" />
      </div>
    </div>
  )
}

export default AddressTop
