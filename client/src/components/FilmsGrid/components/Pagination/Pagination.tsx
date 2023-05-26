import React from 'react'

type PaginationProps = {
    page: number;
    setPage: (page: number) => void;
    pages: number;
}

const Pagination: React.FC<PaginationProps> = ({}) => {
  return (
    <div>Pagination</div>
  )
}

export default Pagination