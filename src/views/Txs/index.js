import { ArrowRightOutlined, ContainerOutlined, EyeOutlined } from '@ant-design/icons'
import { Table, Progress } from 'antd'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import React, { useState } from 'react'
import Web3 from 'library/Web3'
import Link from 'components/NextLink/NextLink'
import { useRouter } from 'next/dist/client/router'
import { formatCode, formatDate } from 'library/helpers/CommonHelper'
import siteConfig from '../../config/site.config'
import useLatestTransactionList from '../../hooks/useLatestTransactionList'

const { web3 } = new Web3()

const columns = (block) => [
  {
    title: 'Txn Hash',
    dataIndex: 'txh',
    render: (text) => (
      <div className="data-txnHash">
        <div>
          <EyeOutlined />
        </div>
        <Link href={`/tx/${text}`}>{formatCode(text, 6, 12)}</Link>
      </div>
    ),
  },
  {
    title: 'Method ',
    dataIndex: 'method',
    render: () => <div className="data-method">Method</div>,
  },
  {
    title: 'Block',
    dataIndex: 'blockDetail',
    render: (blockDetail) => (
      <Link className="data-block" href={`/block/${blockDetail.number}`}>
        {blockDetail.number}
      </Link>
    ),
  },
  {
    title: 'Age',
    dataIndex: 'blockDetail',
    render: (blockDetail) => <div className="data-age">{formatDate(blockDetail?.timestamp)}</div>,
  },
  {
    title: 'From',
    dataIndex: 'txhDetail',
    render: (txhDetail) => (
      <div className="data-from">
        <Link href="/address/-" className="data-from-link">
          {formatCode(txhDetail?.from, 6, 10)}
        </Link>
      </div>
    ),
  },
  {
    title: 'To',
    dataIndex: 'txhDetail',
    render: (txhDetail) => (
      <div className="data-to">
        <div>
          <ArrowRightOutlined />
        </div>
        <Link href="/address/-" className="data-to-link">
          {formatCode(txhDetail?.to, 6, 10)}
        </Link>
      </div>
    ),
  },
  {
    title: 'Value',
    dataIndex: 'txhDetail',
    render: () => <div className="data-value">-- {siteConfig.nativeCurrency.symbol} </div>,
  },
  {
    title: '[Txn Fee]',
    dataIndex: 'txnFee',
    render: () => (
      <div className="data-txnfee">
        <Link className=" data-txnfee-link-txs">-- </Link>
        <div>💡</div>
      </div>
    ),
  },
]

const TransactionsModule = () => {
  const router = useRouter()

  const [blockDetail, setBlockDetail] = useState({})

  /* Get block detail */
  React.useEffect(() => {
    ;(async () => {
      if (router.query.block) {
        try {
          const blockDt = await web3.eth.getBlock(router.query.block)
          if (blockDt && blockDt?.transactions) {
            let obj = {}
            blockDt?.transactions?.forEach((txh) => {
              obj[txh] = {
                txh,
                blockDetail: blockDt,
              }
            })
            setBlockDetail(obj)
          }
        } catch (error) {
          setBlockDetail({})
        }
      }
    })()
  }, [router.query.block])

  /*  */
  const { transactions } = useLatestTransactionList(router.query.block)

  return (
    <div className="txs-wrapper">
      <div className="container ">
        <div className="txs-heading">
          <h1>
            Transactions
            {router.query.block && (
              <p>
                For Block <Link href={`/block/${router.query.block}`}>{router.query.block}</Link>
              </p>
            )}
          </h1>
          {/* <div>
            <span className="heading-network">Network Utilization: 50.9%</span>
            <Link>
              <span>🔥 Burnt Fees: </span>
              <span>617,479.30 PI </span>
            </Link>
          </div> */}
        </div>
        <div className="txs-bottom">
          <div className="txs-card">
            <div className="txs-card-body">
              {/* <div className="card-body-header">
                <p>Block #27052449 to #27052548 (Total of 27,052,549 blocks)</p>
              </div> */}
              <div className="card-body-center">
                {router.query.block ? (
                  <Table
                    columns={columns(router.query.block)}
                    loading={Object.values(blockDetail).length <= 0}
                    dataSource={Object.values(blockDetail)}
                  />
                ) : (
                  <Table
                    columns={columns(router.query.block)}
                    loading={Object.values(transactions).length <= 0}
                    dataSource={Object.values(transactions)}
                  />
                )}
              </div>
              {/* <div className="card-body-footer"> 
                <ul>
                  <li>footer</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

TransactionsModule.Layout = PublicLayoutBlock
export default TransactionsModule
