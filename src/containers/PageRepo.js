// External
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchRepo } from 'actions'

@connect(
  (state) => ({
    repo: state.repo,
  })
)
export default class PageRepo extends React.Component {

  static propTypes = {
    match : PropTypes.object.isRequired, // from react-router
    // connect props
    repo : PropTypes.object,
    dispatch : PropTypes.func.isRequired,
  }

  static fetchData(dispatch, params) {
    return dispatch(fetchRepo(params.organization, params.project))
  }

  componentDidMount(){
    PageRepo.fetchData(this.props.dispatch, this.props.match.params)
  }

  render() {

    return (
      <div>
        {
          this.props.repo.status === 'pending' &&
          <div>En cours de chargement</div>
        }
        {
          this.props.repo.status === 'error' &&
          <div>Error during the fetch of repository datas</div>
        }
        {
          this.props.repo.status === 'ready' &&
          <div>
            <div>Name : {this.props.repo.name}</div>
            <div>Description : {this.props.repo.description}</div>
            <div>Stars : {this.props.repo.stars}</div>
          </div>
        }
      </div>
    )
  }
}
