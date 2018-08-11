// External
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
// Interface
import { PageAuth } from 'containers'

@connect(
  (state) => ({
    session : state.session,
  })
)
export default class AuthWrapper extends React.Component {

  static propTypes = {
    route : PropTypes.object.isRequired, // from react-router
    // connect props
    session : PropTypes.object.isRequired,
    dispatch : PropTypes.func.isRequired,
  }

  render() {

    if (this.props.session.authenticated !== true) {
      return <PageAuth />
    }

    return renderRoutes(this.props.route.routes)
  }
}
