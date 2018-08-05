import actionTypes from 'constants/actionTypes'

const initialState = {
  status : 'initial',
  name : '',
  description : '',
  stars : '',
}

export default function(state = initialState, action) {

  switch (action.type) {

    case actionTypes.FETCH_REPO_PENDING:
      return {
        ...state,
        status : 'pending',
      }

    case actionTypes.FETCH_REPO_SUCCESS:
      return {
        ...initialState,
        status : 'ready',
        name : action.payload.name,
        description : action.payload.description,
        stars : action.payload.starCount,
      }

    case actionTypes.FETCH_REPO_ERROR:
    return {
      ...state,
      status : 'error',
    }


    default:
      return state
  }
}
