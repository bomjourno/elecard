import React, { useEffect, useState } from 'react'
import './App.scss'
import { api } from './service/api'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { CardsContext } from './contexts/CardsContexts'
import { ICard } from './types/card'

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [cards, setCards] = useState<ICard[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(21)
  const [isDefaultCards, setIsDefaultCards] = useState(false)
  const [sortedBy, setSortedBy] = useState<string>('category')
  // const [currentCards, setCurrentCards] = useState<ICard[]>([])
  const [view, setView] = useState<string>('cards')

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const lastCardIndex = currentPage * cardsPerPage
  const firstCardIndex = lastCardIndex - cardsPerPage
  const currentCards = cards.slice(firstCardIndex, lastCardIndex)

  const clearStorage = () => {
    localStorage.removeItem('removedCards')
    setIsDefaultCards((prevValue) => !prevValue)
  }

  const addDeletedCardsToStorage = (id: number) => {
    let deletedCards: number[] = []
    const data = localStorage.getItem('removedCards')
    if (data) {
      deletedCards = JSON.parse(data)
    }
    deletedCards.push(id)
    localStorage.setItem('removedCards', JSON.stringify(deletedCards))
  }

  const deleteCard = (id: number) => {
    addDeletedCardsToStorage(id)
    setCards(cards.filter((card) => card.timestamp !== id))
  }

  useEffect(() => {
    setIsLoading(true)
    api.getItems().then((res): void => {
      const data = localStorage.getItem('removedCards')
      if (data) {
        const previouslyDeletedCards = JSON.parse(data)

        const filteredCards = res.data.filter(
          (card) => !previouslyDeletedCards.includes(card.timestamp),
        )
        setCards(filteredCards)
      } else {
        setCards(res.data)
      }
      setIsLoading(false)
    })
  }, [isDefaultCards])

  useEffect(() => {
    switch (sortedBy) {
      case 'date':
        setCards((prevValue) =>
          prevValue.sort((a, b) => a.timestamp - b.timestamp),
        )
        break
      case 'size':
        setCards((prevValue) =>
          prevValue.sort((a, b) => a.filesize - b.filesize),
        )
        break
      default:
        setCards((prevValue) =>
          prevValue.sort((a, b) => a.category.localeCompare(b.category)),
        )
    }
  }, [sortedBy])

  return (
    <div className='app'>
      <CardsContext.Provider value={currentCards}>
        <Header />
        <Main
          clearStorage={clearStorage}
          loader={isLoading}
          deleteCard={deleteCard}
          setSortedBy={setSortedBy}
        />
        <Footer
          cardsPerPage={cardsPerPage}
          totalCards={cards.length}
          paginate={paginate}
        />
      </CardsContext.Provider>
    </div>
  )
}

export default App
