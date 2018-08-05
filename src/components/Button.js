import React from 'react'
import PropTypes from 'prop-types'

export default class Button extends React.PureComponent {

  static propTypes = {
    onClick : PropTypes.func,
  }

  render(){

    return (
      <button
        onClick={ this.props.onClick }>
          { this.props.children }
      </button>
    )
  }
}
