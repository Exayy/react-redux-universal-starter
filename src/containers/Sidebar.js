// External
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
// Css
const Wrapper = styled.section`
  width: 200px;
  background: #EEE;
`
const StyledLink = styled(Link)`
  color: palevioletred;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;

  &[data-active] {
    color: red;
  }
`;

export default class Sidebar extends React.Component {

    render() {
      return (
        <Wrapper>
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/repo/reduxjs/redux'>Param and Fetch example</StyledLink>
          <StyledLink to='/profile'>Profile</StyledLink>
        </Wrapper>
      )
    }
}
