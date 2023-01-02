import { createSelector } from '@reduxjs/toolkit'

const getProducts = state => state?.cart
const getProductsSelector = createSelector([getProducts], (products) => {
  return products
})

export default getProductsSelector