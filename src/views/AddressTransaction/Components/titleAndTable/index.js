import TableBase from 'components/Table/TableBase'
import React from 'react'
import { dataTbl, dataPhaKe } from 'views/AddressTransaction/fakeeeData'


const TitleAndTbl = () => {
  
  const dataPhaKe = [
    {
      key: '1',
      TxnHash: '0xb41824b8729...',
      method:'tranfer',
      block:'1512315',
      age:'10 secs ago',
      from:'0x473780dea4a...',
      to:'212asdb12s15asd',
      value:'0 Pulse',
      TxnFee:'0.000215485'
      
    },
    {
      key: '2',
      TxnHash: '0xb41824b8729...',
      method:'tranfer',
      block:'1512315',
      age:'10 secs ago',
      from:'0x473780dea4a...',
      to:'212asdb12s15asd',
      value:'0 Pulse',
      TxnFee:'0.000215485'
    },
    
  ]
  const columns= [
    {
   title: 'Txn Hash',
   dataIndex: 'TxnHash',
 },
 {
   title: 'method',
   dataIndex: 'method',
 },
 {
   title: 'Block',
   dataIndex: 'block',
 },
 {
   title: 'Age',
   dataIndex: 'age',
 },
 {
   title: 'From',
   dataIndex: 'from',
 },
 {
   title: 'To',
   dataIndex: 'to',
 },
 {
   title: 'Value',
   dataIndex: 'value',
 },
 {
   title: 'Txn Fee',
   dataIndex: 'TxnFee',
 },
 ]
  return (
    <div className="TitleAndTbl-container">
      <div className="tab-title">Latest 8 from a total of 8 transactions</div>
      <TableBase columns={columns} dataSource={dataPhaKe} 
        
      />
    </div>

  )
}

export default TitleAndTbl

