import React from 'react'
import Women from '../Views/Women'
import { connect } from 'react-redux'
import getWomen from '../selectors/getWomen'
import actions from '../actions/products'

const mapDispatchToProps = dispatch => {
    return {        
        orderByPriceAscending: () => dispatch(actions.orderWomenPriceAscending()),
        orderByPriceDescending: () => dispatch(actions.orderWomenPriceDescending()),
        orderByName: () => dispatch(actions.orderWomenName()),
        loadProducts: () => dispatch(actions.getProducts()),
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
            loadProducts={props.loadProducts}
            getWomen={props.getWomen}
            orderByPriceAscending={props.orderByPriceAscending}
            orderByPriceDescending={props.orderByPriceDescending}
            orderByName={props.orderByName}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(WomenContainer)