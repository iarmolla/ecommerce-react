import React from 'react'
import Jewelery from '../Views/Jewelery'
import { connect } from 'react-redux'
import getJewelery from '../selectors/getJewelery'
import actions from '../actions/products'

const mapDispatchToProps = dispatch => {
    return {
        getJewelery: () => dispatch(actions.getJewelery())
    }
}
const mapStateToProps = state => {
    return {
        jewelery: getJewelery(state)
    }
}
const JeweleryContainer = ({ ...props }) => {
    return (
        <Jewelery
            getJewelery={props.getJewelery}
            jewelery={props.jewelery}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(JeweleryContainer)