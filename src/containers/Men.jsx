import React from 'react'
import Men from '../Views/Men'
import { connect } from 'react-redux'
import getMen from '../selectors/getMen'
import actions from '../actions/products'

const mapDispatchToProps = dispatch => {
    return {
        loadMen: () => dispatch(actions.getMen()),       
    }
}
const mapStateToProps = state => {
    return {
        getMen: getMen(state)
    }
}
const JeweleryContainer = ({ ...props }) => {
    return (
        <Men
            loadMen={props.loadMen}
            getMen={props.getMen}           
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(JeweleryContainer)