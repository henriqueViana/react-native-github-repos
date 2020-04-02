import { GET_REPOSITORIES } from './types'
import api from '../../services/api'

export const getRepositories = nickname => async dispatch => {
  try {
    const response = await api.get(`/${nickname}/repos`)

    dispatch({
      type: GET_REPOSITORIES,
      payload: response.data,
      error: null
    })
  } catch (error) {
    dispatch({
      type: GET_REPOSITORIES,
      payload: [],
      error: { errorMessage: 'Usuário não encontrado' }
    })
  }
  
}