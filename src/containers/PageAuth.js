// External
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// Actions
import { auth } from 'actions/session'
// Interface
import { Button, Input } from 'components'

@connect(
  (state) => ({
    session : state.session,
  })
)
export default class PageAuth extends React.Component {

  static propTypes = {
    // connect props
    session : PropTypes.object.isRequired,
    dispatch : PropTypes.func.isRequired,
  }

  onLogin = (e) => {
    e.preventDefault();
    this.props.dispatch(auth(this.state.login, this.state.password));
  }

  onLoginChange = (value) => {
    this.setState({
      login : value,
    })
  }

  onPasswordChange = (value) => {
    this.setState({
      password : value,
    })
  }

  render() {
    return (
      <div>
        <div>This is a secure app the login/password combination is test/test, please enter them to loging and access profile page</div>
        <form onSubmit={ this.onLogin }>
          <Input onChange={ this.onLoginChange }/>
          <Input type="password" onChange={ this.onPasswordChange }/>
          <Button type="submit">Log in</Button>
          {
            this.props.session.error === true &&
            <div>Invalid credentials</div>
          }
        </form>
      </div>
    )
  }
}
