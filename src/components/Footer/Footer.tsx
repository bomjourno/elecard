import React from 'react'
import { Pagination } from '../Pagination/Pagination'
import './Footer.scss'

interface IFooter {
  cardsPerPage: number
  totalCards: number
  paginate: (value:number) => void
}

export const Footer = ({ cardsPerPage, totalCards, paginate }: IFooter) => {
  return (
    <footer className='footer'>
      <Pagination cardsPerPage={cardsPerPage} totalCards={totalCards} paginate={paginate} />
    </footer>
  )
}
