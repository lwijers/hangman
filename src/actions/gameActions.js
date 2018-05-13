import { CREATE_GAME } from './types'
import {randomWord} from '../lib/game'


export const createGame = () => {
  const wordReducer = randomWord()
  const guessCount = 0;

  return {
    type: 'CREATE_GAME',
    payload: {
      wordReducer,
      guessCount
    } 

  }

}
