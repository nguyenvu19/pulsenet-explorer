import React from 'react'
import Link from 'next/link'
import Block from '../Block'

const WriteContract = () => {
  const name = '1. add Blacklist (0x0ejnsd92)'

  return (
    <div className="write-contract">
      <div className="top">
        <div className="left">
          <img src="/images/icon/Ellipse 1114.png" alt="" />
          <p>Read Contract Information</p>
        </div>
        <div className="right">
          <Link href="#">[Expand all]</Link>
          <Link href="#">[Reset]</Link>
        </div>
      </div>

      <div className="bottom">
        <Block props={name} />
        <Block props={name} />
        <Block props={name} />
        <Block props={name} />
        <Block props={name} />
      </div>
    </div>
  )
}

export default WriteContract
