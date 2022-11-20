import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Space } from 'antd'
import { CopyOutlined, CheckCircleOutlined } from '@ant-design/icons'

const WrapCoppyText = styled.div`
  display: flex;
  .coppy-text.link {
    color: #16a637;
  }
  .coppy-right {
    margin-left: 4px;
    cursor: pointer;
    path {
      fill: #6c757e;
    }
  }
`

const CoppyText = ({ value, href, target, children, ...props }) => {
  const [isCoppy, setIsCoppy] = React.useState(false)
  const setIsCopped = () => {
    setIsCoppy(!isCoppy)
    setInterval(() => {
      setIsCoppy(isCoppy)
    }, 2000)
    navigator.clipboard.writeText(value)
  }

  const isHttp = !href || href?.startsWith('http')
  const Tag = !href ? 'div' : isHttp ? 'a' : 'Link'
  const propsLink = !href ? {} : isHttp ? { href, target } : { href }
  return (
    <WrapCoppyText {...props}>
      {Tag === 'Link' ? (
        <Link {...propsLink}>
          <a>
            <span className="coppy-text link">{children}</span>
          </a>
        </Link>
      ) : (
        <span className="coppy-text ">{children}</span>
      )}

      <a className="coppy-right">
        <Space>
          {!isCoppy ? <img src="/images/icon/folder.svg" alt="" onClick={setIsCopped} /> : <CheckCircleOutlined onClick={setIsCopped} />}
          {isCoppy && (
            <span className="coppied" style={{ color: '#8c98a4' }}>
              coppied
            </span>
          )}
        </Space>
      </a>
    </WrapCoppyText>
  )
}

CoppyText.defaultProps = {
  href: '',
}

export default CoppyText
