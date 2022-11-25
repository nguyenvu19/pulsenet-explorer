import React from 'react'
import { BsFolder } from 'react-icons/bs'
import BigNumber from 'bignumber.js'
import toLocaleString from '../../../../utils/index'
const BlockUnitconverter = ({ code, name, wei, handleChange }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(new BigNumber(code).shiftedBy(wei).toLocaleString())
    alert('Already copied')
  }

  return (
    <div className="block-content">
      <div className="left">
        <button className="icon" onClick={handleClick}>
          <BsFolder />
        </button>
        <input
          className="code"
          value={new BigNumber(code).shiftedBy(wei).toLocaleString()}
          onChange={(e) => handleChange(e.target.value, wei)}
        />
      </div>
      <div className="price right">
        {wei > 0 ? (
          <p>
            {name} (10<sup>-{wei}</sup>)
          </p>
        ) : (
          <p>
            {name} (10<sup>{Math.abs(wei)}</sup>)
          </p>
        )}
      </div>
    </div>
  )
}

export default BlockUnitconverter
