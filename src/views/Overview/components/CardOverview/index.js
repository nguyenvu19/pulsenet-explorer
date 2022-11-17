import React from 'react'

const CardOverview = ({ title, rightNode, children }) => {
  return (
    <div className="overview_info">
      <div className="overview_info_title">
        <h1>{title}</h1>
        {rightNode}
      </div>
      {children}
    </div>
  )
}

export default CardOverview
