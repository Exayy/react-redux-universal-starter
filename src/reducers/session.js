import actionTypes from 'constants/actionTypes'

const initialState = {
  authenticated : false,
  error : null,
}

export default function(state = initialState, action) {

  switch (action.type) {

    case actionTypes.AUTH_SUCCESS:
      return {
        error : null,
        authenticated : true,
      }

    case actionTypes.AUTH_ERROR:
      return {
        error : true,
        authenticated : false,
      }

    default:
      return state
  }
}
