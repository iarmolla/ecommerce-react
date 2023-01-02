import { createSelector } from '@reduxjs/toolkit'

const getProducts = state => state.products
const getProductsSelector = createSelector([getProducts], (products) => {
  return products
})

export default getProductsSelector