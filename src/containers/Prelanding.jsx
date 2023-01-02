import React from 'react'
import PrelandingView from '../Views/PrelandingView'
import { connect } from 'react-redux'
import getProducts from '../selectors/getProducts'
import actions from '../actions/products'

const mapDispatchToProps = dispatch => {
  return {
    allProducts: () => dispatch(actions.getProducts()),
  }
}
const mapStateToProps = state => {
    return {
      products: getProducts(state)
    }
  }
const PrelandingContainer = ({...props}) => {
  return (
    <PrelandingView       
      loadProducts={props.allProducts}
      getProducts={props.products}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps) (PrelandingContainer)