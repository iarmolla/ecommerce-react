import React from 'react'
import Men from '../Views/Men'
import { connect } from 'react-redux'
import getMen from '../selectors/getMen'
import actions from '../actions/products'

const mapDispatchToProps = dispatch => {
    return {        
        orderByPriceAscending: () => dispatch(actions.orderMenPriceAscending()),
        orderByPriceDescending: () => dispatch(actions.orderMenPriceDescending()),
        orderByName: () => dispatch(actions.orderMenName()),
        loadProducts: () => dispatch(actions.getProducts())
    }
}

const mapStateToProps = state => {
    return {
        getMen: getMen(state),
    }
}

const JeweleryContainer = ({ ...props }) => {
    return (
        <Men            
            getMen={props.getMen}
            loadProducts={props.loadProducts}
            getCart={props.getProducts}
            orderByPriceAscending={props.orderByPriceAscending}
            orderByPriceDescending={props.orderByPriceDescending}
            orderByName={props.orderByName}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(JeweleryContainer)