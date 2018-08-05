// External
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// Actions
import { incrementCounter } from 'actions'
// Interface
import { Button } from 'components'

@connect(
  (state) => ({
    value : state.counter
  })
)
export default class Counter extends React.Component {

  static propTypes = {
    // connect props
    value : PropTypes.number.isRequired,
    dispatch : PropTypes.func.isRequired,
  }

  state = {
    value : 0,
  }

  onClick = () => {
    this.props.dispatch(incrementCounter())
  }

  render() {
    return (
      <div>
        <h5>Counter example</h5>
        <div>
          You can click on the button to increment the counter value
          which is stored in redux state, you can also update a component and
          see/check that the value will not change because only the modified
          parts are updated thanks to react-hot-loader
        </div>
        <div>The current value is : { this.props.value }</div>
        <Button
          onClick={ this.onClick }>
            Click to increment
        </Button>
      </div>
    )
  }
}
