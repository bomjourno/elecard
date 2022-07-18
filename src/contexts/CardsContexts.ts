import React from 'react';
import { ICard } from '../types/card';

export const CardsContext = React.createContext<ICard[]>([]);
