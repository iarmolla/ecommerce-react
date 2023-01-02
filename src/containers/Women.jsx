import React from 'react'
import Women from '../Views/Women'
import { connect } from 'react-redux'
import getWomen from '../selectors/getWomen'
import actions from '../actions/products'

const mapDispatchToProps = dispatch => {
    return {
        loadWomen: () => dispatch(actions.getWomen())
    }
}

const mapStateToProps = state => {
    return {
        getWomen: getWomen(state)
    }
}

const WomenContainer = ({ ...props }) => {
    return (
        <Women
            loadWomen={props.loadWomen}
            getWomen={props.getWomen}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(WomenContainer)