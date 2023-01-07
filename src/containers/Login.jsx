import React from 'react'
import Login from '../Views/Login'
import { connect } from 'react-redux'
import getUser from '../selectors/getUsers'
import actions from '../actions/users'

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => dispatch(actions.getUsers()),
        loginUser: (values) => dispatch(actions.loginUser(values))
    }
}

const mapStateToProps = state => {
    return {
        getUsers: getUser(state)
    }
}

const LoginContainer = ({ ...props }) => {
    return (
        <Login
            footer={props.footer}
            loadUsers={props.loadUsers}
            getUsers={props.getUsers}
            loginUser={props.loginUser}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)