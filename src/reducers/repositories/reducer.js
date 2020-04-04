import { GET_REPOSITORIES, CLEAR_REPOSITORIES } from './types'

const initialState = []

export default (state = initialState, action) => {
  if (action.error) {
    return action.error
  }

  switch(action.type) {
    case GET_REPOSITORIES:
      return action.payload
    case CLEAR_REPOSITORIES:
      return action.payload
    default:
      return state
  }
}