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
const DescriptionContainer = ({ ...props }) => {
    return (
        <ProductDescription            
            getProduct={props.getProducts}
        />
    )
}

export default connect(mapStateToProps, null)(DescriptionContainer)