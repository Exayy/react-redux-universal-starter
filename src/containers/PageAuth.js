// External
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components';
// Actions
import { auth } from 'actions/session'
// Interface
import { Button, Input } from 'components'
// Style
const Wrapper = styled.section`
  position: relative;
  height: 100%;
`
const Label = styled.label`
  display:block;
`
const StyledInput = styled(Input)`
  width: 100%;
`
const Form = styled.form`
  width:60%
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

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
      <Wrapper>
        <Form onSubmit={ this.onLogin }>
          <div>This is a secure app the login/password combination is test/test, please enter them to loging and access profile page</div>
          <div>
            <Label>Login</Label>
            <StyledInput onChange={ this.onLoginChange }/>
          </div>
          <div>
            <Label>Password</Label>
            <StyledInput type="password" onChange={ this.onPasswordChange }/>
          </div>
          <Button type="submit">Log in</Button>
          {
            this.props.session.error === true &&
            <div>Invalid credentials</div>
          }
        </Form>
      </Wrapper>
    )
  }
}
