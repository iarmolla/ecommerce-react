import React from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import getUser from '../selectors/getUsers'

const mapStateToProps = state => {
    return {
        getUsers: getUser(state)
    }
}

const LoginContainer = ({ ...props }) => {
    return (
        <NavBar            
            getUsers={props.getUsers}           
        />
    )
}

export default connect(mapStateToProps, null)(LoginContainer)