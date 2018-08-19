// External
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
// Css
const Wrapper = styled.section`
  width: 200px;
  background: rgb(22, 32, 40);
  padding: 20px;
`
const StyledLink = styled(NavLink)`
  color: rgb(80, 100, 130);
  display: block;
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;
  border: 1px solid rgb(40, 100, 130);
  border-width: 1px 0 0 0;
  padding: 0.5rem 0;
  text-align: center;

  &.active, &:hover {
    color: white;
  }

  &:hover {
    background: rgb(30, 40, 50);
  }

  &:last-child {
    border-width: 1px 0;
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
