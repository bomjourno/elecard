import React, { useContext } from 'react'
import { CardsContext } from '../../contexts/CardsContexts'
import { Element } from '../Element/Element'
import { Loader } from '../Loader/Loader'
import './Elements.scss'

interface IElements {
  loader: boolean
  deleteCard: (id:number) => void
}

export const Elements = ({ loader, deleteCard }: IElements) => {
  const cards = useContext(CardsContext)

  if (loader) {
    return <Loader />
  }

  return (
    <div className='elements'>
      {cards.map((card, index) => {
        return <Element card={card} key={index} deleteCard={deleteCard} />
      })}
    </div>
  )
}
