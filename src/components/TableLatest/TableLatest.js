import React from 'react'
import Web3 from 'web3'
import { range } from 'lodash'
import TableItemLatest from 'components/TableItemLatest/TableItemLatest'
import { PROVIDER_NETWORK_URL } from 'config/constants'

const web3 = new Web3(PROVIDER_NETWORK_URL)

async function getListBlock(n) {
  const latest = await web3.eth.getBlockNumber()
  const blockNumbers = range(latest - n, latest + 1, 1)
  const blocks = await Promise.all(blockNumbers.map((n) => web3.eth.getBlock(n)))
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

const TableLatestBlock = () => {
  const [listBlock, setListBlock] = React.useState([])

  React.useEffect(() => {
    let timer
    getListBlock(3).then(({ latest, blocks }) => {
      setListBlock((prev) => [...blocks, ...prev].reverse())
      timer = setInterval(() => {
        getNextBlock(latest).then((newListBlock) => {
          latest = newListBlock.latest
          setListBlock((prev) => [...newListBlock.blocks.reverse(), ...prev].slice(0, 10))
        })
      }, 6000)
    })

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="table-body">
      <div className="table-body-left">
        <div className="card-body">
          <div className="card-body-outside">
            <div id="list-block" className="card-body-container">
              {listBlock.map((item) => {
                return <TableItemLatest key={`bks-${item.number}`} dataItem={item} />
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="table-body-right">body right</div>
    </div>
  )
}
export default TableLatestBlock
