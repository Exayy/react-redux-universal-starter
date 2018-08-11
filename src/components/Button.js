import React from 'react'
import PropTypes from 'prop-types'

export default class Button extends React.PureComponent {

  static propTypes = {
    type : PropTypes.string,
    onClick : PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
  }

  static defaultProps = {
    type : "button"
  }

  render(){

    return (
      <button
        type={ this.props.type }
        onClick={ this.props.onClick }>
          { this.props.children }
      </button>
    )
  }
}
