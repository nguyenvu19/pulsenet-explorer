import React from 'react'
import { Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useRouter } from 'next/dist/client/router'
import Input from 'widgets/Input'
import { isAddress, isTxhash } from 'utils'

const { Option } = Select

const WrapSearchInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 55%;
  }
  .ant-select {
    display: none;
    outline: none;
    border: none;

    ${({ theme }) => theme.mediaQueries.md} {
      color: ${({ theme }) => theme.colors.backgroundCard};
      display: block;
      width: 121px;
      height: 40px;
      background: ${({ theme }) => theme.colors.secondaryColor};
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-right: none;
      outline: none;
    }
    .ant-select-selector {
      border: none;
      outline: none;
      height: 40px !important;
      align-items: center;
    }
  }

  > input {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.backgroundCard};

    width: 100%;
    max-width: 593px;
    height: 40px;
    padding: 12px 16px;
    background: ${({ theme }) => theme.colors.secondaryColor};
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    outline: none;
  }

  > .form-button {
    min-width: 47px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.primaryColor};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    &:hover {
      box-shadow: 0 4px 11px rgb(130 71 229 / 35%);
      cursor: pointer;
    }
    &.form-button-icon {
      width: 14px;
      height: 14px;
      margin: auto;
    }
  }
  .rc-virtual-list {
    .ant-select-item-option-selected {
      color: ${({ theme }) => theme.colors.secondaryColor};
      font-weight: 500;
      background-color: ${({ theme }) => theme.colors.primaryColor};
    }
    .ant-select-item-option-active {
      background-color: ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.secondaryColor};
    }
  }
`

function SearchInput({ ...props }) {
  const router = useRouter()

  const [searchValue, setSearchValue] = React.useState('')

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      if (isAddress(searchValue)) {
        router.push(`/address/${searchValue}`)
      } else if (isTxhash(searchValue)) {
        router.push(`/tx/${searchValue}`)
      }
      setSearchValue('')
    }
  }
  return (
    <WrapSearchInput>
      <Select labelInValue defaultValue={{ value: 'All Filters' }} bordered={false} style={{ width: 120 }}>
        {/* <Option>All Filters</Option> */}
        <Option value="1">Address</Option>
        <Option value="2">Txn</Option>
        {/* <Option value="2">Tokens</Option> */}
        {/* <Option value="3">Name Tags</Option> */}
        {/* <Option value="4">Labels</Option> */}
        {/* <Option value="5">Websites</Option> */}
      </Select>
      <input
        type="text"
        placeholder="Search by Address / Txn Hash / Block / Token"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleSearch}
        {...props}
      />
      <div type="button" className="form-button">
        <SearchOutlined className="form-button-icon" style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }} />
      </div>
    </WrapSearchInput>
  )
}

Input.defaultProps = {
  onSelect: () => null,
}

export default SearchInput
