import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions/products'
import Cart from '../Views/Cart'
import getProducts from '../selectors/cartProducts'


const mapDispatchToProps = dispatch => {
    return {
        deleteProduct: (id) => dispatch(actions.deleteProduct(id))
    }
}
const mapStateToProps = state => {
    return {
        getProducts: getProducts(state)
    }
}
const CartContainer = ({ ...props }) => {
    return (
        <Cart            
            getCart={props.getProducts}
            deleteProduct={props.deleteProduct}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)