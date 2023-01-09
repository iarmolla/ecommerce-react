import React from 'react'
import ProductDescription from '../Views/ProductDescription'
import { connect } from 'react-redux'
import getProducts from '../selectors/getProducts'
import actions from '../actions/products'
import getProductsCart from '../selectors/cartProducts'

const mapStateToProps = state => {
    return {
        getProducts: getProducts(state),
        getProductsCart: getProductsCart(state)

    }
}
const mapDispatchToProps = dispatch => {
    return {
        addProduct: (product, count) => dispatch(actions.addProduct(product, count)),
        modifyProducts: (product,count) => dispatch(actions.modifyProducts(product,count)), 
        allProducts: () => dispatch(actions.getProducts()),
    }
}
const DescriptionContainer = ({ ...props }) => {
    return (
        <ProductDescription
            getProductsCart={props.getProductsCart}
            getProduct={props.getProducts}
            addProduct={props.addProduct}
            loadProducts={props.allProducts}
            modifyProducts={props.modifyProducts}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionContainer)