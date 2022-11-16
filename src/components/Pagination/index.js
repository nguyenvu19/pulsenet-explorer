import React, { useState } from 'react'

const Pagination = ({ page }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(1000)

  const handlePagination = (page) => {}

  return (
    <div className="pagination">
      <button className="first">First</button>
      <button className="previous" onClick={() => handlePagination(currentPage - 1)}>
        <span>&#60;</span>
      </button>
      <div className="number">
        Page {currentPage} of {page}
      </div>
      <button className="next" onClick={() => handlePagination(currentPage + 1)}>
        <span>&#62;</span>
      </button>
      <button className="last">Last</button>
    </div>
  )
}

export default Pagination
