import { GET_REPOSITORIES, SET_REPOSITORIES, CLEAR_REPOSITORIES } from './types'
import api from '../../services/api'
import { getItem, setItem } from '../../storage'

export const getRepositories = userName => async dispatch => {
  const userRepos = await getRepositoriesInStorage(userName)

  if (userRepos) {
    dispatch(setRepositories(userRepos))
    return
  }

  try {
    const response = await api.get(`/${userName}/repos`)

    setItem(userName, response.data)

    dispatch({
      type: GET_REPOSITORIES,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: GET_REPOSITORIES,
      payload: [],
      error: { errorMessage: 'Usuário não encontrado' }
    })
  }
}

export const setRepositories = repositories => dispatch => {
  dispatch({
    type: SET_REPOSITORIES,
    payload: repositories
  })
}

export const clearRepositories = () => {
  return {
    type: CLEAR_REPOSITORIES,
    payload: []
  }
}

const getRepositoriesInStorage = async userName => {
  let userRepos
  const userReposString = await getItem(userName)

  if (userReposString) {
    userRepos = JSON.parse(userReposString)
  }

  return userRepos
}