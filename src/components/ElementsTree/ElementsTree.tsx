import React, { useContext } from 'react'
import { CardsContext } from '../../contexts/CardsContexts'
import './ElementsTree.scss'

export const ElementsTree = () => {
  const cards = useContext(CardsContext)

  return(
    <div className="elements-tree">
      
    </div>
  )
}