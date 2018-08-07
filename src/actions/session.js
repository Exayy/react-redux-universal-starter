import actionTypes from 'constants/actionTypes'

const AWESOME_LOGIN = 'test'
const AWESOME_PASSWORD = 'test'

export function auth(login, password){

  if (login === AWESOME_LOGIN && password === AWESOME_PASSWORD) {
    return {
      type : actionTypes.AUTH_SUCCESS
    }
  }

  return {
    type : actionTypes.AUTH_ERROR
  }
}
