import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Space } from 'antd'
import { CopyOutlined, CheckCircleOutlined } from '@ant-design/icons'

const Wrapinput = styled.input`
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

const Input = () => {
  
  return (
    <Wrapinput 
      // key={`authen-${index}`}
      // className={isError ? 'error' : ''}
      // type="text"
      // name={`ssn-${index + 1}`}
      // value={value}
      // onChange={handleChange}
      placeholder=''
    />
      
  )
}

// Input.defaultProps = {
//   href: '',
// }

export default Input
