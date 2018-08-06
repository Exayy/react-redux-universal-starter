// External
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
// Css
const Wrapper = styled.section`
  width: 200px;
  background: rgb(50,50,65);
`
const StyledLink = styled(NavLink)`
  color: white;
  display: block;
  margin: 0.5em 0;
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;

  &.active {
    color: red;
  }
`;

export default class Sidebar extends React.Component {

    render() {
      return (
        <Wrapper>
          <StyledLink exact to='/'>Home</StyledLink>
          <StyledLink to='/repo/reduxjs/redux'>Param and Fetch example</StyledLink>
          <StyledLink to='/profile'>Profile</StyledLink>
        </Wrapper>
      )
    }
}
