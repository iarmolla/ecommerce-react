import React from 'react'
import Jewelery from '../Views/Jewelery'
import { connect } from 'react-redux'
import getJewelery from '../selectors/getJewelery'
import actions from '../actions/products'

const mapDispatchToProps = dispatch => {
    return {
        getJewelery: () => dispatch(actions.getJewelery()),
        orderByPriceAscending: () => dispatch(actions.orderJeweleryPriceAscending()),
        orderByPriceDescending: () => dispatch(actions.orderJeweleryPriceDescending()),
        orderByName: () => dispatch(actions.orderJeweleryName())
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
            orderByPriceAscending={props.orderByPriceAscending}
            orderByPriceDescending={props.orderByPriceDescending}
            orderByName={props.orderByName}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(JeweleryContainer)