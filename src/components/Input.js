import React from 'react'
import PropTypes from 'prop-types'

export default class Input extends React.PureComponent {

  static propTypes = {
    type : PropTypes.string,
    onChange : PropTypes.func.isRequired,
  }

  static defaultProps = {
    type: "text",
  }

  onChangeHandler = (event) => {
    this.props.onChange(event.target.value)
  }

  render(){

    return (
      <input
        type={ this.props.type }
        onChange={ this.onChangeHandler } />
    )
  }
}
