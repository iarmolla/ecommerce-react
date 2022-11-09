import React from 'react'
import PrelandingView from '../Views/PrelandingView'
import { connect } from 'react-redux'
import getUsers from '../selectors/getUsers'
import actions from '../actions/users'

const mapDispatchToProps = dispatch => {
  return {
    loadUser: id => dispatch(actions.getUserFetch(id)),
  }
}
const mapStateToProps = state => {
    return {
      users: getUsers(state)
    }
  }
const PrelandingContainer = ({...props}) => {
  return (
    <PrelandingView       
      loadUser={props.loadUser}
      users={props.users}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps) (PrelandingContainer)