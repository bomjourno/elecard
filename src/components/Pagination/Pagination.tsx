import React from 'react'
import './Pagination.scss'

interface IPagination {
  cardsPerPage: number,
  totalCards: number
  paginate: (value:number) => void
}

export const Pagination = ({ cardsPerPage, totalCards, paginate }:IPagination) => {
  const pageNumbers = []

  for (let i = 1; i<=Math.ceil(totalCards/cardsPerPage);i++) {
    pageNumbers.push(i)
  }

  return (
    <ul className='pagination'>
      {pageNumbers.map(number => (
        <li className='pagination__item' key={number}>
          <a href="#" className="pagination__link" onClick={() => paginate(number)}>{number}</a>
        </li>
      ) )}
    </ul>
  )
}