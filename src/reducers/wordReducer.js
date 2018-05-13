import { NEW_GAME } from '../actions/types'
import { randomWord } from '../lib/game'



export default (state = randomWord(), { type, payload } = {}) => {
  switch (type) {
  case NEW_GAME :
    return payload.mysteryWord
  default :
    return state
  }
}
