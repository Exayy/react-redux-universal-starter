// External
import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { Sidebar, PageHome } from 'containers'
import { renderRoutes } from 'react-router-config'
import styled from 'styled-components';
// Global files
import routes from 'routes'
import 'global.css.js'
// Css
const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: row;
`
const Main = styled.section`
  flex: 1;
`

class App extends React.Component {

  render() {

    return (
      <Wrapper>
        <Sidebar />
        <Main>
          { renderRoutes(routes) }
        </Main>
      </Wrapper>
    )
  }
}

export default hot(module)(App)
