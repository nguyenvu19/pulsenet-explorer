import React from 'react'
import { Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useRouter } from 'next/dist/client/router'
import Input from 'widgets/Input'
import { isAddress, isTxhash } from 'utils'
import { SearchIcon } from 'widgets/Svg'

const { Option } = Select

const WrapSearchInput = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: flex-end;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;

  .ant-select {
    height: 100% !important;
    display: none;
    outline: none;

    ${({ theme }) => theme.mediaQueries.md} {
      color: ${({ theme }) => theme.colors.backgroundCard};
      display: block;
      width: 122px;
      height: 40px;
      background: transparent;
      border-right: 1px solid ${({ theme }) => theme.colors.tertiary};
      outline: none;
    }
    .ant-select-selector {
      color: ${({ theme }) => theme.colors.tertiary};
      height: 100% !important;
      align-items: center;
      border: none;
      outline: none;
    }
    .ant-select-arrow {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }

  > input {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.tertiary};

    width: 100%;
    height: 100%;
    padding: 12px 16px;
    background: transparent;
    outline: none;
    border: unset;
  }

  > .form-button {
    min-width: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
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
        <SearchIcon className="form-button-icon" fill="transparent" width="28px" height="28px" />
      </div>
    </WrapSearchInput>
  )
}

Input.defaultProps = {
  onSelect: () => null,
}

export default SearchInput
