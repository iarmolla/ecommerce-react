import { createSelector } from '@reduxjs/toolkit'

const getProducts = state => state.men
const getProductsSelector = createSelector([getProducts], (men) => {
  return men
})

export default getProductsSelector