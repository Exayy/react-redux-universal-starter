// External
import React from 'react'
import { hot } from 'react-hot-loader'
import { Sidebar } from 'containers'
import { renderRoutes } from 'react-router-config'
import styled from 'styled-components';
// Global files
import routes from 'routes'
import 'global.css.js'
// Style
const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: row;
`
const Main = styled.section`
  flex: 1;
  background: #EEE;
  padding: 20px;
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

// eslint
export default hot(module)(App)
