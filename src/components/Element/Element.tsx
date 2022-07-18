import React from 'react'
import dayjs from 'dayjs'
import './Element.scss'
import { ICard } from '../../types/card'

interface IElement {
  card: ICard
  deleteCard: (id:number) => void
}

export const Element = ({ card, deleteCard }: IElement) => {

  return (
    <div className='element'>
      <div className='element__remove' onClick={() => deleteCard(card.timestamp)}></div>
      <img
        className='element__image'
        src={`http://contest.elecard.ru/frontend_data/${card.image}`}
        alt={card.category}
      />
      <div className='element__text-wrapper'>
        <p className='element__text'>
          Category:{' '}
          {`${card.category.slice(0, 1).toUpperCase()}${card.category.slice(
            1,
          )}`}
        </p>
        <p className='element__text'>
          Created at: {dayjs(card.timestamp).format('D MMMM YYYY')}
        </p>
        <p className='element__text'>File size: {card.filesize}</p>
      </div>
    </div>
  )
}
