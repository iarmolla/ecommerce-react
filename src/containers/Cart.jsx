import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions/products'
import Cart from '../Views/Cart'
import getProducts from '../selectors/cartProducts'


const mapDispatchToProps = dispatch => {
    return {
        deleteProduct: (id) => dispatch(actions.deleteProduct(id)),
        modifyProduct: (product) => dispatch(actions.modifyProduct(product)),
        modifyStock: (product) => dispatch(actions.modifyStock(product)),
        // modifyProducts: (product, count) => dispatch(actions.modifyProducts(product, count)),
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
            modifyProduct={props.modifyProduct}
            modifyProducts={props.modifyProducts}
            getCart={props.getProducts}
            deleteProduct={props.deleteProduct}
            modifyStock={props.modifyStock}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)