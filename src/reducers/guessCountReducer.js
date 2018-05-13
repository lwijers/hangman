import { CREATE_GAME } from '../actions/types'



export default (state = 1, { type, payload } = {}) => {
  switch (type) {
  case CREATE_GAME :
    return payload.guessCount
  default :
    return state
  }
}


// export default (state = 1, { type, payload } = {}) => {
//   return state
// }
