import { NEW_GAME, MAKE_GUESS } from '../actions/types'



export default (state = [], { type, payload } = {}) => {
  console.log(...state);
  switch (type) {
  case NEW_GAME :
    return []
  case MAKE_GUESS :
    return [...state, payload.guess]
  default :
    return state
  }
}
