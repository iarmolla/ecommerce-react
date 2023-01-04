import React from 'react'
import { connect } from 'react-redux'
import getTechnology from '../selectors/getTechnology'
import actions from '../actions/products'
import Technology from '../Views/Technology'

const mapDispatchToProps = dispatch => {
    return {
        loadTechnology: () => dispatch(actions.getTechnology()),
        orderByPriceAscending: () => dispatch(actions.orderTechnologyPriceAscending()),
        orderByPriceDescending: () => dispatch(actions.orderTechnologyPriceDescending()),
        orderByName: () => dispatch(actions.orderTechnologyName())
    }
}
const mapStateToProps = state => {
    return {
        getTechnology: getTechnology(state)
    }
}
const loadTechnologyContainer = ({ ...props }) => {
    return (
        <Technology
            loadTechnology={props.loadTechnology}
            getTechnology={props.getTechnology}
            orderByPriceAscending={props.orderByPriceAscending}
            orderByPriceDescending={props.orderByPriceDescending}
            orderByName={props.orderByName}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(loadTechnologyContainer)