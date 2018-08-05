// External
import React from 'react'
import { renderRoutes } from 'react-router-config'

export default class AuthWrapper extends React.Component {

    render() {
      return (
        <div>
          Authentication
          { renderRoutes(this.props.route.routes) }
        </div>
      )
    }
}
