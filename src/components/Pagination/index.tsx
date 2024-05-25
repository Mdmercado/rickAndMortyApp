import React from 'react'
import './pagination.css'

const MINIMUM_PAGE = 1
interface PaginationProps {
  currentPage: number
  totalPages: number
  onNextPage: () => void
  onPrevPage: () => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <div className="pagination">
      <button onClick={onPrevPage} disabled={currentPage <= MINIMUM_PAGE}>
        Anterior
      </button>
      <span>
        Pagina {currentPage} de {totalPages}
      </span>
      <button onClick={onNextPage} disabled={currentPage >= totalPages}>
        Siguiente
      </button>
    </div>
  )
}

export default Pagination
