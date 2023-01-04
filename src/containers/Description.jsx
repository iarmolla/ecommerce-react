import React from 'react'
import ProductDescription from '../Views/ProductDescription'
import { connect } from 'react-redux'
import getProducts from '../selectors/getProducts'
import actions from '../actions/products'

const mapStateToProps = state => {
    return {
        getProducts: getProducts(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addProduct: (product, count) => dispatch(actions.addProduct(product, count)),
        allProducts: () => dispatch(actions.getProducts()),
    }
}
const DescriptionContainer = ({ ...props }) => {
    return (
        <ProductDescription
            getProduct={props.getProducts}
            addProduct={props.addProduct}
            loadProducts={props.allProducts}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionContainer)