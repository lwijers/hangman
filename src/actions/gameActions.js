// import { NEW_GAME } from './types'
// import {randomWord} from '../lib/game'


export const newGame = (mysteryWord) => {
  return {
    type: 'NEW_GAME',
    payload: {
      mysteryWord,
    }
  }
}


export const makeGuess = (guess) => {
  // const triedLetter = guess

  return {
    type: 'MAKE_GUESS',
    payload: {
      guess,
    }
  }
}
