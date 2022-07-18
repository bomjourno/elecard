import React from 'react'
import { Elements } from '../Elements/Elements'
import { Navbar } from '../Navbar/Navbar'
import './Main.scss'

interface IMain {
  loader: boolean
  deleteCard: (id: number) => void
  clearStorage: () => void
  setSortedBy: (value: string) => void
}

export const Main = ({
  loader,
  deleteCard,
  clearStorage,
  setSortedBy,
}: IMain) => {
  return (
    <div className='main'>
      <Navbar clearStorage={clearStorage} setSortedBy={setSortedBy} />
      <Elements loader={loader} deleteCard={deleteCard} />
    </div>
  )
}
