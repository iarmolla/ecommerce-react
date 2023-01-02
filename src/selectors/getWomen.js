import { createSelector } from '@reduxjs/toolkit'

const getProducts = state => state.women
const getProductsSelector = createSelector([getProducts], (women) => {
  return women
})

export default getProductsSelector