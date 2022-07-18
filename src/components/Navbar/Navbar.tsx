import React, { useEffect, useState } from 'react'
import './Navbar.scss'

interface INavbar {
  clearStorage: () => void
  setSortedBy: (value: string) => void
}

export const Navbar = ({ clearStorage, setSortedBy }: INavbar) => {
  // const [valueFilter, setValueFilter] = useState<string>('category')

  // useEffect(() => {
  //   setSortedBy(valueFilter)
  // }, [valueFilter])

  return (
    <div className='navbar'>
      <div className='navbar__item navbar__view'>
        <h3 className='navbar__item-title'>View</h3>

        <label className='navbar__label'>
          Tree
          <input type='radio' value='tree' name='view' />
        </label>
        <label className='navbar__label'>
          Cards
          <input type='radio' value='cards' name='view' defaultChecked />
        </label>
      </div>

      <div
        className='navbar__item navbar__sort'
      >
        <h3 className='navbar__item-title'>Filter</h3>
        <label className='navbar__label'>
          Category
          <input
            type='radio'
            value='category'
            name='sort'
            defaultChecked
            onChange={(e) => setSortedBy(e.target.value)}
          />
        </label>
        <label className='navbar__label'>
          Date
          <input
            type='radio'
            value='date'
            name='sort'
            onChange={(e) => setSortedBy(e.target.value)}
          />
        </label>
        <label className='navbar__label'>
          Size
          <input
            type='radio'
            value='size'
            name='sort'
            onChange={(e) => setSortedBy(e.target.value)}
          />
        </label>
      </div>

      <div className='navbar__item navbar__sort'>
        <button className='navbar__button' onClick={clearStorage}>
          Default Settings
        </button>
      </div>
    </div>
  )
}
