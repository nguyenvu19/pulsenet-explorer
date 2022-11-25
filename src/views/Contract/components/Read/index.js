import Link from 'next/link'
import React from 'react'
import Block from '../Block'

const ReadContract = () => {
  const name = '1.Name'
  return (
    <div className="read-contract">
      <div className="top">
        <div className="left">
          <img src="/images/icon/document-text.png" alt="" />
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

export default ReadContract
