import React from 'react'
import axios from 'axios'
import { ICard } from '../types/card'

class Api {
  private baseUrl: string
  constructor(props: { baseUrl: string }) {
    this.baseUrl = props.baseUrl
  }

  getItems() {
    return axios.get<ICard[]>(`${this.baseUrl}/catalog.json`)
  }
}

export const api = new Api({
  baseUrl: 'http://contest.elecard.ru/frontend_data',
})