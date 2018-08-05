import actionTypes from 'constants/actionTypes'

const initialState = 0

export default function(state = initialState, action) {

  switch (action.type) {

    case actionTypes.INCREMENT_COUNTER:
      return state + 1

    default:
      return state
  }
}
