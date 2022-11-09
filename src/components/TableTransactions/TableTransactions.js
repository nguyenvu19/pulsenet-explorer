import React from 'react'
import Web3 from 'web3'
import { range } from 'lodash'
import { PROVIDER_NETWORK_URL } from 'config/constants'
import TableItemTransactions from 'components/TableItemTransactions/TableItemTransactions'
import useLatestTransactionList from '../../hooks/useLatestTransactionList'
import { Spin } from 'antd'

const web3 = new Web3(PROVIDER_NETWORK_URL)

async function getListBlock() {
  const latest = await web3.eth.getBlockNumber()
  const blocks = await web3.eth.getBlock(latest)
  return { latest, blocks }
}

async function getListBlockFromEndBlock(latest, newBlock) {
  const blockNumbers = range(latest + 1, newBlock + 1, 1)
  const blocks = await Promise.all(blockNumbers.map((n) => web3.eth.getBlock(n)))
  return { latest, blocks }
}

async function getNextBlock(latest) {
  const newBlock = await web3.eth.getBlockNumber()
  if (newBlock > latest) {
    const listLatestBlock = await getListBlockFromEndBlock(latest, newBlock)
    return { latest: newBlock, blocks: listLatestBlock.blocks }
  } else {
    return { latest: newBlock, blocks: [] }
  }
}

const TableTransactions = () => {
  const { transactions } = useLatestTransactionList()

  return (
    <div className="table-body">
      <div className="table-body-left">
        {Object.values(transactions).length > 0 ? (
          <div className="card-body">
            <div className="card-body-outside">
              <div className="card-body-container">
                {Object.values(transactions).map((item) => {
                  return <TableItemTransactions key={`txs-${item?.txh}`} dataItem={item} />
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="table-loading">
            <Spin />
          </div>
        )}
      </div>
      {/* <div className="table-body-right"> body right</div> */}
    </div>
  )
}

export default TableTransactions
